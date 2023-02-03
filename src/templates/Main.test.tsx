import { render } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have a div with announcement id to be used as portal', () => {
      const { container } = render(<Main meta={null}>{null}</Main>);

      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const announcement = container.querySelector('#announcement');

      expect(announcement).toBeInTheDocument();
    });
  });
});
