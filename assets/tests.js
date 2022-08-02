'use strict';

define('books-demo/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('abilities/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'abilities/book.js should pass ESLint\n\n');
  });

  QUnit.test('abilities/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'abilities/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('abilities/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'abilities/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/user.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/book-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/book-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/book-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/input-files.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-files.js should pass ESLint\n\n');
  });

  QUnit.test('components/input-tags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/input-tags.js should pass ESLint\n\n');
  });

  QUnit.test('components/login-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/login-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/meeting-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/meeting-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/meeting-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/meeting-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/register-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/register-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/review-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/review-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/review-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/review-item.js should pass ESLint\n\n');
  });

  QUnit.test('components/speaker-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/speaker-form.js should pass ESLint\n\n');
  });

  QUnit.test('components/speaker-item.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/speaker-item.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/books.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-book.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-review.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-review.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/create-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-book.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-review.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-review.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n24:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/meeting.js should pass ESLint\n\n4:10 - \'debounce\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/register.js should pass ESLint\n\n24:18 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/speakers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/speakers.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/env.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/env.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-speaker-name.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-speaker-name.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/config.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/config.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('loggers/console-logger.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'loggers/console-logger.js should pass ESLint\n\n');
  });

  QUnit.test('models/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass ESLint\n\n');
  });

  QUnit.test('models/error.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/error.js should pass ESLint\n\n');
  });

  QUnit.test('models/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('models/review.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/review.js should pass ESLint\n\n');
  });

  QUnit.test('models/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/404.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/404.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/books.js should pass ESLint\n\n');
  });

  QUnit.test('routes/create-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create-book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/create-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('routes/create-review.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create-review.js should pass ESLint\n\n');
  });

  QUnit.test('routes/create-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-review.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-review.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass ESLint\n\n12:42 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('routes/register.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/register.js should pass ESLint\n\n13:42 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/speakers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/speakers.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/book.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/meeting.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/review.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/review.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/speaker.js should pass ESLint\n\n');
  });

  QUnit.test('services/current-user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/current-user.js should pass ESLint\n\n');
  });

  QUnit.test('services/data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/data.js should pass ESLint\n\n');
  });

  QUnit.test('services/error-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/error-service.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/date-string.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/date-string.js should pass ESLint\n\n');
  });
});
define('books-demo/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('books-demo/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function () {
      (true && !(false) && Ember.deprecate('DEPRECATED `import { ' + name + ' } from \'../../tests/helpers/ember-power-select\';` is deprecated. Please, replace it with `import { ' + name + ' } from \'ember-power-select/test-support/helpers\';`', false, { until: '1.11.0', id: 'ember-power-select-test-support-' + name }));

      return fn.apply(undefined, arguments);
    };
  }

  var findContains = deprecateHelper(_helpers.findContains, 'findContains');
  var nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  var nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  var triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  var typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  var clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  var nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  var touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  var selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('books-demo/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return app.testHelpers.wait();
  }
});
define('books-demo/tests/integration/components/book-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | book-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "uGOy+6PC",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"book-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "044e3rT8",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"book-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/book-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | book-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "2x52WfKr",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"book-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "XOz6EBsH",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"book-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/input-files-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | input-files', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "toslMjDV",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"input-files\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "LhLWk/KE",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"input-files\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/input-tags-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | input-tags', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "jx2CQ+gn",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"input-tags\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "GnNXYKZM",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"input-tags\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/login-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | login-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "WCm5jH4F",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"login-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "QnYGFQE0",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"login-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/meeting-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | meeting-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "1Tge71cH",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "+SgN9C3i",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/meeting-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | meeting-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "BYXbOdV8",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"meeting-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "InWqEAmc",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"meeting-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/register-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | register-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "YtZ5OcI6",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"register-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "0lFi1VJt",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"register-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/review-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | review-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "r5GeGoU8",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"review-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "H5DKxxau",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"review-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/review-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | review-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "neWorZwH",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"review-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "+zzp0GcV",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"review-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/speaker-form-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | speaker-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "qcp+twW8",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"speaker-form\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "TWXDckYV",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"speaker-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/components/speaker-item-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Component | speaker-item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "hf2D2UaF",
                  "block": "{\"symbols\":[],\"statements\":[[1,[20,\"speaker-item\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal(this.element.textContent.trim(), '');

                // Template block usage:
                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "X4ATFbQC",
                  "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"speaker-item\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:

                assert.equal(this.element.textContent.trim(), 'template block text');

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/helpers/env-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Helper | env', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "gK7RAtd+",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"env\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/integration/helpers/get-speaker-name-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Helper | get-speaker-name', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "grXFYaBl",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-speaker-name\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/test-helper', ['books-demo/app', 'books-demo/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('books-demo/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/book-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/book-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/book-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/input-files-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-files-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/input-tags-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/input-tags-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/login-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/login-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/meeting-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/meeting-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/register-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/register-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/review-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/review-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/review-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/review-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/speaker-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/speaker-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/speaker-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/speaker-item-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/env-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/env-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-speaker-name-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-speaker-name-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/abilities/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/abilities/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/abilities/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/abilities/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/abilities/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/abilities/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/book-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/book-form-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/books-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-review-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-review-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/create-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/create-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-review-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-review-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speakers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speakers-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/start-app-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/start-app-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/error-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/error-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/review-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/review-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/404-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/404-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/create-review-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/create-review-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-review-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-review-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/register-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/register-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/review-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/review-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers/detail-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers/detail-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/review-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/review-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/current-user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/current-user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/data-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/error-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/error-service-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/transforms/date-string-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/transforms/date-string-test.js should pass ESLint\n\n');
  });
});
define('books-demo/tests/unit/abilities/book-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('ability:book', 'Unit | Ability | book', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var ability = this.subject();
    assert.ok(ability);
  });
});
define('books-demo/tests/unit/abilities/meeting-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('ability:meeting', 'Unit | Ability | meeting', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var ability = this.subject();
    assert.ok(ability);
  });
});
define('books-demo/tests/unit/abilities/speaker-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('ability:speaker', 'Unit | Ability | speaker', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var ability = this.subject();
    assert.ok(ability);
  });
});
define('books-demo/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('books-demo/tests/unit/adapters/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var adapter = this.owner.lookup('adapter:user');
      assert.ok(adapter);
    });
  });
});
define('books-demo/tests/unit/controllers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/book-form-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | book-form', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:book-form');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/books-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:books');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/create-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | create-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-book');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/create-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | create-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-meeting');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/create-review-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | create-review', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create-review');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/create-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | create', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:create');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/edit-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-book');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/edit-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-meeting');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/edit-review-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-review', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-review');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/edit-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-speaker');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meeting');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/register-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | register', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:register');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/controllers/speakers-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speakers');
      assert.ok(controller);
    });
  });
});
define('books-demo/tests/unit/initializers/start-app-test', ['books-demo/initializers/start-app', 'qunit', 'ember-qunit'], function (_startApp, _qunit, _emberQunit) {
  'use strict';

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

  (0, _qunit.module)('Unit | Initializer | start-app', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _startApp.initialize
      });

      this.application = this.TestApplication.create({ autoboot: false });
    });

    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });

    // Replace this with your real tests.
    (0, _qunit.test)('it works', function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.application.boot();

              case 2:

                assert.ok(true);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
});
define('books-demo/tests/unit/models/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('book', {});
      });
      assert.ok(model);
    });
  });
});
define('books-demo/tests/unit/models/error-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | error', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('error', {});
      });
      assert.ok(model);
    });
  });
});
define('books-demo/tests/unit/models/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('meeting', {});
      });
      assert.ok(model);
    });
  });
});
define('books-demo/tests/unit/models/review-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | review', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('review', {});
      });
      assert.ok(model);
    });
  });
});
define('books-demo/tests/unit/models/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('speaker', {});
      });
      assert.ok(model);
    });
  });
});
define('books-demo/tests/unit/models/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var model = Ember.run(function () {
        return store.createRecord('user', {});
      });
      assert.ok(model);
    });
  });
});
define('books-demo/tests/unit/routes/404-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | 404', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:404');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/books-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/create-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | create-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-book');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/create-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | create-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-meeting');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/create-review-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | create-review', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:create-review');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/edit-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-book');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/edit-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-meeting');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/edit-review-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-review', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-review');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/edit-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-speaker');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meeting');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/register-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | register', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:register');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/review-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | review', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:review');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/speakers-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/routes/speakers/detail-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers/detail', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers/detail');
      assert.ok(route);
    });
  });
});
define('books-demo/tests/unit/serializers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('application');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('application', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books-demo/tests/unit/serializers/book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('book');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('book', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books-demo/tests/unit/serializers/meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('meeting');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('meeting', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books-demo/tests/unit/serializers/review-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | review', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('review');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('review', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books-demo/tests/unit/serializers/speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Serializer | speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var store = this.owner.lookup('service:store');
      var serializer = store.serializerFor('speaker');

      assert.ok(serializer);
    });

    (0, _qunit.test)('it serializes records', function (assert) {
      var store = this.owner.lookup('service:store');
      var record = Ember.run(function () {
        return store.createRecord('speaker', {});
      });

      var serializedRecord = record.serialize();

      assert.ok(serializedRecord);
    });
  });
});
define('books-demo/tests/unit/services/current-user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | current-user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:current-user');
      assert.ok(service);
    });
  });
});
define('books-demo/tests/unit/services/data-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | data', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:data');
      assert.ok(service);
    });
  });
});
define('books-demo/tests/unit/services/error-service-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | error-service', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:error-service');
      assert.ok(service);
    });
  });
});
define('books-demo/tests/unit/transforms/date-string-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('transform:date-string', 'Unit | Transform | date string', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var transform = this.owner.lookup('transform:date-string');
      assert.ok(transform);
    });
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

require('books-demo/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
