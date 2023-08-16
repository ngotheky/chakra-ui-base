import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const MemberPage = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Text>{t('member.title')}</Text>
    </Box>
  );
};

export default MemberPage;
