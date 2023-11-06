/* eslint-disable react/no-unescaped-entities */
import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/light-bulb.svg';

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={70} marginBottom="1rem" />
      <Heading color="whiteAlpha.900" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text color="white" fontSize={18} textAlign="center">
        Paste in some text and I'll extract the keywords for you.
      </Text>
    </>
  );
};
export default Header;
