import { Box, Image, Text, Flex, Link } from '@chakra-ui/react';
import logo from '../assets/openai.png';

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} marginRight={1} />
        <Text color="white" fontSize={15} fontWeight="bold">
          Powered by
          <Link
            href="https://openai.com/"
            color="whiteAlpha.600"
            isExternal
            marginLeft={1}
          >
            OpenAI
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};
export default Footer;
