import Service from '@ember/service';

export default Service.extend({
  createLog(error) {
    let newError = {
      dateOfError: new Date().toISOString(),
      errorIP: null,
      errorURL: window.location.href,
      errorText: error
    }
    return newError;
  },
});
