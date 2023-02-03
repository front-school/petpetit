import type { GetAnnouncementQuery } from 'graphql/generated';
import type { GetServerSideProps, NextPage } from 'next';

import { Meta } from '@/layouts/Meta';
import AnnouncementService from '@/services/cms/announcement';
import { Main } from '@/templates/Main';

interface IndexProps {
  announcement: GetAnnouncementQuery;
}

const Index: NextPage<IndexProps> = ({ announcement }) => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1>{announcement.announcement?.data?.attributes?.title}</h1>
      <p>{announcement.announcement?.data?.attributes?.deck}</p>
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const announcement = await AnnouncementService.get();

  return {
    props: {
      announcement: announcement.data,
    },
  };
};

export default Index;
