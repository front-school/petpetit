import {
  GetAnnouncementDocument,
  GetSecondaryAnnouncementDocument,
} from 'graphql/generated';

import Service from '@/utils/service';

class AnnouncementService extends Service {
  public static async get() {
    return this.apollo.query({
      query: GetAnnouncementDocument,
    });
  }

  public static async getSecondary() {
    return this.apollo.query({
      query: GetSecondaryAnnouncementDocument,
    });
  }
}

export default AnnouncementService;
