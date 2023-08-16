import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const EventPage = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Text>{t('event.title')}</Text>
    </Box>
  );
};

export default EventPage;
