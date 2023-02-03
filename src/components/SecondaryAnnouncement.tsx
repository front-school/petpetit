import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import theme from '@/utils/theme';

interface SecondaryAnnouncementProps {
  headline: string | null | undefined;
  imageUrl: string | null | undefined;
  mobileImageUrl: string | null | undefined;
}

export default function SecondaryAnnouncement(
  props: SecondaryAnnouncementProps
) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('secondary-announcement');
    setMounted(true);
  }, []);

  if (!props.headline && !props.imageUrl) return null;

  return mounted && ref.current
    ? createPortal(
        <Box bgcolor={'whitesmoke'}>
          <Container>
            <Box
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              py={1.5}
            >
              {props.headline && (
                <Typography
                  variant="body1"
                  component="p"
                  color="primary.main"
                  textTransform="uppercase"
                  fontWeight={600}
                >
                  {props.headline}
                </Typography>
              )}
              {props.imageUrl && (
                <img
                  src={`http://localhost:1337${
                    isMobile && !!props.mobileImageUrl
                      ? props.mobileImageUrl
                      : props.imageUrl
                  }`}
                  alt={'Secondary announcement'}
                />
              )}
            </Box>
          </Container>
        </Box>,
        ref.current
      )
    : null;
}
