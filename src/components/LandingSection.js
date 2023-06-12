import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Artem!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack align="center" padding="5" >
      <Avatar
        src="https://media.licdn.com/dms/image/C4D03AQHUtsmHZlp8ag/profile-displayphoto-shrink_800_800/0/1625572836698?e=1691625600&v=beta&t=ZGnfpWkpD7RsNwaqLpdSKIEuX76CLF1FzXnCG7ILEW0"
        rounded="full"
        size="2xl"
        alt="Avatar"
        name="Artem"
      />
      <Heading as="h4" size='md'>
        {greeting}
      </Heading>
      <Text fontSize="4xl" >{bio1}</Text>
      <Text as='i' fontSize="4xl" >{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
