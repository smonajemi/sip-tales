import * as React from 'react';
import { PaginationItem, Stack, Pagination } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

interface CustomPaginationProps {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({ count, page, onChange }) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      sx={{
        '@media (max-width: 600px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Pagination
        size="small"
        count={count}
        page={page}
        onChange={onChange}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
};

export default CustomPagination;
