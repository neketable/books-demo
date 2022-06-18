import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  // init() {
  //   this._super(...arguments);
  //   set(this, 'tags', []);
  //   set(this, 'uploadData', null);
  // },

  actions: {
    changeTags(newTags) {
      set(this, 'tags', [...newTags]);

      // eslint-disable-next-line no-console
      console.log(get(this, 'tags'));
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
      this.transitionToRoute('temp');
    },

    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    },

    change() {
      set(this, 'tags', ['1', '2', '3']);
    },

    goToTemp() {
      this.transitionToRoute('books')
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

