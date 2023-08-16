import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Spacer,
  Avatar,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { memo } from 'react';
import LanguageSwitcher from 'shared/components/LanguageSwitcher';
import ThemeSwitcher from 'shared/components/ThemeSwitcher';
import useProfile from 'shared/hooks/useProfile';
import { FiLogOut } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import SideBarMenuItem from 'shared/components/SideBarMenuItem';
import { sidebarMenuData } from './SidebarMenu';
import useDrawerMenu from 'shared/hooks/useDrawerMenu';

function HeaderDrawerMenu() {
  const { data: profile } = useProfile();
  const { t } = useTranslation();
  const { isOpen, onClose } = useDrawerMenu();

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader display="flex" alignItems="center">
          <Avatar name={profile?.avatar} src={profile?.avatar} />
          <Text mx={2}>{profile?.name}</Text>
          <DrawerCloseButton mt={2} />
        </DrawerHeader>
        <Divider />
        <DrawerBody display="flex" flexDirection="column">
          <Box mt={2}>
            {sidebarMenuData.map((menu) => (
              <SideBarMenuItem key={menu?.path} isOpen={isOpen} {...menu} />
            ))}
          </Box>
          <Button display="flex" variant="ghost" justifyContent="left">
            <Icon as={FiLogOut} w={6} h={6} mr={3} />
            <Text>{t('common.logOut')}</Text>
          </Button>
          <Spacer />
          <Box pt={2}>
            <Flex alignItems="center">
              <LanguageSwitcher />
              <Spacer />
              <ThemeSwitcher />
            </Flex>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default memo(HeaderDrawerMenu);
