import { Box, Flex } from '@chakra-ui/react';
import { memo, PropsWithChildren } from 'react';

import PageHeader from './PageHeader';
import SidebarMenu from './SidebarMenu';
import AlertModal from './AlertModal';

function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <PageHeader />
      <Flex>
        <SidebarMenu />
        <Box as="main" p={2} flex={1} overflowX="hidden" w="100%">
          {children}
        </Box>
      </Flex>
      <AlertModal />
    </>
  );
}

export default memo(MainLayout);
