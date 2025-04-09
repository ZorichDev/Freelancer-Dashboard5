import React from 'react';
import { 
  Box, 
  Heading, 
  VStack, 
  Text, 
  Avatar, 
  Flex, 
  Badge, 
  useColorModeValue,
  Icon,
  Divider,
  useBreakpointValue,
  SimpleGrid,
  Stack
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FiCalendar, FiThumbsUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Feedback = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, DesignHub',
      comment: 'Franzor delivered exceptional work on our project. His attention to detail and communication were outstanding. The final product exceeded our expectations.',
      rating: 5,
      date: 'Jan 10, 2023',
      project: 'Website Redesign'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, TechStart',
      comment: 'Working with Franzor was a pleasure. He understood our requirements perfectly and delivered ahead of schedule. His technical expertise helped us solve complex problems we were facing.',
      rating: 4,
      date: 'Dec 15, 2022',
      project: 'Mobile App'
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'Marketing Director, EcoSolutions',
      comment: 'Franzor is highly professional and creative. He transformed our vision into reality with minimal guidance. Definitely recommend!',
      rating: 5,
      date: 'Feb 20, 2023',
      project: 'E-commerce Platform'
    },
    // Adding Nigerian testimonials
    {
      id: 4,
      name: 'Chinonso Okafor',
      role: 'CEO, TechHub Nigeria',
      comment: 'Franzor’s work was satisfactory, but we had some delays in communication. However, he always delivered the core features on time.',
      rating: 3,
      date: 'Mar 5, 2023',
      project: 'B2B Platform'
    },
    {
      id: 5,
      name: 'Adebayo Ogunleye',
      role: 'Marketing Head, Admax Solutions',
      comment: 'While the final product was good, there were some inconsistencies in the design. Could be improved in future projects.',
      rating: 4,
      date: 'Mar 10, 2023',
      project: 'Branding & Web Design'
    },
    {
      id: 6,
      name: 'Ngozi Nwosu',
      role: 'Product Manager, GreenTech Ltd.',
      comment: 'Franzor’s attention to detail was incredible. He understood our needs, and the project was completed well ahead of time.',
      rating: 5,
      date: 'Feb 25, 2023',
      project: 'Mobile App'
    },
    {
      id: 7,
      name: 'Olumide Adeoye',
      role: 'CTO, Lagos Digital Solutions',
      comment: 'The communication was lacking, and there were some issues with the final product that required a few revisions.',
      rating: 2,
      date: 'Feb 15, 2023',
      project: 'Enterprise Software'
    },
    {
      id: 8,
      name: 'Kemi Adebayo',
      role: 'Director, DreamWeb Services',
      comment: 'Franzor is a skilled professional. The project was delivered on time, and the quality was better than expected.',
      rating: 5,
      date: 'Jan 30, 2023',
      project: 'E-commerce Platform'
    },
    {
      id: 9,
      name: 'Jibola Akinyele',
      role: 'Founder, AkinSoft',
      comment: 'Good quality of work, but we had some misunderstandings about the project’s scope. Clearer communication would help.',
      rating: 3,
      date: 'Jan 20, 2023',
      project: 'Web Development'
    },
    {
      id: 10,
      name: 'Titi Oladimeji',
      role: 'Project Lead, CloudSync Solutions',
      comment: 'Great work overall, but we faced some challenges with integrating the new features into our existing platform.',
      rating: 4,
      date: 'Dec 10, 2022',
      project: 'Cloud Infrastructure'
    },
  ];

  // Responsive values
  const isMobile = useBreakpointValue({ base: true, md: false });
  const avatarSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const textFontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const badgeFontSize = useBreakpointValue({ base: 'xs', md: 'sm' });
  const starSize = useBreakpointValue({ base: 3, md: 4 });

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const testimonialBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Box 
      bg={bgColor} 
      p={{ base: 4, md: 6 }} 
      borderRadius="xl" 
      boxShadow={{ base: 'none', md: 'md' }}
      borderWidth="1px"
      borderColor={borderColor}
      width="100%"
    >
      <Flex justify="space-between" align="center" mb={{ base: 4, md: 6 }}>
        <Heading size={{ base: 'sm', md: 'md' }} color={useColorModeValue('gray.700', 'white')}>
          Client Feedback
        </Heading>
        <Badge 
          colorScheme="green" 
          fontSize={badgeFontSize} 
          py={1} 
          px={2} 
          borderRadius="full"
        >
          5.0 Average
        </Badge>
      </Flex>
      
      {isMobile ? (
        <VStack spacing={{ base: 4, md: 6 }} align="stretch">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box 
                p={{ base: 3, md: 4 }} 
                borderRadius="lg" 
                bg={testimonialBg}
              >
                <Flex justify="space-between" mb={3}>
                  <Flex>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < testimonial.rating ? 'yellow.400' : 'gray.300'}
                        boxSize={starSize}
                        mr={1}
                      />
                    ))}
                  </Flex>
                  <Flex align="center" color="gray.500" fontSize={textFontSize}>
                    <Icon as={FiCalendar} mr={1} boxSize={starSize} />
                    <Text>{testimonial.date}</Text>
                  </Flex>
                </Flex>

                <Badge 
                  colorScheme="blue" 
                  mb={3}
                  fontSize={badgeFontSize}
                >
                  {testimonial.project}
                </Badge>

                <Text mb={4} fontSize={textFontSize} fontStyle="italic">
                  "{testimonial.comment}"
                </Text>

                <Flex align="center">
                  <Avatar 
                    name={testimonial.name} 
                    size={avatarSize} 
                    mr={3} 
                  />
                  <Box>
                    <Text fontWeight="bold" fontSize={textFontSize}>
                      {testimonial.name}
                    </Text>
                    <Text fontSize={textFontSize} color="gray.500">
                      {testimonial.role}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </motion.div>
          ))}
        </VStack>
      ) : (
        <SimpleGrid columns={{ md: 2, lg: 3 }} spacing={{ base: 4, md: 6 }}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box 
                p={{ base: 3, md: 4 }} 
                borderRadius="lg" 
                bg={testimonialBg}
                height="100%"
              >
                <Flex justify="space-between" mb={3}>
                  <Flex>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < testimonial.rating ? 'yellow.400' : 'gray.300'}
                        boxSize={starSize}
                        mr={1}
                      />
                    ))}
                  </Flex>
                  <Flex align="center" color="gray.500" fontSize={textFontSize}>
                    <Icon as={FiCalendar} mr={1} boxSize={starSize} />
                    <Text>{testimonial.date}</Text>
                  </Flex>
                </Flex>

                <Badge 
                  colorScheme="blue" 
                  mb={3}
                  fontSize={badgeFontSize}
                >
                  {testimonial.project}
                </Badge>

                <Text mb={4} fontSize={textFontSize} fontStyle="italic">
                  "{testimonial.comment}"
                </Text>

                <Flex align="center">
                  <Avatar 
                    name={testimonial.name} 
                    size={avatarSize} 
                    mr={3} 
                  />
                  <Box>
                    <Text fontWeight="bold" fontSize={textFontSize}>
                      {testimonial.name}
                    </Text>
                    <Text fontSize={textFontSize} color="gray.500">
                      {testimonial.role}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Feedback;
