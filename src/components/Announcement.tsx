import { Box, Container, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface AnnouncementProps {
  headline: string | null | undefined;
  deck: string | null | undefined;
}

export default function Announcement(props: AnnouncementProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('announcement');
    setMounted(true);
  }, []);

  if (!props.headline && !props.deck) return null;

  return mounted && ref.current
    ? createPortal(
        <Box bgcolor="primary.main" color="primary.contrastText">
          <Container>
            <Box
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              textAlign="center"
              py={2}
            >
              {props.headline && (
                <Typography variant="subtitle1" component="h2">
                  {props.headline}
                </Typography>
              )}
              {props.deck && (
                <Typography variant="body2" fontWeight={300} component="p">
                  {props.deck}
                </Typography>
              )}
            </Box>
          </Container>
        </Box>,
        ref.current
      )
    : null;
}
