//import EmberObject from '@ember/object';

export function initialize(application) {
  //application.register('logger:main', Logger);
  application.inject('route', 'err', 'service:error-service');
  application.inject('contoller', 'err', 'service:error-service');
  application.inject('component', 'err', 'service:error-service');
}

export default {
  initialize
};
