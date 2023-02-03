import { GetAnnouncementDocument } from 'graphql/generated';

import Service from '@/utils/service';

class AnnouncementService extends Service {
  public static async get() {
    return this.apollo.query({
      query: GetAnnouncementDocument,
    });
  }
}

export default AnnouncementService;
