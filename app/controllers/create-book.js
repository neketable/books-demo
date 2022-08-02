import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import { set } from '@ember/object';
import ENV from 'books-demo/config/environment';

export default Controller.extend({
  dataService: service('data'),
  errorService: service(),

  init(){
    this._super(...arguments);
    this.set('book', EmberObject.create());
    this.get('book').set('title', '');
    this.get('book').set('author', '');
    this.get('book').set('pages', '');
    this.get('book').set('bookURL', '');
    this.get('book').set('tags', []);
    this.get('book').set('coverURL', '');
  },
  actions: {
    async saveBook(book, uploadData) {
      // await this.get('dataService').createBook(book, uploadData)
      return new Promise(async (resolve, reject) => {
        try {
          let bookModel = this.get('store').createRecord('book', book);
          await bookModel.save();

          if (!uploadData) {
            resolve();
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
    set(this, 'title', '');
    set(this, 'author', '');
    set(this, 'pages', '');
    set(this, 'bookURL', '');
    set(this, 'tags', []);
    set(this, 'uploadData', null);
  }
});
