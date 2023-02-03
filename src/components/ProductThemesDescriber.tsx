import { Box, Link as MuiLink, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';

import ProductThemesService from '@/services/cms/productThemes';
import useAsync from '@/utils/hooks/useAsync';
import theme from '@/utils/theme';

export default function ProductThemesDescriber() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { status, error, value } = useAsync(() => ProductThemesService.get());

  if (isSmallScreen) return null;

  if (status !== 'success') return null;

  if (error) return null;

  return (
    <Box display="flex" alignItems="center" gap={2}>
      {value?.data.productThemes?.data.map((productTheme) => (
        <MuiLink
          component={Link}
          key={productTheme.id}
          href={`/categorias/${productTheme.attributes?.slug!}`}
          underline="none"
        >
          <Box
            display="flex"
            gap={1}
            alignItems="center"
            px={1.5}
            py={1}
            borderRadius={1}
            color={productTheme.attributes?.theme?.darkenColor}
            sx={{
              '&:hover': {
                bgcolor: productTheme.attributes?.theme?.mainColor,
                color: 'white',
              },
              '&:hover .dot': {
                bgcolor: 'white',
              },
            }}
          >
            <Box
              className="dot inline-block h-2 w-2 rounded-sm"
              sx={{
                bgcolor: productTheme.attributes?.theme?.mainColor,
              }}
            ></Box>
            <Typography
              variant="body2"
              fontWeight={600}
              textTransform="uppercase"
            >
              {productTheme.attributes?.title}
            </Typography>
          </Box>
        </MuiLink>
      ))}
    </Box>
  );
}
