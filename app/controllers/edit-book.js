import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import ENV from 'books-demo/config/environment';

export default Controller.extend({
  dataService: service('data'),
  errorService: service(),

  actions: {
    async saveBook(book, uploadData) {
      return new Promise(async (resolve, reject) => {
        try {
          let bookModel = this.get('model');
          bookModel.set('title', book.title);
          bookModel.set('author', book.author);
          bookModel.set('pages', book.pages);
          bookModel.set('bookURL', book.bookURL);
          bookModel.set('tags', book.tags);

          await bookModel.save();

          if (!uploadData) {
            resolve();
            this.transitionToRoute('books');
          }

          uploadData.url = `${ENV.fileUploadURL}`;
          uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
            try {
              const dataToUpload = {
                entityName: 'books',
                id: bookModel.id,
                fileName: result.filename
              };

              await fetch(`${ENV.backendURL}/saveURL`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToUpload)
              });

              // eslint-disable-next-line no-console
              console.log('Ok');
              resolve();
              this.transitionToRoute('books');
            }
            catch (e) {
              reject(e);
            }
          }).fail((jqXhr, textStatus, errorThrown) => {
            reject(errorThrown);
          });
        }
        catch (e) {
          let err = this.get('errorService').createLog(e);
          let errorModel = this.get('store').createRecord('error', err);
          await errorModel.save();
          reject(e);
        }
      });
      }
  },

  reset() {
    set(this, 'isUploadingFile', false);
    set(this, 'id', this.get('model.id'));
    set(this, 'title', this.get('model.title'));
    set(this, 'author', this.get('model.author'));
    set(this, 'pages', this.get('model.pages'));
    set(this, 'bookURL', this.get('model.bookURL'));
    set(this, 'tags', this.get('model.tags'));
    set(this, 'coverURL', this.get('model.coverURL'));
    set(this, 'uploadData', null);
  }
});
