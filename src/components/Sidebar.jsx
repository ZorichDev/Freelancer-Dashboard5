import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Text,
  Icon,
  Link,
  IconButton,
  Avatar,
  HStack,
  Badge,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure
} from '@chakra-ui/react';
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiDollarSign,
  FiMessageSquare,
  FiMenu
} from 'react-icons/fi';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    { icon: FiHome, label: 'Dashboard', path: '/', active: true },
    { icon: FiUser, label: 'Profile', path: '/profile' },
    { icon: FiBriefcase, label: 'Projects', path: '/projects', badge: '3' },
    { icon: FiDollarSign, label: 'Income', path: '/income' },
    { icon: FiMessageSquare, label: 'Feedback', path: '/feedback', badge: '5' },
  ];

  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('blue.50', 'blue.900');
  const activeBg = useColorModeValue('blue.100', 'blue.800');
  const activeColor = useColorModeValue('blue.600', 'blue.200');

  const renderNavItems = () => (
    <VStack align="stretch" spacing={1} mt={2}>
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          w="full"
          p={5}
          borderRadius="lg"
          bg={item.active ? activeBg : 'transparent'}
          color={item.active ? activeColor : 'inherit'}
          _hover={{
            bg: hoverBg,
            transform: 'translateX(3px)',
            transition: 'all 0.2s'
          }}
          transition="all 0.2s"
        >
          <Flex align="center" justify="space-between">
            <HStack spacing={3}>
              <Icon as={item.icon} boxSize={5} />
              <Text fontWeight={item.active ? 'semibold' : 'medium'}>
                {item.label}
              </Text>
            </HStack>
            {item.badge && (
              <Badge colorScheme="blue" borderRadius="full" px={2}>
                {item.badge}
              </Badge>
            )}
          </Flex>
        </Link>
      ))}
    </VStack>
  );

  return (
    <>
      {/* Mobile Hamburger */}
      <IconButton
        aria-label="Open menu"
        icon={<FiMenu />}
        onClick={onOpen}
        display={{ base: 'flex', md: 'none' }}
        position="fixed"
        top={4}
        left={4}
        zIndex="overlay"
        colorScheme="blue"
      />

      {/* Desktop Sidebar */}
      <Box
        as="aside"
        position="fixed"
        w={{ base: '0', md: '280px' }}
        h="100vh"
        pt="80px"
        bg={bg}
        borderRight="1px"
        borderRightColor={borderColor}
        boxShadow="lg"
        px={4}
        display={{ base: 'none', md: 'block' }}
      >
        <Flex align="center" mb={4}>
          <Avatar size="sm" src="./img/franzor22.jpg" name="Franzor" mr={3} />
          <Box>
            <Text fontWeight="medium">Franzor</Text>
            <Text fontSize="xs" color="gray.500">
              francis1chinazor@gmail.com
            </Text>
          </Box>
        </Flex>
        {renderNavItems()}
        <Box position="absolute" bottom="0" left="0" right="0" p={4}>
          <Text fontSize="xs" color="gray.500" textAlign="center">
            © 2025 YourApp. All rights reserved.
          </Text>
        </Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton />
          <DrawerHeader>Franzor</DrawerHeader>
          <DrawerBody>
            <Flex align="center" mb={4}>
              <Avatar size="sm" src="./img/franzor22.jpg" name="Franzor" mr={3} />
              <Box>
                <Text fontWeight="medium">Franzor</Text>
                <Text fontSize="xs" color="gray.500">
                  francis1chinazor@gmail.com
                </Text>
              </Box>
            </Flex>
            {renderNavItems()}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
