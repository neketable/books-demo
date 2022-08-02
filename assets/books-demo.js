"use strict";



define('books-demo/abilities/book', ['exports', 'ember-can'], function (exports, _emberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCan.Ability.extend({
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),

    // only the person who wrote a post can edit it
    canEdit: Ember.computed(function () {
      var _this = this;

      if (!this.get('session.isAuthenticated')) {
        return false;
      }

      return new Ember.RSVP.Promise(function (resolve, reject) {
        return _this.get('model.user').then(function (user) {
          resolve(user.get('email') === _this.get('currentUser.user.email'));
        }).catch(function () {
          reject(false);
        });
      });
    }).volatile()
  });
});
define('books-demo/abilities/meeting', ['exports', 'ember-can'], function (exports, _emberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCan.Ability.extend({
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),

    // only the person who wrote a post can edit it
    canEdit: Ember.computed(function () {
      var _this = this;

      if (!this.get('session.isAuthenticated')) {
        return false;
      }

      return new Ember.RSVP.Promise(function (resolve, reject) {
        return _this.get('model.user').then(function (user) {
          resolve(user.get('email') === _this.get('currentUser.user.email'));
        }).catch(function () {
          reject(false);
        });
      });
    }).volatile()
  });
});
define('books-demo/abilities/speaker', ['exports', 'ember-can'], function (exports, _emberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCan.Ability.extend({
    currentUser: Ember.inject.service(),
    session: Ember.inject.service(),

    // only the person who wrote a post can edit it
    canEdit: Ember.computed(function () {
      var _this = this;

      if (!this.get('session.isAuthenticated')) {
        return false;
      }

      return new Ember.RSVP.Promise(function (resolve, reject) {
        return _this.get('model.user').then(function (user) {
          resolve(user.get('email') === _this.get('currentUser.user.email'));
        }).catch(function () {
          reject(false);
        });
      });
    }).volatile()
  });
});
define('books-demo/adapters/application', ['exports', 'ember-data', 'books-demo/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: _environment.default.backendURL,
    session: Ember.inject.service(),

    headers: Ember.computed(function () {
      var resultHeaders = {
        'Content-Type': 'application/json'
      };

      if (this.get('session.isAuthenticated')) {
        resultHeaders['Authorization'] = 'Bearer ' + this.session.data.authenticated.token;
      }

      return resultHeaders;
    }).volatile(),

    buildURL: function buildURL(modelName, id, snapshot, requestType) {
      var url = this._super.apply(this, arguments);
      if (modelName === 'meeting' && requestType === 'findAll') {
        url += '?_embed=reviews';
      }
      if (modelName === 'meeting' && requestType === 'findRecord' && id) {
        url += '?_embed=reviews';
      }
      if (modelName === 'meeting' && requestType === 'query') {
        url += '?_embed=reviews';
      }
      if (modelName === 'review' && requestType === 'query') {
        url += '?_expand=meeting';
      }

      return url;
    },
    handleResponse: function handleResponse(status, headers, payload) {
      var meta = {
        total: headers['x-total-count']
      };

      payload.meta = meta;

      return this._super(status, headers, payload);
    }
  });
});
define('books-demo/adapters/user', ['exports', 'books-demo/adapters/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    urlForQueryRecord: function urlForQueryRecord(query) {
      if (query.me) {
        delete query.me;

        return this._super.apply(this, arguments) + '/me';
      }

      return this._super.apply(this, arguments);
    }
  });
});
define('books-demo/app', ['exports', 'books-demo/resolver', 'ember-load-initializers', 'books-demo/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('books-demo/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('books-demo/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('books-demo/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('books-demo/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('books-demo/components/book-form', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var Validations = (0, _emberCpValidations.buildValidations)({
    title: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
    author: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
    pages: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('number', {
      allowString: true,
      integer: true
    })],
    bookURL: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('format', {
      type: 'url'
    })],
    tags: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
  });

  exports.default = Ember.Component.extend(Validations, {
    currentUser: Ember.inject.service(),
    errorService: Ember.inject.service(),
    i18n: Ember.inject.service(),
    isInvalid: false,
    actions: {
      submitForm: function submitForm(e) {
        try {
          e.preventDefault();
          Ember.set(this, 'isInvalid', !this.get('validations.isValid'));
          if (!Ember.get(this, 'isInvalid')) {
            var uploadData = Ember.get(this, 'uploadData');
            this.onsubmit({
              id: this.get('idBook'),
              title: this.get('title'),
              author: this.get('author'),
              pages: this.get('pages'),
              bookURL: this.get('bookURL'),
              tags: this.get('tags'),
              user: this.get('currentUser.user'),
              coverURL: ''
            }, uploadData);
          }
        } catch (e) {
          var err = this.get('errorService').createLog(e);
          var errorModel = this.get('store').createRecord('error', err);
          errorModel.save();
        }
      },
      changeUploadData: function changeUploadData(uploadData) {
        Ember.set(this, 'uploadData', uploadData);
      },
      changeTags: function changeTags(newTags) {
        Ember.set(this, 'tags', [].concat(_toConsumableArray(newTags)));
      },
      change: function change() {
        Ember.set(this, 'tags', ['1', '2', '3']);
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);

      this.setProperties({
        idBook: this.get('book.id') ? this.get('book.id') : undefined,
        title: this.get('book.title'),
        author: this.get('book.author'),
        pages: this.get('book.pages'),
        bookURL: this.get('book.bookURL'),
        tags: this.get('book.tags'),
        coverURL: this.get('book.coverURL')
      });
    }
  });
});
define('books-demo/components/book-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books-demo/components/bootstrap-datepicker-inline', ['exports', 'ember-bootstrap-datepicker/components/bootstrap-datepicker-inline'], function (exports, _bootstrapDatepickerInline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bootstrapDatepickerInline.default;
});
define('books-demo/components/bootstrap-datepicker', ['exports', 'ember-bootstrap-datepicker/components/bootstrap-datepicker'], function (exports, _bootstrapDatepicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _bootstrapDatepicker.default;
});
define('books-demo/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('books-demo/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books-demo/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('books-demo/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('books-demo/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('books-demo/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('books-demo/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('books-demo/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('books-demo/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('books-demo/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('books-demo/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('books-demo/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('books-demo/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('books-demo/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('books-demo/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('books-demo/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books-demo/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books-demo/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('books-demo/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('books-demo/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books-demo/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('books-demo/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-demo/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('books-demo/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('books-demo/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('books-demo/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('books-demo/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('books-demo/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('books-demo/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('books-demo/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('books-demo/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('books-demo/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('books-demo/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('books-demo/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('books-demo/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('books-demo/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('books-demo/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('books-demo/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('books-demo/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('books-demo/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('books-demo/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('books-demo/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books-demo/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('books-demo/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('books-demo/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('books-demo/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('books-demo/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('books-demo/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('books-demo/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books-demo/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('books-demo/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('books-demo/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('books-demo/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('books-demo/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('books-demo/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('books-demo/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('books-demo/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('books-demo/components/g-recaptcha-invisible', ['exports', 'ember-cli-google-recaptcha/components/g-recaptcha-invisible'], function (exports, _gRecaptchaInvisible) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptchaInvisible.default;
    }
  });
});
define('books-demo/components/g-recaptcha-v2', ['exports', 'ember-cli-google-recaptcha/components/g-recaptcha-v2'], function (exports, _gRecaptchaV) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptchaV.default;
    }
  });
});
define('books-demo/components/input-files', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    isFileChoosen: Ember.computed('uploadData', function () {
      return this.get('uploadData') && this.get('uploadData').files.length;
    }),

    ifRemoveButtonDisabled: Ember.computed('isFileChoosen', function () {
      return !this.get('isFileChoosen');
    }),

    fileName: Ember.computed('isFileChoosen', function () {
      return this.get('isFileChoosen') ? this.get('uploadData').files[0].name : 'Выберите файл';
    }),

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      var onFileAdd = function onFileAdd(e, uploadData) {
        _this.uploadDataChanged(uploadData);
      };

      if (!this.$('.custom-file-input').fileupload('instance')) {
        // Initialize jQuery fileupload plugin (https://github.com/blueimp/jQuery-File-Upload/wiki/API).
        this.$('.custom-file-input').fileupload({
          // Disable autoUpload.
          autoUpload: false,

          // Type of data that is expected back from the server.
          dataType: 'json',

          // Maximum number of files to be selected and uploaded.
          maxNumberOfFiles: 1,

          // Enable single file uploads.
          singleFileUploads: true,

          // Disable drag&drop file adding.
          dropZone: null,

          // File add handler.
          add: onFileAdd
        });
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      if (this.$('.custom-file-input').fileupload('instance')) {
        this.$('.custom-file-input').fileupload('destroy');
      }
    },


    actions: {
      removeFile: function removeFile() {
        Ember.set(this, 'uploadData', null);
      }
    }
  });
});
define('books-demo/components/input-tags', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports.default = Ember.Component.extend({
    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      var el = this.$();

      Ember.set(this, 'addTag', function (e) {
        _this.tagAdded(e.item);
      });

      Ember.set(this, 'removeTag', function (e) {
        _this.tagRemoved(e.item);
      });

      el.on('itemAdded', this.addTag);
      el.on('itemRemoved', this.removeTag);
    },
    didReceiveAttrs: function didReceiveAttrs() {
      var tags = Ember.get(this, 'tags');
      (true && !(Ember.typeOf(tags) === 'array') && Ember.assert('Passed tags must be an array', Ember.typeOf(tags) === 'array'));

      Ember.set(this, '_tags', [].concat(_toConsumableArray(tags)));
    },
    didRender: function didRender() {
      var arraysAreEqual = function arraysAreEqual(arr1, arr2) {
        arr2 = arr2.itemsArray ? arr2.itemsArray : arr2;
        return Ember.$(arr1).not(arr2).length === 0 && Ember.$(arr2).not(arr1).length === 0;
      };

      var el = this.$();

      var currentValues = el.tagsinput('items');
      var tags = Ember.get(this, '_tags');

      if (!arraysAreEqual(tags, currentValues)) {
        el.tagsinput('removeAll');
        tags.forEach(function (tag) {
          el.tagsinput('add', tag);
        });
      }
    },
    tagAdded: function tagAdded(newTag) {
      Ember.get(this, '_tags').push(newTag);
      this.get('onChange')(this._tags);
    },
    tagRemoved: function tagRemoved(tag) {
      var tagIndex = Ember.get(this, '_tags').indexOf(tag);
      if (tagIndex > -1) {
        var part1 = Ember.get(this, '_tags').slice(0, tagIndex);
        var part2 = Ember.get(this, '_tags').slice(tagIndex + 1);
        Ember.set(this, '_tags', [].concat(_toConsumableArray(part1), _toConsumableArray(part2)));
        this.get('onChange')(this._tags);
      }
    },
    willDestroyElement: function willDestroyElement() {
      var el = this.$();
      el.off('itemAdded', this.addTag);
      el.off('itemRemoved', this.removeTag);
    }
  });
});
define('books-demo/components/login-form', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Validations = (0, _emberCpValidations.buildValidations)({
    email: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('format', {
      type: 'email'
    })],
    password: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
  });

  exports.default = Ember.Component.extend(Validations, {
    errorService: Ember.inject.service(),
    actions: {
      login: function login(e) {
        try {
          e.preventDefault();
          Ember.set(this, 'isInvalid', !this.get('validations.isValid'));
          if (!Ember.get(this, 'isInvalid')) {
            this.get('onSubmit')({
              email: this.email,
              password: this.password
            });
          }
        } catch (e) {
          var err = this.get('errorService').createLog(e);
          var errorModel = this.get('store').createRecord('error', err);
          errorModel.save();
        }
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this.setProperties({
        email: this.get('user.email'),
        password: this.get('user.password')
      });
    }
  });
});
define('books-demo/components/meeting-form', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var Validations = (0, _emberCpValidations.buildValidations)({
    dateOfMeeting: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('date')]
  });

  exports.default = Ember.Component.extend(Validations, {
    errorService: Ember.inject.service(),
    currentUser: Ember.inject.service(),
    i18n: Ember.inject.service(),
    isInvalid: false,
    //isCreating: false,
    actions: {
      submitForm: function submitForm(e) {
        try {
          e.preventDefault();
          Ember.set(this, 'isInvalid', !this.get('validations.isValid'));
          if (!Ember.get(this, 'isInvalid')) {
            this.onsubmit({
              id: this.get('idMeeting'),
              dateOfMeeting: this.get('dateOfMeeting'),
              user: this.get('currentUser.user')
              //reviews: this.get('reviews')
            });
          }
        } catch (e) {
          var err = this.get('errorService').createLog(e);
          var errorModel = this.get('store').createRecord('error', err);
          errorModel.save();
        }
      },
      deleteReview: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(review) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return review.destroyRecord();

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function deleteReview(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteReview;
      }()
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);

      this.setProperties({
        idMeeting: this.get('meeting.id') ? this.get('meeting.id') : undefined,
        dateOfMeeting: this.get('meeting.dateOfMeeting')
        //reviews: this.get('meeting.reviews') ? this.get('meeting.reviews') : undefined
      });
    }
  });
});
define('books-demo/components/meeting-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books-demo/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('books-demo/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('books-demo/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('books-demo/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('books-demo/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('books-demo/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('books-demo/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('books-demo/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('books-demo/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('books-demo/components/register-form', ['exports', 'fetch', 'books-demo/config/environment', 'ember-cp-validations'], function (exports, _fetch, _environment, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var Validations = (0, _emberCpValidations.buildValidations)({
    email: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true), (0, _emberCpValidations.validator)('format', {
      type: 'email'
    })],
    password: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
  });

  exports.default = Ember.Component.extend(Validations, {
    errorService: Ember.inject.service(),
    iAmRobot: true,
    reset: false,

    actions: {
      saveUser: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  try {
                    e.preventDefault();
                    Ember.set(this, 'isInvalid', !this.get('validations.isValid'));
                    if (!Ember.get(this, 'isInvalid')) {
                      this.get('onSubmit')({
                        email: this.email,
                        password: this.password,
                        passwordConfirmation: this.passwordConfirmation
                      });
                    }
                  } catch (e) {
                    err = this.get('errorService').createLog(e);
                    errorModel = this.get('store').createRecord('error', err);

                    errorModel.save();
                  }

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function saveUser(_x) {
          return _ref.apply(this, arguments);
        }

        return saveUser;
      }(),
      verified: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key) {
          var _ref3, success;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return (0, _fetch.default)(_environment.default.backendURL + '/recaptcha?key=' + key);

                case 3:
                  _context2.next = 5;
                  return _context2.sent.json();

                case 5:
                  _ref3 = _context2.sent;
                  success = _ref3.success;


                  this.set('iAmRobot', !success);
                  _context2.next = 13;
                  break;

                case 10:
                  _context2.prev = 10;
                  _context2.t0 = _context2['catch'](0);

                  this.set('reset', true);

                case 13:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[0, 10]]);
        }));

        function verified(_x2) {
          return _ref2.apply(this, arguments);
        }

        return verified;
      }(),
      expired: function expired() {
        this.set('iAmRobot', true);
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this.setProperties({
        email: this.get('user.email'),
        password: this.get('user.password'),
        passwordConfirmation: this.get('user.passwordConfirmation')
      });
    }
  });
});
define('books-demo/components/review-form', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Component.extend({
    errorService: Ember.inject.service(),
    store: Ember.inject.service(),
    currentUser: Ember.inject.service(),
    actions: {
      submitForm: function submitForm(e) {
        try {
          e.preventDefault();
          this.onsubmit({
            id: this.get('idReview'),
            dateOfReview: this.get('dateOfMeeting'),
            markBook: this.get('markBook'),
            presentationURL: this.get('presentationURL'),
            videoURL: this.get('videoURL'),
            report: this.get('report'),
            book: this.get('book'),
            speaker: this.get('speaker'),
            meeting: this.get('meeting')
            //newPole: this.get('dateOfMeeting')
          });
        } catch (e) {
          var err = this.get('errorService').createLog(e);
          var errorModel = this.get('store').createRecord('error', err);
          errorModel.save();
        }
      },
      deleteReview: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(review) {
          var err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return review.destroyRecord();

                case 3:
                  _context.next = 10;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context['catch'](0);
                  err = this.get('errorService').createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);

                  errorModel.save();

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 5]]);
        }));

        function deleteReview(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteReview;
      }(),
      searchSpeaker: function searchSpeaker(query) {
        return this.get('store').query('speaker', { q: query });
      },
      searchBook: function searchBook(query) {
        return this.get('store').query('book', { q: query });
      },
      searchMeeting: function searchMeeting(query) {
        return this.get('store').query('meeting', { q: query });
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);

      this.setProperties({
        idReview: this.get('review.id') ? this.get('review.id') : undefined,
        dateOfReview: this.get('review.dateOfReview'),
        markBook: this.get('review.markBook'),
        presentationURL: this.get('review.presentationURL'),
        videoURL: this.get('review.videoURL'),
        report: this.get('review.report'),
        book: this.get('review.book'),
        speaker: this.get('review.speaker'),
        meeting: this.get('review.meeting'),
        dateOfMeeting: this.get('review.meeting.dateOfMeeting')
      });
    }
  });
});
define('books-demo/components/review-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books-demo/components/speaker-form', ['exports', 'ember-cp-validations'], function (exports, _emberCpValidations) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  // import { translationMacro as t } from "ember-i18n";
  // import { computed } from '@ember/object';

  var Validations = (0, _emberCpValidations.buildValidations)({
    firstName: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', {
      presence: true
      // message: computed('model.firstName', 'model.i18n.locale', function () {
      //   return this.get(this, 'model.i18n').t('errors.aaa')
      // }),
    })],
    lastName: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)],
    patronymic: [(0, _emberCpValidations.validator)('ds-error'), (0, _emberCpValidations.validator)('presence', true)]
  });

  exports.default = Ember.Component.extend(Validations, {
    errorService: Ember.inject.service(),
    currentUser: Ember.inject.service(),
    i18n: Ember.inject.service(),
    isInvalid: false,

    actions: {
      submitForm: function submitForm(e) {
        try {
          e.preventDefault();
          Ember.set(this, 'isInvalid', !this.get('validations.isValid'));
          if (!Ember.get(this, 'isInvalid')) {
            this.onsubmit({
              id: this.get('idAuthor'),
              firstName: this.get('firstName'),
              lastName: this.get('lastName'),
              patronymic: this.get('patronymic'),
              user: this.get('currentUser.user')
            });
          }
        } catch (e) {
          var err = this.get('errorService').createLog(e);
          var errorModel = this.get('store').createRecord('error', err);
          errorModel.save();
        }
      }
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);

      this.setProperties({
        idAuthor: this.get('speaker.id') ? this.get('speaker.id') : undefined,
        firstName: this.get('speaker.firstName'),
        lastName: this.get('speaker.lastName'),
        patronymic: this.get('speaker.patronymic')
      });
    }
  });
});
define('books-demo/components/speaker-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('books-demo/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('books-demo/controllers/application', ['exports', 'books-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),
    currentUser: Ember.inject.service(),
    i18n: Ember.inject.service(),

    currentLocale: _environment.default.i18n.defaultLocale,

    isRussian: Ember.computed('currentLocale', function () {
      return Ember.get(this, 'currentLocale') === 'ru';
    }),

    isEnglish: Ember.computed('currentLocale', function () {
      return Ember.get(this, 'currentLocale') === 'en';
    }),

    actions: {
      logout: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();

                  this.get('session').invalidate();

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function logout(_x) {
          return _ref.apply(this, arguments);
        }

        return logout;
      }(),
      changeLocale: function changeLocale(e) {
        Ember.set(this, 'currentLocale', e.target.value);
        Ember.set(this, 'i18n.locale', Ember.get(this, 'currentLocale'));
      }
    },

    init: function init() {
      this._super.apply(this, arguments);
      Ember.set(this, 'i18n.locale', Ember.get(this, 'currentLocale'));
    }
  });
});
define('books-demo/controllers/books', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),
    errorService: Ember.inject.service(),
    queryParams: ['search', 'searchTags'],
    search: '',
    searchTags: '',

    actions: {
      deleteBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book) {
          var err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return book.destroyRecord();

                case 3:
                  _context.next = 11;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context['catch'](0);
                  err = this.get('errorService').createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 11;
                  return errorModel.save();

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 5]]);
        }));

        function deleteBook(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteBook;
      }(),
      refreshBooks: function refreshBooks() {
        this.set('search', this.get('searchValue'));
      },
      refreshTags: function refreshTags() {
        this.set('searchTags', this.get('searchTagsValue'));
      }
    }
  });
});
define('books-demo/controllers/create-book', ['exports', 'books-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    dataService: Ember.inject.service('data'),
    errorService: Ember.inject.service(),

    init: function init() {
      this._super.apply(this, arguments);
      this.set('book', Ember.Object.create());
      this.get('book').set('title', '');
      this.get('book').set('author', '');
      this.get('book').set('pages', '');
      this.get('book').set('bookURL', '');
      this.get('book').set('tags', []);
      this.get('book').set('coverURL', '');
    },

    actions: {
      saveBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(book, uploadData) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt('return', new Promise(function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
                      var bookModel, err, errorModel;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.prev = 0;
                              bookModel = _this.get('store').createRecord('book', book);
                              _context2.next = 4;
                              return bookModel.save();

                            case 4:

                              if (!uploadData) {
                                resolve();
                              }

                              uploadData.url = '' + _environment.default.fileUploadURL;
                              uploadData.submit().done(function () {
                                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(result /*, textStatus, jqXhr*/) {
                                  var dataToUpload;
                                  return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                      switch (_context.prev = _context.next) {
                                        case 0:
                                          _context.prev = 0;
                                          dataToUpload = {
                                            entityName: 'books',
                                            id: bookModel.id,
                                            fileName: result.filename
                                          };
                                          _context.next = 4;
                                          return fetch(_environment.default.backendURL + '/saveURL', {
                                            method: 'POST',
                                            headers: {
                                              'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(dataToUpload)
                                          });

                                        case 4:

                                          // eslint-disable-next-line no-console
                                          console.log('Ok');
                                          resolve();
                                          _this.transitionToRoute('books');
                                          _context.next = 12;
                                          break;

                                        case 9:
                                          _context.prev = 9;
                                          _context.t0 = _context['catch'](0);

                                          reject(_context.t0);

                                        case 12:
                                        case 'end':
                                          return _context.stop();
                                      }
                                    }
                                  }, _callee, _this, [[0, 9]]);
                                }));

                                return function (_x5) {
                                  return _ref3.apply(this, arguments);
                                };
                              }()).fail(function (jqXhr, textStatus, errorThrown) {
                                reject(errorThrown);
                              });
                              _context2.next = 16;
                              break;

                            case 9:
                              _context2.prev = 9;
                              _context2.t0 = _context2['catch'](0);
                              err = _this.get('errorService').createLog(_context2.t0);
                              errorModel = _this.get('store').createRecord('error', err);
                              _context2.next = 15;
                              return errorModel.save();

                            case 15:
                              reject(_context2.t0);

                            case 16:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this, [[0, 9]]);
                    }));

                    return function (_x3, _x4) {
                      return _ref2.apply(this, arguments);
                    };
                  }()));

                case 1:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function saveBook(_x, _x2) {
          return _ref.apply(this, arguments);
        }

        return saveBook;
      }()
    },

    reset: function reset() {
      Ember.set(this, 'isUploadingFile', false);
      Ember.set(this, 'title', '');
      Ember.set(this, 'author', '');
      Ember.set(this, 'pages', '');
      Ember.set(this, 'bookURL', '');
      Ember.set(this, 'tags', []);
      Ember.set(this, 'uploadData', null);
    }
  });
});
define('books-demo/controllers/create-meeting', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    errorService: Ember.inject.service(),
    init: function init() {
      this._super.apply(this, arguments);
      this.set('meeting', Ember.Object.create());
      this.get('meeting').set('dateOfMeeting', '');
    },


    actions: {
      saveMeeting: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(meeting) {
          var meetingModel, err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  meetingModel = this.get('store').createRecord('meeting', meeting);
                  _context.next = 4;
                  return meetingModel.save();

                case 4:
                  this.transitionToRoute('meeting');
                  _context.next = 13;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);
                  err = this.get('errorService').createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 13;
                  return errorModel.save();

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 7]]);
        }));

        function saveMeeting(_x) {
          return _ref.apply(this, arguments);
        }

        return saveMeeting;
      }()
    }
  });
});
define('books-demo/controllers/create-review', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    errorService: Ember.inject.service(),
    init: function init() {
      this._super.apply(this, arguments);
      this.set('review', Ember.Object.create());
      //this.get('review').set('dateOfReview', '');
      this.get('review').set('markBook', '');
      this.get('review').set('presentationURL', '');
      this.get('review').set('videoURL', '');
      this.get('review').set('report', '');
    },


    actions: {
      saveReview: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(review) {
          var reviewModel, err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  reviewModel = this.get('store').createRecord('review', review);

                  reviewModel.set('dateOfReview', review.meeting.dateOfMeeting);
                  _context.next = 5;
                  return reviewModel.save();

                case 5:
                  this.transitionToRoute('meeting');
                  _context.next = 14;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);
                  err = this.get('errorService').createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 14;
                  return errorModel.save();

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        function saveReview(_x) {
          return _ref.apply(this, arguments);
        }

        return saveReview;
      }()
    }
  });
});
define('books-demo/controllers/create-speaker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    currentUser: Ember.inject.service(),
    errorService: Ember.inject.service(),
    init: function init() {
      this._super.apply(this, arguments);
      this.set('speaker', Ember.Object.create());
      this.get('speaker').set('firstName', '');
      this.get('speaker').set('lastName', '');
      this.get('speaker').set('patronymic', '');
    },


    actions: {
      saveSpeaker: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
          var speakerModel, err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  speakerModel = this.get('store').createRecord('speaker', speaker);
                  _context.next = 4;
                  return speakerModel.save();

                case 4:
                  this.transitionToRoute('speakers');
                  _context.next = 13;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context['catch'](0);
                  err = this.get("errorService").createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 13;
                  return errorModel.save();

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 7]]);
        }));

        function saveSpeaker(_x) {
          return _ref.apply(this, arguments);
        }

        return saveSpeaker;
      }()
    }
  });
});
define('books-demo/controllers/edit-book', ['exports', 'books-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    dataService: Ember.inject.service('data'),
    errorService: Ember.inject.service(),

    actions: {
      saveBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(book, uploadData) {
          var _this = this;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt('return', new Promise(function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
                      var bookModel, err, errorModel;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.prev = 0;
                              bookModel = _this.get('model');

                              bookModel.set('title', book.title);
                              bookModel.set('author', book.author);
                              bookModel.set('pages', book.pages);
                              bookModel.set('bookURL', book.bookURL);
                              bookModel.set('tags', book.tags);

                              _context2.next = 9;
                              return bookModel.save();

                            case 9:

                              if (!uploadData) {
                                resolve();
                                _this.transitionToRoute('books');
                              }

                              uploadData.url = '' + _environment.default.fileUploadURL;
                              uploadData.submit().done(function () {
                                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(result /*, textStatus, jqXhr*/) {
                                  var dataToUpload;
                                  return regeneratorRuntime.wrap(function _callee$(_context) {
                                    while (1) {
                                      switch (_context.prev = _context.next) {
                                        case 0:
                                          _context.prev = 0;
                                          dataToUpload = {
                                            entityName: 'books',
                                            id: bookModel.id,
                                            fileName: result.filename
                                          };
                                          _context.next = 4;
                                          return fetch(_environment.default.backendURL + '/saveURL', {
                                            method: 'POST',
                                            headers: {
                                              'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify(dataToUpload)
                                          });

                                        case 4:

                                          // eslint-disable-next-line no-console
                                          console.log('Ok');
                                          resolve();
                                          _this.transitionToRoute('books');
                                          _context.next = 12;
                                          break;

                                        case 9:
                                          _context.prev = 9;
                                          _context.t0 = _context['catch'](0);

                                          reject(_context.t0);

                                        case 12:
                                        case 'end':
                                          return _context.stop();
                                      }
                                    }
                                  }, _callee, _this, [[0, 9]]);
                                }));

                                return function (_x5) {
                                  return _ref3.apply(this, arguments);
                                };
                              }()).fail(function (jqXhr, textStatus, errorThrown) {
                                reject(errorThrown);
                              });
                              _context2.next = 21;
                              break;

                            case 14:
                              _context2.prev = 14;
                              _context2.t0 = _context2['catch'](0);
                              err = _this.get('errorService').createLog(_context2.t0);
                              errorModel = _this.get('store').createRecord('error', err);
                              _context2.next = 20;
                              return errorModel.save();

                            case 20:
                              reject(_context2.t0);

                            case 21:
                            case 'end':
                              return _context2.stop();
                          }
                        }
                      }, _callee2, _this, [[0, 14]]);
                    }));

                    return function (_x3, _x4) {
                      return _ref2.apply(this, arguments);
                    };
                  }()));

                case 1:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function saveBook(_x, _x2) {
          return _ref.apply(this, arguments);
        }

        return saveBook;
      }()
    },

    reset: function reset() {
      Ember.set(this, 'isUploadingFile', false);
      Ember.set(this, 'id', this.get('model.id'));
      Ember.set(this, 'title', this.get('model.title'));
      Ember.set(this, 'author', this.get('model.author'));
      Ember.set(this, 'pages', this.get('model.pages'));
      Ember.set(this, 'bookURL', this.get('model.bookURL'));
      Ember.set(this, 'tags', this.get('model.tags'));
      Ember.set(this, 'coverURL', this.get('model.coverURL'));
      Ember.set(this, 'uploadData', null);
    }
  });
});
define('books-demo/controllers/edit-meeting', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    errorService: Ember.inject.service(),
    isCreating: true,
    actions: {
      saveMeeting: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(meeting) {
          var meetingModel, err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  meetingModel = this.get('model');

                  meetingModel.set('dateOfMeeting', meeting.dateOfMeeting);
                  _context.next = 5;
                  return meetingModel.save();

                case 5:
                  this.transitionToRoute('meeting');
                  _context.next = 14;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);
                  err = this.get("errorService").createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 14;
                  return errorModel.save();

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        function saveMeeting(_x) {
          return _ref.apply(this, arguments);
        }

        return saveMeeting;
      }()
    }
  });
});
define('books-demo/controllers/edit-review', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    errorService: Ember.inject.service(),
    actions: {
      saveReview: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(review) {
          var reviewModel, err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  reviewModel = this.get('model');

                  reviewModel.set('markBook', review.markBook);
                  reviewModel.set('presentationURL', review.presentationURL);
                  reviewModel.set('videoURL', review.videoURL);
                  reviewModel.set('report', review.report);
                  reviewModel.set('speaker', review.speaker);
                  reviewModel.set('book', review.book);
                  reviewModel.set('meeting', review.meeting);
                  reviewModel.set('dateOfReview', review.dateOfReview);
                  _context.next = 12;
                  return reviewModel.save();

                case 12:
                  this.transitionToRoute('meeting');
                  _context.next = 21;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](0);
                  err = this.get("errorService").createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 21;
                  return errorModel.save();

                case 21:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 15]]);
        }));

        function saveReview(_x) {
          return _ref.apply(this, arguments);
        }

        return saveReview;
      }()
    }
  });
});
define('books-demo/controllers/edit-speaker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    errorService: Ember.inject.service(),

    actions: {
      saveSpeaker: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
          var speakerModel, err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  speakerModel = this.get('model');

                  speakerModel.set('firstName', speaker.firstName);
                  speakerModel.set('lastName', speaker.lastName);
                  speakerModel.set('patronymic', speaker.patronymic);
                  _context.next = 7;
                  return speakerModel.save();

                case 7:
                  this.transitionToRoute('speakers');
                  _context.next = 16;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);
                  err = this.get("errorService").createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 16;
                  return errorModel.save();

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 10]]);
        }));

        function saveSpeaker(_x) {
          return _ref.apply(this, arguments);
        }

        return saveSpeaker;
      }()
    }
  });
});
define('books-demo/controllers/login', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),
    errorService: Ember.inject.service(),

    actions: {
      login: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
          var err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return this.get('session').authenticate('authenticator:jwt', {
                    email: user.email,
                    password: user.password
                  });

                case 3:
                  _context.next = 12;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context['catch'](0);
                  err = this.get("errorService").createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 11;
                  return errorModel.save();

                case 11:
                  this.send('error', _context.t0);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 5]]);
        }));

        function login(_x) {
          return _ref.apply(this, arguments);
        }

        return login;
      }(),
      error: function error(_error, transition) {
        if (_error instanceof Error) {
          return true;
        }

        this.set('errors', _error.json.errors);
        return false;
      }
    },

    resetErrors: function resetErrors() {
      this.set('errors', {});
    }
  });
});
define('books-demo/controllers/meeting', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  var PER_PAGE = exports.PER_PAGE = 2;

  exports.default = Ember.Controller.extend({
    session: Ember.inject.service(),
    errorService: Ember.inject.service(),
    queryParams: ['search', 'page', 'speaker', 'meeting'],
    search: '',
    page: 1,
    speaker: '',

    pages: Ember.computed('model.meetings.meta.total', function () {
      var total = Number(this.get('model.meetings.meta.total'));
      if (Number.isNaN(total) || total <= 0) {
        return [];
      }

      return new Array(Math.ceil(total / PER_PAGE)).fill().map(function (value, index) {
        return index + 1;
      });
    }),

    selectedSpeaker: Ember.computed('speaker', function () {
      var speaker = this.get('speaker');

      return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
    }),
    selectedMeeting: Ember.computed('meeting', function () {
      var meeting = this.get('meeting');

      return meeting ? this.get('model.meetings').findBy('id', meeting) : null;
    }),
    actions: {
      deleteMeeting: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(meeting) {
          var err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return meeting.destroyRecord();

                case 3:
                  _context.next = 11;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context['catch'](0);
                  err = this.get("errorService").createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 11;
                  return errorModel.save();

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 5]]);
        }));

        function deleteMeeting(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteMeeting;
      }(),
      changeSpeaker: function changeSpeaker(speaker) {
        this.set('speaker', speaker ? speaker.get('id') : '');
      },
      changeMeeting: function changeMeeting(meeting) {
        this.set('meeting', meeting ? meeting.get('id') : '');
        // debounce(() => {
        //   this.set('search', this.get('searchValue'));
        // }, 1000);
      }
    }
  });
});
define('books-demo/controllers/register', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    errorService: Ember.inject.service(),
    actions: {
      saveUser: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
          var newUser, err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  newUser = void 0;
                  _context.prev = 1;

                  newUser = this.get('store').createRecord('user', user);
                  _context.next = 5;
                  return newUser.save();

                case 5:

                  this.transitionToRoute('index');
                  _context.next = 16;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](1);
                  err = this.get('errorService').createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 14;
                  return errorModel.save();

                case 14:
                  _context.t0.user = newUser;
                  this.send('error', _context.t0);

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 8]]);
        }));

        function saveUser(_x) {
          return _ref.apply(this, arguments);
        }

        return saveUser;
      }(),
      error: function error(_error, transition) {
        this.set('errors', _error.user.errors);
        return false;
      }
    },

    resetErrors: function resetErrors() {
      this.set('errors', {});
    }
  });
});
define('books-demo/controllers/speakers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Controller.extend({
    errorService: Ember.inject.service(),
    session: Ember.inject.service(),
    queryParams: ['search'],
    search: '',

    actions: {
      deleteSpeaker: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
          var err, errorModel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return speaker.destroyRecord();

                case 3:
                  _context.next = 11;
                  break;

                case 5:
                  _context.prev = 5;
                  _context.t0 = _context['catch'](0);
                  err = this.get('errorService').createLog(_context.t0);
                  errorModel = this.get('store').createRecord('error', err);
                  _context.next = 11;
                  return errorModel.save();

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 5]]);
        }));

        function deleteSpeaker(_x) {
          return _ref.apply(this, arguments);
        }

        return deleteSpeaker;
      }(),
      refreshSpeakers: function refreshSpeakers() {
        var _this = this;

        Ember.run.debounce(function () {
          _this.set('search', _this.get('searchValue'));
        }, 1000);
      }
    }
  });
});
define('books-demo/helpers/-link-to-params', ['exports', 'ember-angle-bracket-invocation-polyfill/helpers/-link-to-params'], function (exports, _linkToParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToParams.default;
    }
  });
});
define('books-demo/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('books-demo/helpers/app-version', ['exports', 'books-demo/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('books-demo/helpers/await', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _await) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _await.default;
    }
  });
});
define('books-demo/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('books-demo/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('books-demo/helpers/can', ['exports', 'ember-can/helpers/can'], function (exports, _can) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _can.default;
    }
  });
});
define('books-demo/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('books-demo/helpers/cannot', ['exports', 'ember-can/helpers/cannot'], function (exports, _cannot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cannot.default;
    }
  });
});
define('books-demo/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('books-demo/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('books-demo/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('books-demo/helpers/env', ['exports', 'books-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.env = env;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function env(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        propertyName = _ref2[0];

    return Ember.get(_environment.default, propertyName);
  }

  exports.default = Ember.Helper.helper(env);
});
define('books-demo/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('books-demo/helpers/get-speaker-name', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSpeakerName = getSpeakerName;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function getSpeakerName(params /*, hash*/) {
    var _params = _slicedToArray(params, 2),
        firstName = _params[0],
        lastName = _params[1];

    return Ember.String.htmlSafe('<strong>' + lastName + '</strong> ' + firstName);
  }

  exports.default = Ember.Helper.helper(getSpeakerName);
});
define('books-demo/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('books-demo/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('books-demo/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
define('books-demo/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('books-demo/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
define('books-demo/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
define('books-demo/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
define('books-demo/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('books-demo/helpers/is-fulfilled', ['exports', 'ember-promise-helpers/helpers/is-fulfilled'], function (exports, _isFulfilled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
  Object.defineProperty(exports, 'isFulfilled', {
    enumerable: true,
    get: function () {
      return _isFulfilled.isFulfilled;
    }
  });
});
define('books-demo/helpers/is-pending', ['exports', 'ember-promise-helpers/helpers/is-pending'], function (exports, _isPending) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isPending.default;
    }
  });
  Object.defineProperty(exports, 'isPending', {
    enumerable: true,
    get: function () {
      return _isPending.isPending;
    }
  });
});
define('books-demo/helpers/is-rejected', ['exports', 'ember-promise-helpers/helpers/is-rejected'], function (exports, _isRejected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isRejected.default;
    }
  });
  Object.defineProperty(exports, 'isRejected', {
    enumerable: true,
    get: function () {
      return _isRejected.isRejected;
    }
  });
});
define('books-demo/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
define('books-demo/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
define('books-demo/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
define('books-demo/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('books-demo/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('books-demo/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
define('books-demo/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
define('books-demo/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
define('books-demo/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
define('books-demo/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
define('books-demo/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
define('books-demo/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
define('books-demo/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
define('books-demo/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
define('books-demo/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
define('books-demo/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
define('books-demo/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('books-demo/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
define('books-demo/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('books-demo/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('books-demo/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
define('books-demo/helpers/on-document', ['exports', 'ember-on-helper/helpers/on-document'], function (exports, _onDocument) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
define('books-demo/helpers/on-window', ['exports', 'ember-on-helper/helpers/on-window'], function (exports, _onWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
define('books-demo/helpers/on', ['exports', 'ember-on-helper/helpers/on'], function (exports, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
define('books-demo/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('books-demo/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('books-demo/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('books-demo/helpers/promise-all', ['exports', 'ember-promise-helpers/helpers/promise-all'], function (exports, _promiseAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseAll.default;
    }
  });
  Object.defineProperty(exports, 'promiseAll', {
    enumerable: true,
    get: function () {
      return _promiseAll.promiseAll;
    }
  });
});
define('books-demo/helpers/promise-hash', ['exports', 'ember-promise-helpers/helpers/promise-hash'], function (exports, _promiseHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseHash.default;
    }
  });
  Object.defineProperty(exports, 'promiseHash', {
    enumerable: true,
    get: function () {
      return _promiseHash.promiseHash;
    }
  });
});
define('books-demo/helpers/promise-rejected-reason', ['exports', 'ember-promise-helpers/helpers/promise-rejected-reason'], function (exports, _promiseRejectedReason) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseRejectedReason.default;
    }
  });
});
define('books-demo/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('books-demo/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _helper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helper.default;
    }
  });
});
define('books-demo/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('books-demo/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
define('books-demo/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
define('books-demo/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define('books-demo/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'books-demo/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('books-demo/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('books-demo/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('books-demo/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('books-demo/initializers/ember-i18n-cp-validations', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    // intentionally left blank to not break upgrade path
  }

  exports.default = {
    name: 'ember-i18n-cp-validations',
    initialize: initialize
  };
});
define('books-demo/initializers/ember-i18n', ['exports', 'ember-i18n/initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('books-demo/initializers/ember-simple-auth', ['exports', 'books-demo/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service', 'ember-simple-auth/initializers/setup-session-restoration'], function (exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }
  };
});
define('books-demo/initializers/export-application-global', ['exports', 'books-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('books-demo/initializers/load-bootstrap-config', ['exports', 'books-demo/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('books-demo/initializers/setup-ember-can', ['exports', 'ember-can/initializers/setup-ember-can'], function (exports, _setupEmberCan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _setupEmberCan.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _setupEmberCan.initialize;
    }
  });
});
define('books-demo/initializers/simple-auth-token', ['exports', 'ember-simple-auth-token/authenticators/token', 'ember-simple-auth-token/authenticators/jwt'], function (exports, _token, _jwt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth-token',
    before: 'ember-simple-auth',
    initialize: function initialize(container) {
      container.register('authenticator:token', _token.default);
      container.register('authenticator:jwt', _jwt.default);
    }
  };
});
define('books-demo/initializers/start-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  //import EmberObject from '@ember/object';

  function initialize(application) {
    //application.register('logger:main', Logger);
    application.inject('route', 'err', 'service:error-service');
    application.inject('contoller', 'err', 'service:error-service');
    application.inject('component', 'err', 'service:error-service');
  }

  exports.default = {
    initialize: initialize
  };
});
define("books-demo/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('books-demo/instance-initializers/ember-i18n', ['exports', 'ember-i18n/instance-initializers/ember-i18n'], function (exports, _emberI18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberI18n.default;
});
define('books-demo/instance-initializers/ember-simple-auth', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize: function initialize() {}
  };
});
define("books-demo/locales/en/config", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
define("books-demo/locales/en/translations", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    errors: {
      description: "This field",
      inclusion: "{{description}} is not included in the list",
      exclusion: "{{description}} is reserved",
      invalid: "{{description}} is invalid",
      confirmation: "{{description}} doesn't match {{on}}",
      accepted: "{{description}} must be accepted",
      empty: "{{description}} can't be empty",
      blank: "{{description}} can't be blank",
      present: "{{description}} must be blank",
      collection: "{{description}} must be a collection",
      singular: "{{description}} can't be a collection",
      tooLong: "{{description}} is too long (maximum is {{max}} characters)",
      tooShort: "{{description}} is too short (minimum is {{min}} characters)",
      before: "{{description}} must be before {{before}}",
      after: "{{description}} must be after {{after}}",
      wrongDateFormat: "{{description}} must be in the format of {{format}}",
      wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
      notANumber: "{{description}} must be a number",
      notAnInteger: "{{description}} must be an integer",
      greaterThan: "{{description}} must be greater than {{gt}}",
      greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
      equalTo: "{{description}} must be equal to {{is}}",
      lessThan: "{{description}} must be less than {{lt}}",
      lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
      otherThan: "{{description}} must be other than {{value}}",
      odd: "{{description}} must be odd",
      even: "{{description}} must be even",
      positive: "{{description}} must be positive",
      date: "{{description}} must be a valid date",
      onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
      onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
      email: "{{description}} must be a valid email address",
      phone: "{{description}} must be a valid phone number",
      url: "{{description}} must be a valid url",
      aaa: "aaaaaaaaaaa"
    },
    menu: {
      speakers: 'Speakers',
      books: 'Books',
      meetings: 'Meetings of club',
      register: 'Register',
      login: 'Login',
      logout: 'Logout',
      desktop: 'Desktop',
      request: 'Submit request',
      plan: 'Plan'
    }
  };
});
define("books-demo/locales/ru/config", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
define("books-demo/locales/ru/translations", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    errors: {
      description: "Это поле",
      inclusion: "{{description}} is not included in the list",
      exclusion: "{{description}} is reserved",
      invalid: "{{description}} is invalid",
      confirmation: "{{description}} не совпадает с {{on}}",
      accepted: "{{description}} must be accepted",
      empty: "{{description}} не может быть пустым",
      blank: "{{description}} должно быть заполнено",
      present: "{{description}} must be blank",
      collection: "{{description}} must be a collection",
      singular: "{{description}} can't be a collection",
      tooLong: "{{description}} is too long (maximum is {{max}} characters)",
      tooShort: "{{description}} is too short (minimum is {{min}} characters)",
      before: "{{description}} must be before {{before}}",
      after: "{{description}} must be after {{after}}",
      wrongDateFormat: "{{description}} must be in the format of {{format}}",
      wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
      notANumber: "{{description}} должно быть числом",
      notAnInteger: "{{description}} must be an integer",
      greaterThan: "{{description}} must be greater than {{gt}}",
      greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
      equalTo: "{{description}} must be equal to {{is}}",
      lessThan: "{{description}} must be less than {{lt}}",
      lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
      otherThan: "{{description}} должен отличаться от {{value}}",
      odd: "{{description}} must be odd",
      even: "{{description}} must be even",
      positive: "{{description}} must be positive",
      date: "{{description}} must be a valid date",
      onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
      onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
      email: "{{description}} должно иметь корректный формат e-mail адреса",
      phone: "{{description}} must be a valid phone number",
      url: "{{description}} должно быть в формате URL",
      aaa: "ффффффффф"
    },
    menu: {
      speakers: 'Спикеры',
      books: 'Книги',
      meetings: 'Встречи клуба',
      register: 'Регистрация',
      login: 'Войти',
      logout: 'Выйти',
      desktop: 'Рабочий стол',
      request: 'Оставить заявку',
      plan: 'Запланировать'
    }
  };
});
define("books-demo/loggers/console-logger", [], function () {
  "use strict";
});
define('books-demo/models/book', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    author: _emberData.default.attr('string'),
    pages: _emberData.default.attr('number'),
    bookURL: _emberData.default.attr('string'),
    tags: _emberData.default.attr(),
    coverURL: _emberData.default.attr(),

    reviews: _emberData.default.hasMany('review'),
    user: _emberData.default.belongsTo('user')
  });
});
define('books-demo/models/error', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    dateOfError: _emberData.default.attr(''),
    errorIP: _emberData.default.attr('string'),
    errorURL: _emberData.default.attr('string'),
    errorText: _emberData.default.attr('string')
  });
});
define('books-demo/models/meeting', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    dateOfMeeting: _emberData.default.attr('date-string'),

    reviews: _emberData.default.hasMany('review'),
    user: _emberData.default.belongsTo('user')
  });
});
define('books-demo/models/review', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    dateOfReview: _emberData.default.attr('date-string'),
    markBook: _emberData.default.attr('number'),
    presentationURL: _emberData.default.attr('string'),
    videoURL: _emberData.default.attr('string'),
    report: _emberData.default.attr('string'),

    book: _emberData.default.belongsTo('book'),
    speaker: _emberData.default.belongsTo('speaker'),
    meeting: _emberData.default.belongsTo('meeting')
  });
});
define('books-demo/models/speaker', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    firstName: _emberData.default.attr('string'),
    lastName: _emberData.default.attr('string'),
    patronymic: _emberData.default.attr('string'),

    reviews: _emberData.default.hasMany('review'),
    user: _emberData.default.belongsTo('user'),

    fullName: Ember.computed('firstName', 'lastName', function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    })
  });
});
define('books-demo/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    email: _emberData.default.attr('string'),
    password: _emberData.default.attr(),
    passwordConfirmation: _emberData.default.attr(),

    reviews: _emberData.default.hasMany('review'),
    books: _emberData.default.hasMany('book'),
    speakers: _emberData.default.hasMany('speaker'),
    meetings: _emberData.default.hasMany('meeting')
  });
});
define('books-demo/modifiers/focus-trap', ['exports', 'ember-focus-trap/modifiers/focus-trap'], function (exports, _focusTrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
define('books-demo/modifiers/ref', ['exports', 'ember-ref-modifier/modifiers/ref'], function (exports, _ref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
define('books-demo/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('books-demo/router', ['exports', 'books-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('speakers');
    this.route('create-speaker');
    this.route('books');
    this.route('edit-book', { path: 'edit-book/:id' });
    this.route('404', { path: '*path' });
    this.route('edit-speaker', { path: 'edit-speaker/:id' });
    this.route('create-book');
    this.route('meeting', { path: 'meetings' });
    this.route('create-meeting');
    this.route('review');
    this.route('edit-meeting', { path: 'edit-meeting/:id' });
    this.route('create-review');
    this.route('edit-review', { path: 'edit-review/:id' });
    this.route('login');
    this.route('register');
  });

  exports.default = Router;
});
define('books-demo/routes/404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('books-demo/routes/application', ['exports', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _applicationRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_applicationRouteMixin.default, {
    session: Ember.inject.service(),
    currentUser: Ember.inject.service(),

    beforeModel: function beforeModel() {
      this._super.apply(this, arguments);

      this.loadUser();
    },
    sessionAuthenticated: function sessionAuthenticated() {
      this._super.apply(this, arguments);

      this.loadUser();
    },
    sessionInvalidated: function sessionInvalidated() {
      this.get('currentUser').resetCurrentUser();
      window.location.replace('/login');
    },
    loadUser: function loadUser() {
      if (this.get('session.isAuthenticated')) {
        this.get('currentUser').load();
      }
    },


    actions: {
      error: function error(_error, transition) {
        if (transition) {
          transition.abort();
        }
        this.intermediateTransitionTo('error', { error: _error.message });
        return true;
      }
    }
  });
});
define('books-demo/routes/books', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      search: {
        refreshModel: true
      },
      searchTags: {
        refreshModel: true
      }
    },

    model: function model(_ref) {
      var search = _ref.search,
          searchTags = _ref.searchTags;

      var query = {};
      if (search) {
        query.q = search;
      }
      if (searchTags) {
        query.tags_like = searchTags;
      }
      return this.get('store').query('book', query);
    },
    setupController: function setupController() {
      this._super.apply(this, arguments);
    }
  });
});
define('books-demo/routes/create-book', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    setupController: function setupController(controller) {
      this._super.apply(this, arguments);
      controller.reset();
    }
  });
});
define('books-demo/routes/create-meeting', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('books-demo/routes/create-review', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('books-demo/routes/create-speaker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('books-demo/routes/edit-book', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    errorService: Ember.inject.service(),
    setupController: function setupController(controller) {
      this._super.apply(this, arguments);
      controller.reset();
    },
    model: function model(_ref) {
      var id = _ref.id;

      try {
        return this.get('store').findRecord('book', id);
      } catch (e) {
        var err = this.get('errorService').createLog(e);
        var errorModel = this.get('store').createRecord('error', err);
        errorModel.save();
      }
    }
  });
});
define('books-demo/routes/edit-meeting', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    errorService: Ember.inject.service(),
    model: function model(_ref) {
      var id = _ref.id;

      try {
        return this.get('store').findRecord('meeting', id);
      } catch (e) {
        var err = this.get('errorService').createLog(e);
        var errorModel = this.get('store').createRecord('error', err);
        errorModel.save();
      }
    }
  });
});
define('books-demo/routes/edit-review', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    errorService: Ember.inject.service(),
    model: function model(_ref) {
      var id = _ref.id;

      try {
        return this.get('store').findRecord('review', id);
      } catch (e) {
        var err = this.get('errorService').createLog(e);
        var errorModel = this.get('store').createRecord('error', err);
        errorModel.save();
      }
    }
  });
});
define('books-demo/routes/edit-speaker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    errorService: Ember.inject.service(),

    model: function model(_ref) {
      var id = _ref.id;

      try {
        return this.get('store').findRecord('speaker', id);
      } catch (e) {
        var err = this.get('errorService').createLog(e);
        var errorModel = this.get('store').createRecord('error', err);
        errorModel.save();
      }
    }
  });
});
define('books-demo/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('books-demo/routes/login', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default, {
    model: function model() {
      return {
        email: '',
        password: ''
      };
    },
    resetController: function resetController(controller, isExiting, transition) {
      this._super.apply(this, arguments);
      if (isExiting) {
        controller.resetErrors();
      }
    }
  });
});
define('books-demo/routes/meeting', ['exports', 'books-demo/controllers/meeting'], function (exports, _meeting) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      search: {
        refreshModel: true
      },
      page: {
        refreshModel: true
      },
      speaker: {
        refreshModel: true
      },
      meeting: {
        refreshModel: true
      }
    },
    model: function model(_ref) {
      var search = _ref.search,
          page = _ref.page,
          speaker = _ref.speaker,
          meeting = _ref.meeting;

      var query = {
        _page: page,
        _limit: _meeting.PER_PAGE
      };

      if (search) {
        query.q = search;
      }

      if (speaker) {
        query.speaker = speaker;
      }

      if (meeting) {
        query.id = meeting;
      }

      return Ember.RSVP.hash({
        speakers: this.store.findAll('speaker'),
        meetings: this.store.query('meeting', query)
      });
    },

    // model(){
    //   return this.get('store').findAll('meeting');
    // },
    setupController: function setupController() {
      this._super.apply(this, arguments);
    }
  });
});
define('books-demo/routes/register', ['exports', 'ember-simple-auth/mixins/unauthenticated-route-mixin'], function (exports, _unauthenticatedRouteMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend(_unauthenticatedRouteMixin.default, {
    model: function model() {
      return {
        email: '',
        password: '',
        passwordConfirmation: ''
      };
    },
    resetController: function resetController(controller, isExiting, transition) {
      this._super.apply(this, arguments);
      if (isExiting) {
        controller.resetErrors();
      }
    }
  });
});
define('books-demo/routes/speakers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      search: {
        refreshModel: true
      }
    },

    model: function model(_ref) {
      var search = _ref.search;

      var query = {};
      if (search) {
        query.q = search;
      }
      return this.get('store').query('speaker', query);
    },
    setupController: function setupController() {
      this._super.apply(this, arguments);
    }
  });
});
define('books-demo/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONSerializer.extend({
    normalize: function normalize() {
      return this._super.apply(this, arguments);
    },
    keyForRelationship: function keyForRelationship(key, typeClass) {
      if (typeClass === 'belongsTo') {
        return key + 'Id';
      }
      return this._super.apply(this, arguments);
    },
    extractRelationship: function extractRelationship(relationshipModelName, relationshipHash) {
      var hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
      return this._super.call(this, relationshipModelName, hash);
      // return this._super(...arguments);
    },
    serializeBelongsTo: function serializeBelongsTo(snapshot, json, relationship) {
      // super.serializeBelongsTo(...arguments);
      var key = relationship.key;
      var belongsTo = snapshot.belongsTo(key);

      key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
      json[key] = Ember.isNone(belongsTo) ? belongsTo : parseInt(belongsTo.record.get('id'));
    }
  });
});
define('books-demo/serializers/book', ['exports', 'books-demo/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);

      return hash;
    }
  });
});
define('books-demo/serializers/meeting', ['exports', 'books-demo/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);

      return hash;
    }
  });
});
define('books-demo/serializers/review', ['exports', 'books-demo/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);

      return hash;
    }
  });
});
define('books-demo/serializers/speaker', ['exports', 'books-demo/serializers/application'], function (exports, _application) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _application.default.extend({
    normalize: function normalize(model, hash) {
      hash = this._super.apply(this, arguments);

      return hash;
    }
  });
});
define('books-demo/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('books-demo/services/can', ['exports', 'ember-can/services/can'], function (exports, _can) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _can.default;
    }
  });
});
define('books-demo/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
define('books-demo/services/current-user', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    user: null,

    load: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.get('store').queryRecord('user', { me: true });

              case 2:
                user = _context.sent;

                this.set('user', user);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load() {
        return _ref.apply(this, arguments);
      }

      return load;
    }(),
    resetCurrentUser: function resetCurrentUser() {
      this.set('user', null);
    }
  });
});
define('books-demo/services/data', ['exports', 'books-demo/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Service.extend({
    init: function init() {
      this._super.apply(this, arguments);
      this.set('speakers', Ember.A());
      this.set('books', Ember.A());
    },
    getSpeakers: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(search) {
        var queryParams, response, speakers;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                queryParams = '';

                if (search) {
                  queryParams = '?q=' + search;
                }
                _context.next = 4;
                return fetch(_environment.default.backendURL + '/speakers' + queryParams);

              case 4:
                response = _context.sent;
                _context.next = 7;
                return response.json();

              case 7:
                speakers = _context.sent;

                this.get('speakers').clear();
                this.get('speakers').pushObjects(speakers);
                return _context.abrupt('return', this.get('speakers'));

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSpeakers(_x) {
        return _ref.apply(this, arguments);
      }

      return getSpeakers;
    }(),
    getSpeaker: function getSpeaker(id) {
      return fetch(_environment.default.backendURL + '/speakers/' + id).then(function (response) {
        return response.json();
      });
    },
    deleteSpeaker: function deleteSpeaker(speaker) {
      this.get('speakers').removeObject(speaker);
      return fetch(_environment.default.backendURL + '/speakers/' + speaker.id, { method: 'DELETE' });
    },
    createSpeaker: function createSpeaker(speaker) {
      return fetch(_environment.default.backendURL + '/speakers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker)
      });
    },
    editSpeaker: function editSpeaker(speaker) {
      return fetch(_environment.default.backendURL + '/speakers/' + speaker.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker)
      });
    },
    getBooks: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(search, searchTags) {
        var queryParams, response, speakers;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryParams = '';

                if (search) {
                  queryParams = '?q=' + search;
                }
                if (searchTags) {
                  if (queryParams !== '') {
                    queryParams += '&tags_like=' + searchTags;
                  } else queryParams += '?tags_like=' + searchTags;
                }
                _context2.next = 5;
                return fetch(_environment.default.backendURL + '/books' + queryParams);

              case 5:
                response = _context2.sent;
                _context2.next = 8;
                return response.json();

              case 8:
                speakers = _context2.sent;

                this.get('books').clear();
                this.get('books').pushObjects(speakers);
                return _context2.abrupt('return', this.get('books'));

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getBooks(_x2, _x3) {
        return _ref2.apply(this, arguments);
      }

      return getBooks;
    }(),
    getBook: function getBook(id) {
      return fetch(_environment.default.backendURL + '/books/' + id).then(function (response) {
        return response.json();
      });
    },
    deleteBook: function deleteBook(book) {
      this.get('books').removeObject(book);
      return fetch(_environment.default.backendURL + '/books/' + book.id, { method: 'DELETE' });
    },
    createBook: function createBook(book, uploadData) {
      var _this = this;

      return new Promise(function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject) {
          var savedBookPromise, savedBook;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return fetch(_environment.default.backendURL + '/books', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                  });

                case 3:
                  savedBookPromise = _context4.sent;
                  _context4.next = 6;
                  return savedBookPromise.json();

                case 6:
                  savedBook = _context4.sent;


                  if (!uploadData) {
                    resolve();
                  }

                  uploadData.url = '' + _environment.default.fileUploadURL;
                  // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
                  uploadData.submit().done(function () {
                    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(result /*, textStatus, jqXhr*/) {
                      var dataToUpload;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.prev = 0;
                              dataToUpload = {
                                entityName: 'books',
                                id: savedBook.id,
                                fileName: result.filename
                              };
                              _context3.next = 4;
                              return fetch(_environment.default.backendURL + '/saveURL', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(dataToUpload)
                              });

                            case 4:

                              // eslint-disable-next-line no-console
                              console.log('Ok');
                              resolve();
                              _context3.next = 11;
                              break;

                            case 8:
                              _context3.prev = 8;
                              _context3.t0 = _context3['catch'](0);

                              reject(_context3.t0);

                            case 11:
                            case 'end':
                              return _context3.stop();
                          }
                        }
                      }, _callee3, _this, [[0, 8]]);
                    }));

                    return function (_x6) {
                      return _ref4.apply(this, arguments);
                    };
                  }()).fail(function (jqXhr, textStatus, errorThrown) {
                    reject(errorThrown);
                  });
                  _context4.next = 15;
                  break;

                case 12:
                  _context4.prev = 12;
                  _context4.t0 = _context4['catch'](0);

                  reject(_context4.t0);

                case 15:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this, [[0, 12]]);
        }));

        return function (_x4, _x5) {
          return _ref3.apply(this, arguments);
        };
      }());
    },
    editBook: function editBook(book, uploadData) {
      var _this2 = this;

      return new Promise(function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
          var savedBookPromise, savedBook;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return fetch(_environment.default.backendURL + '/books/' + book.id, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                  });

                case 3:
                  savedBookPromise = _context6.sent;
                  _context6.next = 6;
                  return savedBookPromise.json();

                case 6:
                  savedBook = _context6.sent;


                  if (!uploadData) {
                    resolve();
                  }

                  uploadData.url = '' + _environment.default.fileUploadURL;
                  // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
                  uploadData.submit().done(function () {
                    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(result /*, textStatus, jqXhr*/) {
                      var dataToUpload;
                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.prev = 0;
                              dataToUpload = {
                                entityName: 'books',
                                id: savedBook.id,
                                fileName: result.filename
                              };
                              _context5.next = 4;
                              return fetch(_environment.default.backendURL + '/saveURL', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(dataToUpload)
                              });

                            case 4:

                              // eslint-disable-next-line no-console
                              console.log('Ok');
                              resolve();
                              _context5.next = 11;
                              break;

                            case 8:
                              _context5.prev = 8;
                              _context5.t0 = _context5['catch'](0);

                              reject(_context5.t0);

                            case 11:
                            case 'end':
                              return _context5.stop();
                          }
                        }
                      }, _callee5, _this2, [[0, 8]]);
                    }));

                    return function (_x9) {
                      return _ref6.apply(this, arguments);
                    };
                  }()).fail(function (jqXhr, textStatus, errorThrown) {
                    reject(errorThrown);
                  });
                  _context6.next = 15;
                  break;

                case 12:
                  _context6.prev = 12;
                  _context6.t0 = _context6['catch'](0);

                  reject(_context6.t0);

                case 15:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this2, [[0, 12]]);
        }));

        return function (_x7, _x8) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  });
});
define('books-demo/services/error-service', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    createLog: function createLog(error) {
      var newError = {
        dateOfError: new Date().toISOString(),
        errorIP: null,
        errorURL: window.location.href,
        errorText: error
      };
      return newError;
    }
  });
});
define('books-demo/services/g-recaptcha-v3', ['exports', 'ember-cli-google-recaptcha/services/g-recaptcha-v3'], function (exports, _gRecaptchaV) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptchaV.default;
    }
  });
});
define('books-demo/services/g-recaptcha', ['exports', 'ember-cli-google-recaptcha/services/g-recaptcha'], function (exports, _gRecaptcha) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gRecaptcha.default;
    }
  });
});
define('books-demo/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _i18n) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _i18n.default;
    }
  });
});
define('books-demo/services/moment', ['exports', 'ember-moment/services/moment', 'books-demo/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var get = Ember.get;
  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
define('books-demo/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _session.default;
});
define('books-demo/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('books-demo/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
define("books-demo/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iAbNEmPd", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"loading-page\"],[8],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/404image.jpg\"]]],[10,\"alt\",\"Welocme\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/404.hbs" } });
});
define("books-demo/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mUb4XjtN", "block": "{\"symbols\":[],\"statements\":[[6,\"header\"],[8],[0,\"\\n  \"],[6,\"nav\"],[10,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"\\t\\t  \"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/logo-dark.png\"]]],[10,\"width\",\"30\"],[10,\"height\",\"30\"],[10,\"class\",\"d-inline-block align-top\"],[10,\"alt\",\"\"],[10,\"loading\",\"lazy\"],[8],[9],[0,\"\\n  \\t    Книжный клуб\\n\"]],\"parameters\":[]},null],[0,\"\\t  \"],[6,\"button\"],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Открыть меню\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t  \\t\"],[6,\"span\"],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n\\t  \"],[9],[0,\"\\n\\t  \"],[6,\"div\"],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarContent\"],[8],[0,\"\\n\\t\\t  \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navigation-main\"],[8],[0,\"\\n\\t\\t    \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"\\t\\t    \\t  \"],[1,[26,\"t\",[\"menu.desktop\"],null],false],[0,\" \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"(текущий)\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t    \"],[9],[0,\"\\n\\t\\t    \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"meeting\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"            \"],[1,[26,\"t\",[\"menu.meetings\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t    \"],[9],[0,\"\\n\\t\\t    \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"            \"],[1,[26,\"t\",[\"menu.books\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t    \"],[9],[0,\"\\n\\t\\t    \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"            \"],[1,[26,\"t\",[\"menu.speakers\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t    \"],[9],[0,\"\\n\\t\\t    \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t    \\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-success\"],[10,\"href\",\"#\"],[8],[1,[26,\"t\",[\"menu.request\"],null],false],[9],[0,\"\\n\\t\\t    \"],[9],[0,\"\\n\\t\\t    \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t    \\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-primary\"],[10,\"href\",\"#\"],[8],[1,[26,\"t\",[\"menu.plan\"],null],false],[9],[0,\"\\n\\t\\t    \"],[9],[0,\"\\n      \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n          \"],[6,\"select\"],[10,\"id\",\"languageSelect\"],[11,\"onchange\",[26,\"action\",[[21,0,[]],\"changeLocale\"],null],null],[8],[0,\"\\n            \"],[6,\"option\"],[10,\"value\",\"ru\"],[11,\"selected\",[20,\"isRussian\"],null],[8],[0,\"Русский\"],[9],[0,\"\\n            \"],[6,\"option\"],[10,\"value\",\"en\"],[11,\"selected\",[20,\"isEnglish\"],null],[8],[0,\"Английский\"],[9],[0,\"\\n          \"],[9],[0,\"\\n\\t\\t    \"],[9],[0,\"\\n\\t\\t  \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"          \"],[6,\"li\"],[8],[6,\"a\"],[10,\"href\",\"#\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"logout\"],null],null],[8],[1,[26,\"t\",[\"menu.logout\"],null],false],[9],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\\t      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"register\"],[[\"class\"],[\"nav-link text-info\"]],{\"statements\":[[0,\"              \"],[1,[26,\"t\",[\"menu.register\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t      \"],[9],[0,\"\\n\\t\\t      \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"login\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"              \"],[1,[26,\"t\",[\"menu.login\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t      \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\t\\t  \"],[9],[0,\"\\n\\t  \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n  \"],[1,[20,\"outlet\"],false],[0,\"\\n\"],[6,\"footer\"],[10,\"class\",\"footer\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n\\t  \\t\"],[6,\"span\"],[8],[0,\"© Skyori, 2020\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/application.hbs" } });
});
define("books-demo/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "beMOFEe9", "block": "{\"symbols\":[\"book\",\"tag\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Книги\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[4,\"link-to\",[\"create-book\"],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить книгу\"],[10,\"type\",\"button\"],[8],[0,\"\\n            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n              \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"class\",\"aria-label\",\"value\"],[\"search\",\"Найти по полям\",\"form-control mr-2 search-long\",\"Найти по полям\",[22,[\"searchValue\"]]]]],false],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"refreshBooks\"],null],null],[8],[0,\"Найти\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"class\",\"aria-label\",\"value\"],[\"search\",\"Поиск по тегам\",\"form-control mr-2\",\"Найти по тегам\",[22,[\"searchTagsValue\"]]]]],false],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"refreshTags\"],null],null],[8],[0,\"Поиск\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3 fix-margin\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n          \"],[6,\"img\"],[11,\"src\",[21,1,[\"coverURL\"]],null],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Обложка книги\"],[8],[9],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"card-header\"],[8],[0,\"\\n              \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[21,1,[\"title\"]],false],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"ul\"],[10,\"class\",\"list-group list-group-flush\"],[8],[0,\"\\n            \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n              \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Автор\"],[9],[0,\": \"],[1,[21,1,[\"author\"]],false],[9],[0,\"\\n              \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Количество страниц\"],[9],[0,\": \"],[1,[21,1,[\"pages\"]],false],[9],[0,\"\\n              \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Теги\"],[9],[0,\":\"],[4,\"each\",[[21,1,[\"tags\"]]],null,{\"statements\":[[0,\" \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"tag-link\"],[8],[6,\"span\"],[10,\"class\",\"small\"],[8],[0,\"#\"],[1,[21,2,[]],false],[0,\" \"],[9],[9]],\"parameters\":[2]},null],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                  Рейтинг:\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 25%;\"],[10,\"aria-valuenow\",\"25\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"25%\"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit book\",[21,1,[]]],null]],null]],null,{\"statements\":[[0,\"                \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                  \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"card-link line-offset\"],[8],[0,\"Описание\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n                  \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[1,[26,\"book-item\",null,[[\"idBook\"],[[21,1,[\"id\"]]]]],false],[9],[0,\"\\n                  \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteBook\",[21,1,[]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                      \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                      \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/books.hbs" } });
});
define("books-demo/templates/components/book-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BRCG1/mT", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[10,\"class\",\"edit-form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"submitForm\"],null],null],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n  \\t\"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Название\"],[9],[0,\"\\n  \\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Полное название книги\",[22,[\"title\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"title\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"title\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n  \\t\"],[6,\"label\"],[10,\"for\",\"inputAuthor\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Автор\"],[9],[0,\"\\n  \\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Фамилия И.О. автора\",[22,[\"author\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"author\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"author\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n  \\t\"],[6,\"label\"],[10,\"for\",\"inputPagesCount\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Объем\"],[9],[0,\"\\n  \\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Количество страниц книги\",[22,[\"pages\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"pages\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"pages\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n  \\t\"],[6,\"label\"],[10,\"for\",\"inputDescriptionURL\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Описание\"],[9],[0,\"\\n  \\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"url\",\"Ссылка на сайт с описанием книги\",[22,[\"bookURL\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookURL\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"bookURL\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n  \\t\"],[6,\"label\"],[10,\"for\",\"customFile\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Обложка\"],[9],[0,\"\\n    \"],[1,[26,\"input-files\",null,[[\"class\",\"uploadData\",\"uploadDataChanged\"],[\"input-group input-group-lg col-sm-10\",[22,[\"uploadData\"]],[26,\"action\",[[21,0,[]],\"changeUploadData\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n  \\t\"],[6,\"label\"],[10,\"for\",\"inputTags\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Теги\"],[9],[0,\"\\n  \\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n  \\t\\t\"],[1,[26,\"input-tags\",null,[[\"tags\",\"onChange\"],[[22,[\"tags\"]],[26,\"action\",[[21,0,[]],\"changeTags\"],null]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"tags\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"tags\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n  \\t\"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n  \\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"  \\t\\t  Отмена\\n\"]],\"parameters\":[]},null],[0,\"  \\t\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/book-form.hbs" } });
});
define("books-demo/templates/components/book-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ebUoLDTK", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"edit-book\",[22,[\"idBook\"]]],[[\"class\"],[\"btn btn-edit\"]],{\"statements\":[[0,\"  \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n  \\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/book-item.hbs" } });
});
define('books-demo/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('books-demo/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("books-demo/templates/components/input-files", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oJOaLweG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"custom-file\"],[8],[0,\"\\n  \"],[6,\"input\"],[10,\"class\",\"custom-file-input\"],[10,\"id\",\"customFile\"],[10,\"lang\",\"ru\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n  \"],[6,\"label\"],[11,\"class\",[27,[\"custom-file-label form-control-lg \",[26,\"if\",[[22,[\"isFileChoosen\"]],\"\",\"placeholder-color\"],null]]]],[10,\"for\",\"customFile\"],[10,\"data-browse\",\"Выбрать\"],[8],[1,[20,\"fileName\"],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary custom-file-clear\"],[11,\"disabled\",[20,\"ifRemoveButtonDisabled\"],null],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"removeFile\"],null],null],[10,\"type\",\"button\"],[8],[0,\"X\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/input-files.hbs" } });
});
define("books-demo/templates/components/input-tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "BJrIMecV", "block": "{\"symbols\":[\"tag\"],\"statements\":[[6,\"select\"],[10,\"multiple\",\"multiple\"],[10,\"data-role\",\"tagsinput\"],[10,\"id\",\"inputTags\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"tags\"]]],null,{\"statements\":[[0,\"    \"],[6,\"option\"],[11,\"value\",[27,[[21,1,[]]]]],[10,\"selected\",\"selected\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/input-tags.hbs" } });
});
define("books-demo/templates/components/login-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8xiF/UhZ", "block": "{\"symbols\":[\"error\"],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"login\"],null],null],[8],[0,\"\\n  \"],[6,\"img\"],[10,\"class\",\"mb-4\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"alt\",\"\"],[10,\"height\",\"57\"],[8],[9],[0,\"\\n  \"],[6,\"h1\"],[10,\"class\",\"h3 mb-3 fw-normal\"],[8],[0,\"Вход\"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"email\",\"form-control\",\"name@example.com\",[22,[\"email\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"Пароль\",[22,[\"password\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"checkbox mb-3\"],[8],[0,\"\\n    \"],[6,\"label\"],[8],[0,\"\\n      \"],[6,\"input\"],[10,\"value\",\"remember-me\"],[10,\"type\",\"checkbox\"],[8],[9],[0,\" Запомнить\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"errors\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",\"form-floating\"],[8],[1,[21,1,[\"detail\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[6,\"button\"],[10,\"class\",\"w-100 btn btn-lg btn-primary mb-3\"],[10,\"type\",\"submit\"],[8],[0,\"Войти\"],[9],[0,\"\\n  \"],[6,\"a\"],[10,\"class\",\"w-100\"],[10,\"href\",\"/\"],[8],[0,\"Назад\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/login-form.hbs" } });
});
define("books-demo/templates/components/meeting-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mCzE9l/J", "block": "{\"symbols\":[\"review\"],\"statements\":[[6,\"form\"],[10,\"class\",\"edit-form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"submitForm\"],null],null],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n\\t\\t\"],[6,\"h4\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"date\",\"Дата...\",[22,[\"dateOfMeeting\"]]]]],false],[0,\"\\n\"],[0,\"\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"dateOfMeeting\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"          \"],[6,\"span\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n            \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"dateOfMeeting\"],null],\"message\"],null],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\"],[0,\"\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"h4\"],[8],[0,\"Список докладов\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"create-review\"],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus-square card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"meeting\",\"reviews\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[1,[21,1,[\"speaker\",\"lastName\"]],false],[0,\" \"],[1,[21,1,[\"speaker\",\"firstName\"]],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[1,[21,1,[\"book\",\"title\"]],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[1,[21,1,[\"book\",\"author\"]],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tОценка:\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[27,[\"width: \",[21,1,[\"markBook\"]],\"%;\"]]],[11,\"aria-valuenow\",[21,1,[\"markBook\"]],null],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[1,[21,1,[\"markBook\"]],false],[0,\"%\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-4 d-inline-block align-middle\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[1,[21,1,[\"report\"]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter d-inline-block align-middle\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center col-md-2\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-right\"],[10,\"type\",\"button\"],[8],[1,[26,\"review-item\",null,[[\"idReview\"],[[21,1,[\"id\"]]]]],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-left\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteReview\",[21,1,[]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"meeting\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"\\t      Отмена\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/meeting-form.hbs" } });
});
define("books-demo/templates/components/meeting-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "myeY6D1m", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"edit-meeting\",[22,[\"idMeeting\"]]],[[\"class\"],[\"btn btn-edit\"]],{\"statements\":[[0,\"  \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n  \\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/meeting-item.hbs" } });
});
define("books-demo/templates/components/register-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4rUsMf4X", "block": "{\"symbols\":[\"error\"],\"statements\":[[6,\"form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"saveUser\"],null],null],[8],[0,\"\\n  \"],[6,\"img\"],[10,\"class\",\"mb-4\"],[10,\"src\",\"images/logo-dark.png\"],[10,\"alt\",\"\"],[10,\"height\",\"57\"],[8],[9],[0,\"\\n  \"],[6,\"h1\"],[10,\"class\",\"h3 mb-3 fw-normal\"],[8],[0,\"Регистрация\"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"email\",\"form-control\",\"name@example.com\",[22,[\"email\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"email\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n    \"],[1,[26,\"input\",null,[[\"type\",\"class\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"Пароль\",[22,[\"password\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"password\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"errors\",\"email\"]]],null,{\"statements\":[[0,\"    \"],[6,\"span\"],[10,\"class\",\"form-floating\"],[8],[1,[21,1,[\"message\"]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[6,\"div\"],[10,\"class\",\"form-floating\"],[8],[0,\"\\n    \"],[1,[26,\"g-recaptcha-v2\",null,[[\"verified\",\"expired\",\"reset\"],[[26,\"action\",[[21,0,[]],\"verified\"],null],[26,\"action\",[[21,0,[]],\"expired\"],null],[22,[\"reset\"]]]]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"w-100 btn btn-lg btn-primary mb-3\"],[10,\"href\",\"/\"],[10,\"type\",\"submit\"],[8],[0,\"Зарегистрироваться\"],[9],[0,\"\\n  \"],[6,\"a\"],[10,\"class\",\"w-100\"],[10,\"href\",\"/\"],[8],[0,\"Назад\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/register-form.hbs" } });
});
define("books-demo/templates/components/review-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "txYsHvWp", "block": "{\"symbols\":[\"book\",\"speaker\",\"meeting\"],\"statements\":[[6,\"form\"],[10,\"class\",\"edit-form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"submitForm\"],null],null],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Дата\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"searchEnabled\",\"selected\",\"onchange\",\"search\"],[true,[22,[\"meeting\"]],[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"meeting\"]]],null]],null],[26,\"action\",[[21,0,[]],\"searchMeeting\"],null]]],{\"statements\":[[0,\"        \"],[1,[21,3,[\"dateOfMeeting\"]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"searchEnabled\",\"onchange\",\"selected\",\"search\"],[true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"speaker\"]]],null]],null],[22,[\"speaker\"]],[26,\"action\",[[21,0,[]],\"searchSpeaker\"],null]]],{\"statements\":[[0,\"        \"],[1,[21,2,[\"lastName\"]],false],[0,\" \"],[1,[21,2,[\"firstName\"]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n\"],[4,\"power-select\",null,[[\"searchEnabled\",\"onchange\",\"selected\",\"search\"],[true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"book\"]]],null]],null],[22,[\"book\"]],[26,\"action\",[[21,0,[]],\"searchBook\"],null]]],{\"statements\":[[0,\"        \"],[1,[21,1,[\"title\"]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Оценка\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Введите оценку книге (0-100)\",[22,[\"markBook\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Ссылка на видео\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Введите ссылку на видео\",[22,[\"videoURL\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Ссылка на презентацию\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Введите ссылку на презентацию\",[22,[\"presentationURL\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Введите отзыв\",[22,[\"report\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"meeting\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"\\t\\t\\t  Отмена\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/review-form.hbs" } });
});
define("books-demo/templates/components/review-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tgBzU0WY", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"edit-review\",[22,[\"idReview\"]]],[[\"class\"],[\"btn btn-edit\"]],{\"statements\":[[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/review-item.hbs" } });
});
define("books-demo/templates/components/speaker-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QKUrSXP2", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[10,\"class\",\"edit-form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"submitForm\"],null],null],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Фамилия\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Введите фамилию\",[22,[\"lastName\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"lastName\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"lastName\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Имя\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Введите имя\",[22,[\"firstName\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"firstName\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"firstName\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"label\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Отчество\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n      \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\"],[\"text\",\"Введите отчество\",[22,[\"patronymic\"]],\"form-control form-control-lg\"]]],false],[0,\"\\n\"],[4,\"if\",[[26,\"and\",[[22,[\"isInvalid\"]],[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"patronymic\"],null],\"isInvalid\"],null]],null]],null,{\"statements\":[[0,\"      \"],[6,\"span\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n        \"],[1,[26,\"get\",[[26,\"get\",[[21,0,[\"validations\",\"attrs\"]],\"patronymic\"],null],\"message\"],null],false],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"\\t\\t\\t  Отмена\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/speaker-form.hbs" } });
});
define("books-demo/templates/components/speaker-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "98snnHoA", "block": "{\"symbols\":[],\"statements\":[[4,\"link-to\",[\"edit-speaker\",[22,[\"idSpeaker\"]]],[[\"class\"],[\"btn btn-edit\"]],{\"statements\":[[0,\"\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/components/speaker-item.hbs" } });
});
define("books-demo/templates/create-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xtoSSaZe", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Добавление книги\"],[9],[0,\"\\n\\t\\t\"],[1,[26,\"book-form\",null,[[\"book\",\"onsubmit\"],[[22,[\"book\"]],[26,\"action\",[[21,0,[]],\"saveBook\"],null]]]],false],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/create-book.hbs" } });
});
define("books-demo/templates/create-meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "W/YG180l", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Создание встречи\"],[9],[0,\"\\n      \"],[1,[26,\"meeting-form\",null,[[\"meeting\",\"onsubmit\"],[[22,[\"meeting\"]],[26,\"action\",[[21,0,[]],\"saveMeeting\"],null]]]],false],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/create-meeting.hbs" } });
});
define("books-demo/templates/create-review", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7saj5LhQ", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Добавление доклада\"],[9],[0,\"\\n\\t\\t  \"],[1,[26,\"review-form\",null,[[\"review\",\"onsubmit\"],[[22,[\"review\"]],[26,\"action\",[[21,0,[]],\"saveReview\"],null]]]],false],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/create-review.hbs" } });
});
define("books-demo/templates/create-speaker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ofAyxlig", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Добавление спикера\"],[9],[0,\"\\n\\t\\t\"],[1,[26,\"speaker-form\",null,[[\"speaker\",\"onsubmit\"],[[22,[\"speaker\"]],[26,\"action\",[[21,0,[]],\"saveSpeaker\"],null]]]],false],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/create-speaker.hbs" } });
});
define("books-demo/templates/edit-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6iWL6vir", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование книги: \"],[1,[22,[\"model\",\"title\"]],false],[9],[0,\"\\n\\t\\t\"],[1,[26,\"book-form\",null,[[\"book\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveBook\"],null]]]],false],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/edit-book.hbs" } });
});
define("books-demo/templates/edit-meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1A8zWu1b", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование встречи\"],[9],[0,\"\\n\\t\\t  \"],[1,[26,\"meeting-form\",null,[[\"meeting\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveMeeting\"],null]]]],false],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/edit-meeting.hbs" } });
});
define("books-demo/templates/edit-review", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0vTI0teX", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Изменение спикера\"],[9],[0,\"\\n\\t\\t  \"],[1,[26,\"review-form\",null,[[\"review\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveReview\"],null]]]],false],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/edit-review.hbs" } });
});
define("books-demo/templates/edit-speaker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+hNtrhQV", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование спикера: \"],[1,[22,[\"model\",\"lastName\"]],false],[0,\" \"],[1,[22,[\"model\",\"firstName\"]],false],[9],[0,\"\\n\\t\\t\"],[1,[26,\"speaker-form\",null,[[\"speaker\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveSpeaker\"],null]]]],false],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/edit-speaker.hbs" } });
});
define("books-demo/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D6EuxaFr", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"loading-page\"],[8],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/error.gif\"]]],[10,\"alt\",\"Welocme\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/error.hbs" } });
});
define("books-demo/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QUAHghKu", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"home-page\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \\t\"],[6,\"div\"],[10,\"class\",\"row fixed-center align-items-center h-100 home-page-nav\"],[8],[0,\"\\n  \\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n  \\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"meetings\"],[10,\"class\",\"card text-center\"],[8],[0,\"\\n  \\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n  \\t\\t\\t\\t  \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-people desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n  \\t\\t\\t\\t  \\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"],[8],[9],[0,\"\\n  \\t\\t\\t\\t  \"],[9],[0,\"\\n  \\t\\t\\t\\t  \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"menu.meetings\"],null],false],[9],[0,\"\\n  \\t\\t\\t  \"],[9],[0,\"\\n  \\t\\t\\t\"],[9],[0,\"\\n  \\t\\t\"],[9],[0,\"\\n  \\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"  \\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n  \\t\\t\\t\\t  \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-book desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n  \\t\\t\\t\\t  \\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"],[8],[9],[0,\"\\n  \\t\\t\\t\\t  \"],[9],[0,\"\\n  \\t\\t\\t\\t  \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"menu.books\"],null],false],[9],[0,\"\\n  \\t\\t\\t  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\\t\"],[9],[0,\"\\n  \\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"  \\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n  \\t\\t\\t\\t  \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-mic desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n  \\t\\t\\t\\t  \\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n  \\t\\t\\t\\t  \\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"],[8],[9],[0,\"\\n  \\t\\t\\t\\t  \"],[9],[0,\"\\n  \\t\\t\\t\\t  \"],[6,\"h3\"],[8],[1,[26,\"t\",[\"menu.speakers\"],null],false],[9],[0,\"\\n  \\t\\t\\t  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \\t\\t\"],[9],[0,\"\\n  \\t\"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/index.hbs" } });
});
define("books-demo/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KU8R0rT1", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"loading-page\"],[8],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/loading.gif\"]]],[10,\"alt\",\"Welocme\"],[8],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/loading.hbs" } });
});
define("books-demo/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "p2bH3e+S", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"form-signin-wrapper\"],[8],[0,\"\\n  \"],[6,\"main\"],[10,\"class\",\"form-signin text-center\"],[8],[0,\"\\n    \"],[1,[26,\"login-form\",null,[[\"user\",\"errors\",\"onSubmit\"],[[22,[\"model\"]],[22,[\"errors\"]],[26,\"action\",[[21,0,[]],\"login\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/login.hbs" } });
});
define("books-demo/templates/meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3BQfx6So", "block": "{\"symbols\":[\"page\",\"meeting\",\"review\",\"meeting\",\"speaker\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between align-items-end\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[4,\"link-to\",[\"create-meeting\"],null,{\"statements\":[[0,\"\\t\\t\\t  \"],[6,\"div\"],[10,\"class\",\"col-md-1\"],[8],[0,\"\\n\\t\\t\\t  \\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить встречу\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t  \\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t  \\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n\\t\\t\\t  \\t\\t\"],[9],[0,\"\\n\\t\\t\\t  \\t\"],[9],[0,\"\\n\\t\\t\\t  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-3 align-top\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"h5\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\",\"searchField\",\"allowClear\"],[[22,[\"model\",\"speakers\"]],[22,[\"selectedSpeaker\"]],[26,\"action\",[[21,0,[]],\"changeSpeaker\"],null],\"fullName\",true]],{\"statements\":[[0,\"            \"],[1,[21,5,[\"fullName\"]],false],[0,\"\\n\"]],\"parameters\":[5]},null],[0,\"\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"h5\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"select\"],[10,\"class\",\"selectpicker form-control dropdown-filter-control\"],[10,\"data-live-search\",\"true\"],[10,\"data-size\",\"5\"],[10,\"title\",\"Книга...\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"h5\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n\"],[4,\"power-select\",null,[[\"options\",\"selected\",\"onchange\",\"searchField\",\"allowClear\"],[[22,[\"model\",\"meetings\"]],[22,[\"selectedMeeting\"]],[26,\"action\",[[21,0,[]],\"changeMeeting\"],null],\"dateOfMeeting\",true]],{\"statements\":[[0,\"            \"],[1,[21,4,[\"dateOfMeeting\"]],false],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto text-right col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-funnel card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary my-2\"],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-x card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t  \"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\",\"meetings\"]]],null,{\"statements\":[[0,\"\\t\\t\"],[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"h4\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"input\"],[10,\"placeholder\",\"Дата встречи\"],[10,\"class\",\"form-control meeting-date\"],[11,\"value\",[26,\"moment-format\",[[21,2,[\"dateOfMeeting\"]],\"DD.MM.YYYY\"],null],null],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit meeting\",[21,2,[]]],null]],null]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[1,[26,\"meeting-item\",null,[[\"idMeeting\"],[[21,2,[\"id\"]]]]],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteMeeting\",[21,2,[]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"h4\"],[8],[0,\"Список докладов\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\"],[4,\"each\",[[21,2,[\"reviews\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[1,[21,3,[\"speaker\",\"lastName\"]],false],[0,\" \"],[1,[21,3,[\"speaker\",\"firstName\"]],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[1,[21,3,[\"book\",\"title\"]],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[1,[21,3,[\"book\",\"author\"]],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tОценка:\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[11,\"style\",[27,[\"width: \",[21,3,[\"markBook\"]],\"%;\"]]],[11,\"aria-valuenow\",[21,3,[\"markBook\"]],null],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[1,[21,3,[\"markBook\"]],false],[0,\"%\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[1,[21,3,[\"report\"]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\t\\t\"],[6,\"nav\"],[10,\"aria-label\",\"Page navigation example\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"pagination justify-content-end\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"page-item disabled\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"page-link\"],[10,\"href\",\"#\"],[10,\"aria-label\",\"Previous\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"aria-hidden\",\"true\"],[8],[0,\"«\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"pages\"]]],null,{\"statements\":[[0,\"          \"],[6,\"li\"],[10,\"class\",\"page-item page-link\"],[8],[0,\"\\n            \"],[4,\"link-to\",[\"meeting\",[26,\"query-params\",null,[[\"page\"],[[21,1,[]]]]]],null,{\"statements\":[[1,[21,1,[]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\\t\\t  \"],[6,\"li\"],[10,\"class\",\"page-item disabled\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"page-link\"],[10,\"href\",\"#\"],[10,\"aria-label\",\"Next\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"aria-hidden\",\"true\"],[8],[0,\"»\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/meeting.hbs" } });
});
define("books-demo/templates/register", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/PuCBF+L", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"form-signin-wrapper\"],[8],[0,\"\\n  \"],[6,\"main\"],[10,\"class\",\"form-signin text-center\"],[8],[0,\"\\n    \"],[1,[26,\"register-form\",null,[[\"user\",\"errors\",\"onSubmit\"],[[22,[\"model\"]],[22,[\"errors\"]],[26,\"action\",[[21,0,[]],\"saveUser\"],null]]]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/register.hbs" } });
});
define("books-demo/templates/speakers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kCPnERNi", "block": "{\"symbols\":[\"speaker\"],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n\"],[4,\"if\",[[22,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[4,\"link-to\",[\"create-speaker\"],null,{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить спикера\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"class\",\"aria-label\",\"input\",\"value\"],[\"text\",\"ФИО\",\"form-control mr-2 search-long search-only\",\"Спикер\",[26,\"action\",[[21,0,[]],\"refreshSpeakers\"],null],[22,[\"searchValue\"]]]]],false],[0,\"\\n\"],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"\\t\\t\\t  \"],[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n\\t\\t\\t    \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n\\t\\t\\t  \\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"env\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Фото спикера\"],[8],[9],[0,\"\\n\\t\\t\\t  \\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t  \\t  \\t\"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[26,\"get-speaker-name\",[[21,1,[\"firstName\"]],[21,1,[\"lastName\"]]],null],false],[9],[0,\"\\n\\t\\t\\t  \\t\\t\"],[9],[0,\"\\n\\t\\t\\t  \\t\\t\"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n\\t\\t\\t  \\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n\"],[4,\"if\",[[26,\"await\",[[26,\"can\",[\"edit speaker\",[21,1,[]]],null]],null]],null,{\"statements\":[[0,\"\\t\\t\\t  \\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t  \\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t  \\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n                  \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[1,[26,\"speaker-item\",null,[[\"idSpeaker\"],[[21,1,[\"id\"]]]]],false],[9],[0,\"\\n\\t\\t\\t  \\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteSpeaker\",[21,1,[]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t  \\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t  \\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n\\t\\t\\t  \\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t  \\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t  \\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t  \\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t  \\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t  \\t \\t\"],[9],[0,\"\\n\\t\\t\\t    \"],[9],[0,\"\\n\\t\\t\\t  \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "books-demo/templates/speakers.hbs" } });
});
define('books-demo/transforms/date-string', ['exports', 'ember-data/transforms/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _date.default.extend({
    moment: Ember.inject.service(),
    deserialize: function deserialize(serialized) {
      var date = this._super(serialized);
      if (date instanceof Date && !isNaN(date)) {
        var formattedDate = this.get('moment').moment(date).format('YYYY-MM-DD');
        return formattedDate;
      }

      return null;
    },
    serialize: function serialize(deserialized) {
      var deserializedDate = deserialized ? this.get('moment').moment(deserialized).toDate() : null;
      return this._super(deserializedDate);
    }
  });
});
define('books-demo/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _compileTemplate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _compileTemplate.default;
    }
  });
});
define('books-demo/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
define('books-demo/validators/alias', ['exports', 'ember-cp-validations/validators/alias'], function (exports, _alias) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _alias.default;
    }
  });
});
define('books-demo/validators/belongs-to', ['exports', 'ember-cp-validations/validators/belongs-to'], function (exports, _belongsTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _belongsTo.default;
    }
  });
});
define('books-demo/validators/collection', ['exports', 'ember-cp-validations/validators/collection'], function (exports, _collection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _collection.default;
    }
  });
});
define('books-demo/validators/confirmation', ['exports', 'ember-cp-validations/validators/confirmation'], function (exports, _confirmation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _confirmation.default;
    }
  });
});
define('books-demo/validators/date', ['exports', 'ember-cp-validations/validators/date'], function (exports, _date) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _date.default;
    }
  });
});
define('books-demo/validators/dependent', ['exports', 'ember-cp-validations/validators/dependent'], function (exports, _dependent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dependent.default;
    }
  });
});
define('books-demo/validators/ds-error', ['exports', 'ember-cp-validations/validators/ds-error'], function (exports, _dsError) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dsError.default;
    }
  });
});
define('books-demo/validators/exclusion', ['exports', 'ember-cp-validations/validators/exclusion'], function (exports, _exclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _exclusion.default;
    }
  });
});
define('books-demo/validators/format', ['exports', 'ember-cp-validations/validators/format'], function (exports, _format) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _format.default;
    }
  });
});
define('books-demo/validators/has-many', ['exports', 'ember-cp-validations/validators/has-many'], function (exports, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hasMany.default;
    }
  });
});
define('books-demo/validators/inclusion', ['exports', 'ember-cp-validations/validators/inclusion'], function (exports, _inclusion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inclusion.default;
    }
  });
});
define('books-demo/validators/length', ['exports', 'ember-cp-validations/validators/length'], function (exports, _length) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _length.default;
    }
  });
});
define('books-demo/validators/messages', ['exports', 'ember-i18n-cp-validations/validators/messages'], function (exports, _messages) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _messages.default;
    }
  });
});
define('books-demo/validators/number', ['exports', 'ember-cp-validations/validators/number'], function (exports, _number) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _number.default;
    }
  });
});
define('books-demo/validators/presence', ['exports', 'ember-cp-validations/validators/presence'], function (exports, _presence) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _presence.default;
    }
  });
});


define('books-demo/config/environment', [], function() {
  var prefix = 'books-demo';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("books-demo/app")["default"].create({"name":"books-demo","version":"0.0.0+687f3b0e"});
}
//# sourceMappingURL=books-demo.map
