import { Image, Link } from '@chakra-ui/react';

import { Link as ReactLink } from 'react-router-dom';
import { buildHref } from 'utils/path';
import paths from 'configs/paths';
const logo = require('assets/icons/logo.png');

function Logo() {
  return (
    <Link
      as={ReactLink}
      w={10}
      h={10}
      to={buildHref(paths.HOME.ROOT)}
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Image src={logo} />
    </Link>
  );
}

export default Logo;
