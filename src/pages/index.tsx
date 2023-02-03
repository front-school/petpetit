import { Container } from '@mui/material';
import type { GetAnnouncementQuery } from 'graphql/generated';
import type { GetServerSideProps, NextPage } from 'next';
import { useMemo } from 'react';

import Announcement from '@/components/Announcement';
import { Meta } from '@/layouts/Meta';
import AnnouncementService from '@/services/cms/announcement';
import { Main } from '@/templates/Main';

interface IndexProps {
  announcementQuery: GetAnnouncementQuery;
}

const Index: NextPage<IndexProps> = ({ announcementQuery }) => {
  const announcement = useMemo(
    () => announcementQuery.announcement?.data?.attributes,
    [announcementQuery]
  );

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Announcement headline={announcement?.title} deck={announcement?.deck} />

      <Container>
        <p>conteúdo da página</p>
      </Container>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const announcement = await AnnouncementService.get();

  return {
    props: {
      announcementQuery: announcement.data,
    },
  };
};

export default Index;
