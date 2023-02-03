import { Box, Container } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import Logo from './Logo';
import ProductThemesDescriber from './ProductThemesDescriber';

export default function Header() {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('header');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <Box bgcolor="white" color="primary.main">
          <Container>
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
              textAlign="center"
              py={2}
            >
              <Logo />
              <ProductThemesDescriber />
            </Box>
          </Container>
        </Box>,
        ref.current
      )
    : null;
}
