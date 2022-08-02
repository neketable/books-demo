import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { PER_PAGE } from '../controllers/meeting';

export default Route.extend({
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
  model({ search, page, speaker, meeting }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
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

    return RSVP.hash({
      speakers: this.store.findAll('speaker'),
      meetings: this.store.query('meeting', query),
    });
  },
  // model(){
  //   return this.get('store').findAll('meeting');
  // },
  setupController() {
    this._super(...arguments);
  },
});
