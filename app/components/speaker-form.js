import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();
      this.onsubmit({
        id: this.get('idAuthor'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        patronymic: this.get('patronymic')
      })
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      idAuthor: this.get('speaker.id') ? this.get('speaker.id') : undefined,
      firstName: this.get('speaker.firstName'),
      lastName: this.get('speaker.lastName'),
      patronymic: this.get('speaker.patronymic')
    })
  }
});
