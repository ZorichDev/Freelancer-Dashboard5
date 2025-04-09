import React from 'react';
import { 
  Box, 
  Flex, 
  Heading, 
  Avatar, 
  Text, 
  Divider, 
  Badge, 
  Container, 
  useColorModeValue,
  Icon,
  SimpleGrid,
  useBreakpointValue,
  Stack,
  VStack
} from '@chakra-ui/react';
import { 
  FiMail, 
  FiGlobe, 
  FiMapPin, 
  FiBriefcase, 
  FiPhone, 
  FiCalendar, 
  FiCode 
} from 'react-icons/fi';
import StatsCard from '../StatsCard';

const Profile = () => {
  const skills = ['React', 'JavaScript', 'Tailwind', 'Github', 'Bootstrap', 'WordPress', 'Chakra UI', 'HTML', 'CSS', 'UI/UX Design'];
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  // Responsive values
  const isMobile = useBreakpointValue({ base: true, md: false });
  const avatarSize = useBreakpointValue({ base: 'xl', md: '2xl' });
  const direction = useBreakpointValue({ base: 'column', lg: 'row' });
  const infoIconSize = useBreakpointValue({ base: 4, md: 5 });

  return (
    <Box 
      ml={{ base: 0, md: 0 }} 
      p={{ base: 4, md: 6 }} 
      bg="gray.50"
      minH="100vh"
    >
      <Container maxW="container.xl" px={{ base: 0, md: 0 }}>
        <Heading 
          size="lg" 
          mb={{ base: 4, md: 6 }} 
          color={useColorModeValue('gray.700', 'white')}
          px={{ base: 4, md: 0 }}
        >
          My Profile
        </Heading>
        
        <Flex 
          direction={direction} 
          gap={{ base: 4, md: 6 }}
          px={{ base: 4, md: 0 }}
        >
          {/* Left Column - Profile Info */}
          <Box 
            bg={bgColor} 
            p={{ base: 4, md: 6 }} 
            borderRadius="xl" 
            boxShadow={{ base: 'none', md: 'md' }} 
            flex="1"
            borderWidth="1px"
            borderColor={borderColor}
            w="100%"
          >
            <VStack align="center" mb={6} spacing={4}>
              <Avatar 
                size={avatarSize} 
                name="Franzor" 
                src="/img/franzor.jpg"
                border="4px solid"
                borderColor="brand.500"
              />
              <Box textAlign="center">
                <Heading size="lg">Franzor</Heading>
                <Text color={textColor} fontSize="md">Senior Software Developer</Text>
                <Badge 
                  colorScheme="green" 
                  mt={3} 
                  px={3} 
                  py={1} 
                  borderRadius="full"
                  fontSize="sm"
                >
                  Available for work
                </Badge>
              </Box>
            </VStack>
            
            <Divider my={{ base: 4, md: 6 }} />
            
            <Stack spacing={3}>
              <Flex align="center">
                <Icon as={FiMail} mr={4} color="brand.500" boxSize={infoIconSize} />
                <Text fontSize="sm" color={textColor}>ffranzor@yahoo.com</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FiGlobe} mr={4} color="brand.500" boxSize={infoIconSize} />
                <Text fontSize="sm" color={textColor}>fran-tech.netlify.app</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FiMapPin} mr={4} color="brand.500" boxSize={infoIconSize} />
                <Text fontSize="sm" color={textColor}>Ajah Lagos, NG</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FiPhone} mr={4} color="brand.500" boxSize={infoIconSize} />
                <Text fontSize="sm" color={textColor}>+234 906 924 6577</Text>
              </Flex>
            </Stack>
            
            <Divider my={{ base: 4, md: 6 }} />
            
            <Box>
              <Heading size="md" mb={3} color={useColorModeValue('gray.700', 'white')}>
                About Me
              </Heading>
              <Text color={textColor} fontSize="sm" lineHeight="tall">
                Passionate Frontend developer with 5+ years of experience building web applications and digital products. 
                Specialized in React, Tailwind, Bootstrap, WordPress, Chakra UI, UI/UX Design, and modern JavaScript frameworks. 
                I focus on creating elegant, functional interfaces that deliver exceptional user experiences.
              </Text>
            </Box>
          </Box>
          
          {/* Right Column - Stats and Details */}
          <Box flex={{ base: '1', lg: "2" }}>
            <SimpleGrid 
              columns={{ base: 1, sm: 2 }} 
              spacing={{ base: 3, md: 6 }} 
              mb={{ base: 4, md: 6 }}
            >
              <StatsCard
                title="Years Experience"
                value="5+"
                icon={FiBriefcase}
                color="blue"
                compact={isMobile}
              />
              <StatsCard
                title="Projects Completed"
                value="48"
                icon={FiCode}
                color="green"
                compact={isMobile}
              />
            </SimpleGrid>
            
            {/* Skills Section */}
            <Box 
              bg={bgColor} 
              p={{ base: 4, md: 6 }} 
              borderRadius="xl" 
              boxShadow={{ base: 'none', md: 'md' }} 
              mb={{ base: 4, md: 6 }}
              borderWidth="1px"
              borderColor={borderColor}
            >
              <Heading size="md" mb={3} color={useColorModeValue('gray.700', 'white')}>
                Skills
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    colorScheme="brand" 
                    px={3} 
                    py={1} 
                    borderRadius="full"
                    fontSize={{ base: 'xs', md: 'sm' }}
                  >
                    {skill}
                  </Badge>
                ))}
              </Flex>
            </Box>
            
            {/* Work History Section */}
            <Box 
              bg={bgColor} 
              p={{ base: 4, md: 6 }} 
              borderRadius="xl" 
              boxShadow={{ base: 'none', md: 'md' }}
              borderWidth="1px"
              borderColor={borderColor}
            >
              <Heading size="md" mb={3} color={useColorModeValue('gray.700', 'white')}>
                Work History
              </Heading>
              
              <Box mb={{ base: 4, md: 6 }}>
                <Flex align="center" mb={2} flexWrap="wrap">
                  <Badge 
                    colorScheme="brand" 
                    px={2} 
                    py={1} 
                    borderRadius="full" 
                    mr={2}
                    mb={{ base: 1, md: 0 }}
                  >
                    Current
                  </Badge>
                  <Heading size="sm">Freelance Developer</Heading>
                </Flex>
                <Flex align="center" mb={2} color={textColor}>
                  <Icon as={FiCalendar} mr={2} boxSize={infoIconSize} />
                  <Text fontSize="sm">2019 - Present</Text>
                </Flex>
                <Text color={textColor} mt={2} fontSize="sm">
                  Collaborated with various clients to build scalable web applications and solve complex technical challenges. Delivered over 30 successful projects with a client satisfaction rate of 98%.
                </Text>
              </Box>
              
              <Box>
                <Heading size="sm" mb={2}>Frontend Developer at TechAcademy</Heading>
                <Flex align="center" mb={2} color={textColor}>
                  <Icon as={FiCalendar} mr={2} boxSize={infoIconSize} />
                  <Text fontSize="sm">2017 - 2019</Text>
                </Flex>
                <Text color={textColor} mt={2} fontSize="sm">
                Directed the creation of the company's flagship product utilizing HTML, CSS, 
                Bootstrap, and JavaScript. Focused on optimizing performance, achieving a 40% 
                improvement, while introducing innovative features that resulted in a 25% increase 
                in user engagement. Managed development progress through GitHub for efficient version 
                control and collaboration.
                </Text>
              </Box>
              <Box>
                <Heading size="sm" mb={2}>Frontend Developer at Internpulse</Heading>
                <Flex align="center" mb={2} color={textColor}>
                  <Icon as={FiCalendar} mr={2} boxSize={infoIconSize} />
                  <Text fontSize="sm">2024 - 2025</Text>
                </Flex>
                <Text color={textColor} mt={2} fontSize="sm">
                  Led the development of the company's flagship product using React and Chakra UI. Improved the application performance by 40% and implemented new features that increased user engagement by 25%.
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Profile;