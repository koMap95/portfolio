import React from "react";
import { Box, Flex, Tooltip, Text, Heading, HStack, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        {/* <HStack
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        > */}
        <Flex margin="0 auto"
            color="white"
            maxWidth="1024px"
            justifyContent="space-between"
            alignItems="center"
            height={16}
            py={8}>
          <VStack alignItems="start">
            <Heading as='h6' size='xs' >This site was made as a final project on course Advanced React by Meta © 2023.</Heading>
            <Heading as='h6' size='xs' >Technologies that was used: React.js, Chakra UI, Formik </Heading>
          </VStack>

          <Tooltip label='You will be redirected to the GitHub'>
            <a
              key='https://github.com/koMap95/portfolio'
              href='https://github.com/koMap95/portfolio'
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text color={"white"} fontWeight="bold">
                Visit original page
                <FontAwesomeIcon color="white" icon={faArrowDown} size="1x" />
              </Text>
            </a>
          </Tooltip>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
