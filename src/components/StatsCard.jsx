

// import React from 'react';
// import { Box, Text, Flex, Icon, useBreakpointValue } from '@chakra-ui/react';
// import { motion } from 'framer-motion';

// const StatsCard = ({ title, value, icon, color }) => {
//   const hoverEffect = useBreakpointValue({ base: 'none', md: 'scale(1.05)' });

//   return (
//     <motion.div
//       whileHover={{ scale: hoverEffect }}
//       transition={{ type: 'spring', stiffness: 300 }}
//     >
//       <Box
//         bg="white"
//         p={6}
//         borderRadius="lg"
//         boxShadow="sm"
//         borderWidth={1}
//         borderColor="gray.200"
//         _hover={{
//           bg: `${color}.50`,
//           borderColor: `${color}.300`,
//           boxShadow: 'lg',
//         }}
//       >
//         <Flex justify="space-between" align="center">
//           <Box>
//             <Text fontSize="sm" color="gray.500">
//               {title}
//             </Text>
//             <Text fontSize="2xl" fontWeight="bold" mt={1}>
//               {value}
//             </Text>
//             <Text fontSize="sm" color="gray.400" mt={2}>
//               Additional Info (Optional)
//             </Text>
//           </Box>
//           <Box
//             bg={`${color}.100`}
//             color={`${color}.600`}
//             p={3}
//             borderRadius="full"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Icon as={icon} boxSize={6} />
//           </Box>
//         </Flex>
//       </Box>
//     </motion.div>
//   );
// };

// export default StatsCard;

import React from 'react';
import { Box, Text, Flex, Icon, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StatsCard = ({ title, value, icon, color }) => {
  // Set the appropriate hover effect based on the screen size
  const hoverEffect = useBreakpointValue({ base: 'none', md: 'scale(1.05)' });

  // Dynamic colors for light/dark mode
  const bgColor = useColorModeValue('white', 'gray.700'); // Background color for the card
  const borderColor = useColorModeValue('gray.200', 'gray.600'); // Border color
  const hoverBg = useColorModeValue(`${color}.50`, `${color}.600`); // Hover background color
  const textColor = useColorModeValue('gray.500', 'gray.400'); // Text color for title and value
  const iconBg = useColorModeValue(`${color}.100`, `${color}.700`); // Icon background color in both modes
  const iconColor = useColorModeValue(`${color}.600`, `${color}.300`); // Icon color

  return (
    <motion.div
      whileHover={{ scale: hoverEffect }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Box
        bg={bgColor}
        p={6}
        borderRadius="lg"
        boxShadow="sm"
        borderWidth={1}
        borderColor={borderColor}
        _hover={{
          bg: hoverBg,
          borderColor: `${color}.300`,
          boxShadow: 'lg',
        }}
      >
        <Flex justify="space-between" align="center">
          <Box>
            <Text fontSize="sm" color={textColor}>
              {title}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" mt={1}>
              {value}
            </Text>
            <Text fontSize="sm" color="gray.400" mt={2}>
              Additional Info (Optional)
            </Text>
          </Box>
          <Box
            bg={iconBg}
            color={iconColor}
            p={3}
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon as={icon} boxSize={6} />
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default StatsCard;
