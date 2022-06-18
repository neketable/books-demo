import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
//import EmberObject from '@ember/object';
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
      await this.get("dataService").createBook({
        title: this.get('title'),
        author: this.get('author'),
        pages: this.get('pages'),
        bookURL: this.get('bookURL'),
        tags: this.get('tags'),
        coverURL: '',
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
    set(this, 'title', '');
    set(this, 'author', '');
    set(this, 'pages', '');
    set(this, 'bookURL', '');
    set(this, 'tags', []);
    set(this, 'uploadData', null);
  }
});
