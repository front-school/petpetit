import { GetProductThemesDocument } from 'graphql/generated';

import Service from '@/utils/service';

export default class ProductThemesService extends Service {
  public static async get() {
    return this.apollo.query({
      query: GetProductThemesDocument,
    });
  }
}
