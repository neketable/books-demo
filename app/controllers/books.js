import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['search', 'searchTags'],
  search: '',
  searchTags: '',
  dataService: service('data'),

  actions:{
    deleteBook(book) {
      this.get('dataService').deleteBook(book);
    },
    refreshBooks(){
      this.set('search', this.get('searchValue'));
    },
    refreshTags(){
      this.set('searchTags', this.get('searchTagsValue'));
    },
  }
});
