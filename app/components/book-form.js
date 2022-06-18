import Component from '@ember/component';
//import { get, set } from '@ember/object';

export default Component.extend({
  actions: {
    submitForm(e) {
      // e.preventDefault();
      // this.onsubmit({
      //   id: this.get('idBook'),
      //   title: this.get('title'),
      //   author: this.get('author'),
      //   pages: this.get('pages'),
      // })

      e.preventDefault();
      //set(this, 'isUploadingFile', true);
      //const uploadData = get(this, 'uploadData');
      this.onsubmit({
        id: this.get('idBook'),
        title: this.get('title'),
        author: this.get('author'),
        pages: this.get('pages'),
        bookURL: this.get('bookURL'),
        tags: this.get('tags'),
        coverURL: '',
      });

      //set(this, 'isUploadingFile', false);
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      idBook: this.get('book.id') ? this.get('book.id') : undefined,
      title: this.get('book.title'),
      author: this.get('book.author'),
      pages: this.get('book.pages'),
      bookURL: this.get('book.bookURL'),
      tags: this.get('book.tags'),
    })
  }
});
