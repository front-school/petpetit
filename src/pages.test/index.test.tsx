import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(
        <Index
          announcementQuery={{
            announcement: {
              data: {
                attributes: {
                  title: 'title',
                  deck: 'deck',
                },
              },
            },
          }}
        />
      );

      const content = screen.getByText(/conteúdo da página/);

      expect(content).toBeInTheDocument();
    });
  });
});
