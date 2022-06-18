import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
    },

    async saveBook(e) {
      e.preventDefault();

      set(this, 'isUploadingFile', true);
      const uploadData = get(this, 'uploadData');
      await this.get("dataService").editBook({
        id: this.get('id'),
        title: this.get('title'),
        author: this.get('author'),
        pages: this.get('pages'),
        bookURL: this.get('bookURL'),
        tags: this.get('tags'),
        coverURL: this.get('coverURL'),
      }, uploadData);

      set(this, 'isUploadingFile', false);
      this.transitionToRoute('books');
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    },

    change() {
      set(this, 'tags', ['1', '2', '3']);
    },
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
