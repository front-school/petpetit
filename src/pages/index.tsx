import { Container } from '@mui/material';
import type {
  GetAnnouncementQuery,
  GetSecondaryAnnouncementQuery,
} from 'graphql/generated';
import type { GetStaticProps, NextPage } from 'next';
import { useMemo } from 'react';

import Announcement from '@/components/Announcement';
import Header from '@/components/Header';
import SecondaryAnnouncement from '@/components/SecondaryAnnouncement';
import { Meta } from '@/layouts/Meta';
import AnnouncementService from '@/services/cms/announcement';
import { Main } from '@/templates/Main';

interface IndexProps {
  announcementQuery: GetAnnouncementQuery;
  secondaryAnnouncementQuery: GetSecondaryAnnouncementQuery;
}

const Index: NextPage<IndexProps> = ({
  announcementQuery,
  secondaryAnnouncementQuery,
}) => {
  const announcement = useMemo(
    () => announcementQuery.announcement?.data?.attributes,
    [announcementQuery]
  );
  const secondaryAnnouncement = useMemo(
    () => secondaryAnnouncementQuery.secondaryAnnouncement?.data?.attributes,
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
      <Header />
      <SecondaryAnnouncement
        mobileImageUrl={
          secondaryAnnouncement?.mobileImage?.data?.attributes?.url
        }
        headline={secondaryAnnouncement?.title}
        imageUrl={secondaryAnnouncement?.image?.data?.attributes?.url}
      />

      <Container>
        <p>conteúdo da página</p>
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const announcement = await AnnouncementService.get();
  const secondaryAnnouncement = await AnnouncementService.getSecondary();

  return {
    props: {
      announcementQuery: announcement.data,
      secondaryAnnouncementQuery: secondaryAnnouncement.data,
    },
  };
};

export default Index;
