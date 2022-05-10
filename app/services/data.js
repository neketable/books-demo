import Service from '@ember/service';

export default Service.extend({
  getSpeakers(){
    return fetch('http://localhost:3000/speakers').then((response) => response.json());
  }
});
