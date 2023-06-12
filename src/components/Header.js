import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFreeCodeCamp,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: kdouble2aa@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/koMap95",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/artem-kovhan-3a557b194/",
  },
  {
    icon: faFreeCodeCamp,
    url: "https://www.freecodecamp.org/KoMap95",
  },
  {
    icon: faCodepen,
    url: "https://codepen.io/Artem_K",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }

      if (prevScrollPosition > currentScrollPosition) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPosition = currentScrollPosition
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])



  return (
    <Box
    position="fixed" 
    top={0} 
    left={0} 
    right={0} 
    translateY={0} 
    transitionProperty="transform" 
    transitionDuration=".3s" 
    transitionTimingFunction="ease-in-out" 
    backgroundColor="#18181b" 
    ref={headerRef} 
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={icon} size="2x" key={url} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link to="#projects" onClick={handleClick("projects")}>
                Projects
              </Link>
              <Link to="#contactme" onClick={handleClick("contactme")}>
                Contact Me
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
