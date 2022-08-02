import Component from '@ember/component';
import { get, set } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';
import { inject as service } from '@ember/service';

const Validations = buildValidations({
  title: [
    validator('ds-error'),
    validator('presence', true),
  ],
  author: [
    validator('ds-error'),
    validator('presence', true),
  ],
  pages: [
    validator('ds-error'),
    validator('presence', true),
    validator('number', {
      allowString: true,
      integer: true,
    })
  ],
  bookURL: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', {
      type: 'url'
    })
  ],
  tags: [
    validator('ds-error'),
    validator('presence', true),
  ],
});

export default Component.extend(Validations, {
  currentUser: service(),
  errorService: service(),
  i18n: service(),
  isInvalid: false,
  actions: {
    submitForm(e) {
      try{
        e.preventDefault();
        set(this, 'isInvalid', !this.get('validations.isValid'));
        if (!get(this, 'isInvalid')) {
          const uploadData = get(this, 'uploadData');
          this.onsubmit({
            id: this.get('idBook'),
            title: this.get('title'),
            author: this.get('author'),
            pages: this.get('pages'),
            bookURL: this.get('bookURL'),
            tags: this.get('tags'),
            user: this.get('currentUser.user'),
            coverURL: '',
          }, uploadData);
        }
    }
    catch(e){
      let err = this.get('errorService').createLog(e);
      let errorModel = this.get('store').createRecord('error', err);
      errorModel.save();
    }
    },
    changeUploadData(uploadData) {
      set(this, 'uploadData', uploadData);
    },

    changeTags(newTags) {
      set(this, 'tags', [...newTags]);
    },

    change() {
      set(this, 'tags', ['1', '2', '3']);
    },
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
      coverURL: this.get('book.coverURL')
    })
  },
});
