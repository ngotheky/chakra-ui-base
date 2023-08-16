import {
  Flex,
  Icon,
  Input,
  InputGroup,
  Text,
  Image,
  InputGroupProps,
  Highlight,
  useColorModeValue,
} from '@chakra-ui/react';
import { uploadImage } from 'apis/common';
import { head } from 'lodash';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { FcAddImage } from 'react-icons/fc';
import { getBase64 } from 'utils/helpers';

interface Props extends InputGroupProps {
  accept?: string;
  onUploadImage: (urlImage: string, imageName?: string) => void;
  image?: string;
  hideDescription?: boolean;
}

const FileUpload = ({ accept, onUploadImage, image, hideDescription, ...rest }: Props) => {
  const { t } = useTranslation();
  const color = useColorModeValue('black', 'white');
  const handleDragEnter = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragOver = (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = async (event: React.DragEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();
    let files = [...event.dataTransfer.files];

    if (files && files.length > 0) {
      console.log(files);
      handleUploadImage(files);
    }
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const files = target.files;
    handleUploadImage(Object.values(files as any));
  };

  const handleUploadImage = async (imageFiles: File[] | null) => {
    let files = imageFiles;
    if (!files?.length) return;

    Promise.all(
      files.map(async (file: File) => {
        file = head([file] as File[]) as File;
        const imageBase64 = await getBase64(file);
        onUploadImage(imageBase64);
        let bodyFormData = new FormData();
        bodyFormData.append('files', file);
        const { data: response, domain }: any = await uploadImage(bodyFormData);
        const nameImage = head(response) as string;
        const nameLogo = `${domain}/${nameImage}`;
        onUploadImage(nameLogo, nameImage);
      }),
    );
  };

  if (image)
    return (
      <InputGroup
        w="400px"
        h="150px"
        maxW="100%"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        {...rest}
      >
        <Image src={image} w="100%" height="100%" objectFit="cover" />
        <Input
          maxLength={1}
          type="file"
          height="100%"
          width="100%"
          position="absolute"
          top="0"
          left="0"
          opacity="0"
          aria-hidden="true"
          accept={accept || 'image/*'}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onChange={onChange}
          bgColor={'red'}
        />
      </InputGroup>
    );

  return (
    <InputGroup
      w="400px"
      h="150px"
      maxW="100%"
      borderWidth={2}
      borderStyle="dashed"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      {...rest}
    >
      <Flex flexDirection="column" alignItems="center">
        <Icon as={FcAddImage} boxSize="4em" />
        {!hideDescription && (
          <Text textAlign="center">
            <Highlight query={t('common.hightLightUploadImage')} styles={{ fontWeight: 'bold', fontSize: 16, color }}>
              {t('common.uploadImage')}
            </Highlight>
          </Text>
        )}
      </Flex>
      <Input
        type="file"
        height="100%"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        opacity="0"
        aria-hidden="true"
        accept={accept || 'image/*'}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default FileUpload;
