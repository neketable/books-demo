import Service from '@ember/service';
import ENV from 'books-demo/config/environment';
import { A } from '@ember/array';

export default Service.extend({
  init(){
    this._super(...arguments);
    this.set('speakers', A());
    this.set('books', A());
  },

  async getSpeakers(search){
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }
    let response = await fetch(`${ENV.backendURL}/speakers${queryParams}`);
    let speakers = await response.json();
    this.get('speakers').clear();
    this.get('speakers').pushObjects(speakers);
    return this.get('speakers');
  },

  getSpeaker(id){
    return fetch(`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
  },

  deleteSpeaker(speaker){
    this.get('speakers').removeObject(speaker);
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {method: 'DELETE'});
  },

  createSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },

  editSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },

  async getBooks(search, searchTags){
    let queryParams = '';
    if (search) {
      queryParams=`?q=${search}`;
    }
    if (searchTags) {
      if(queryParams!==''){
        queryParams+=`&tags_like=${searchTags}`;
      }
      else queryParams+=`?tags_like=${searchTags}`;
    }
    let response = await fetch(`${ENV.backendURL}/books${queryParams}`);
    let speakers = await response.json();
    this.get('books').clear();
    this.get('books').pushObjects(speakers);
    return this.get('books');
  },

  getBook(id){
    return fetch(`${ENV.backendURL}/books/${id}`).then((response) => response.json());
  },

  deleteBook(book){
    this.get('books').removeObject(book);
    return fetch(`${ENV.backendURL}/books/${book.id}`, {method: 'DELETE'});
  },

  createBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(`${ENV.backendURL}/books`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        });

        const savedBook = await savedBookPromise.json();

        if (!uploadData) {
          resolve();
        }

        uploadData.url = `${ENV.fileUploadURL}`;
        // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {
            const dataToUpload = {
              entityName: 'books',
              id: savedBook.id,
              fileName: result.filename
            };

            await fetch(`${ENV.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });

            // eslint-disable-next-line no-console
            console.log('Ok');
            resolve();
          }
          catch (e) {
            reject(e);
          }
        }).fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
      }
      catch (e) {
        reject(e);
      }
    });
  },

  editBook(book, uploadData) {
    return new Promise(async (resolve, reject) => {
      try {
        const savedBookPromise = await fetch(`${ENV.backendURL}/books/${book.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(book)
        });

        const savedBook = await savedBookPromise.json();

        if (!uploadData) {
          resolve();
        }

        uploadData.url = `${ENV.fileUploadURL}`;
        // uploadData.headers = getOwner(this).lookup('adapter:application').get('headers');
        uploadData.submit().done(async (result/*, textStatus, jqXhr*/) => {
          try {
            const dataToUpload = {
              entityName: 'books',
              id: savedBook.id,
              fileName: result.filename
            };

            await fetch(`${ENV.backendURL}/saveURL`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToUpload)
            });

            // eslint-disable-next-line no-console
            console.log('Ok');
            resolve();
          }
          catch (e) {
            reject(e);
          }
        }).fail((jqXhr, textStatus, errorThrown) => {
          reject(errorThrown);
        });
      }
      catch (e) {
        reject(e);
      }
    });
  },
});
