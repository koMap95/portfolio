import { Heading, Image, Text, HStack, VStack, Tag, } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// const Card = ({ title, description, imageSrc }) => {
//   // Implement the UI for the Card component according to the instructions.
//   // You should be able to implement the component with the elements imported above.
//   // Feel free to import other UI components from Chakra UI if you wish to.
//   return null;
// };
const Card = ({ title, description, imageSrc, externalLink, techologies }) => {
  const text = "Link to project"
  let techColor = 'teal'
  return (
    <VStack p="5" rounded="lg" boxShadow="md" backgroundColor="white">
      <Image src={imageSrc} alt={title}
        height={180}
        objectFit='cover'
        loading='lazy' />
      <VStack align={"flex-start"}>
        <Heading as="h3" color={"black"}>{title}</Heading>
        <Text color={"gray"}>{description}</Text>
        <HStack>
          {techologies.map((techology) => {
            switch (techology) {
              case 'html':
                techColor = 'green'
                break;
              case 'css':
                techColor = 'teal'
                break;
              case 'js':
                techColor = 'cyan'
                break;
              case 'bootstrap':
                techColor = 'purple'
                break;
              default:
                techColor = 'cyan';
            }

            return (
              <Tag size='lg' key={techology} variant="solid" colorScheme={techColor}>
                {techology.toUpperCase()}
              </Tag>
            )
          })}
        </HStack>
          <a
            key={externalLink}
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text color={"black"} fontWeight="bold">{text} <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" /></Text>
          </a>
      </VStack>
    </VStack>
  );
};

export default Card;
