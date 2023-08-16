import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useAlertModal from 'shared/hooks/useAlertModal';

const AlertModal = () => {
  const { t } = useTranslation();
  const { alertModal, onClose } = useAlertModal();
  const cancelRef = useRef(null);

  const confirm = () => {
    alertModal.confirm?.();
    onClose();
  };

  const close = () => {
    alertModal.close?.();
    onClose();
  };

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={alertModal.isShowing}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>{alertModal.title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{alertModal.message}</AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={close}>
            {t(alertModal.closeButton || 'common.no')}
          </Button>
          <Button colorScheme="red" onClick={confirm} ml={3}>
            {t(alertModal.confirmButton || 'common.yes')}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default memo(AlertModal);
