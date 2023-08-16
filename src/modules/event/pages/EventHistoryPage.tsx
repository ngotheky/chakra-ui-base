import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const EventHistory = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Text>{t('event.eventHistory')}</Text>
    </Box>
  );
};

export default EventHistory;
