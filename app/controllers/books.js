import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  errorService: service(),
  queryParams: ['search', 'searchTags'],
  search: '',
  searchTags: '',

  actions:{
    async deleteBook(book) {
      try{
        await book.destroyRecord();
      }
      catch(e){
        let err = this.get('errorService').createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        await errorModel.save();
      }
    },
    refreshBooks(){
      this.set('search', this.get('searchValue'));
    },
    refreshTags(){
      this.set('searchTags', this.get('searchTagsValue'));
    },
  }
});
