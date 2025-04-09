import React, { useState } from 'react';
import {
  Flex,
  Heading,
  Spacer,
  Avatar,
  Box,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Badge,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
  Button,
  Menu, // Import Menu here
  MenuButton, // Import MenuButton here
  MenuList, // Import MenuList here
  MenuItem, // Import MenuItem here
} from '@chakra-ui/react';
import { FiBell, FiSearch, FiMenu, FiChevronDown, FiSettings, FiLogOut, FiUser, FiMessageSquare, FiSun, FiMoon, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Create motion.div using motion.create
const motionDiv = motion.create(motion.div);

const Header = ({ onSidebarToggle }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const { colorMode, toggleColorMode } = useColorMode();

  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageCount, setMessageCount] = useState(3);
  const [notificationCount, setNotificationCount] = useState(5);

  const handleSearchToggle = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <Flex
      position="sticky"
      top="0"
      zIndex="sticky"
      align="center"
      p={4}
      bg={bgColor}
      boxShadow="md"
      borderBottomWidth="1px"
      borderColor={borderColor}
      h="80px"
      w="100%"
    >
      {/* Sidebar toggle button (mobile only) */}
      <IconButton
        display={{ base: 'inline-flex', md: 'none' }}
        icon={<FiMenu />}
        aria-label="Toggle Sidebar"
        onClick={onSidebarToggle}
        variant="ghost"
        mr={2}
      />

      {/* App name (hidden on small screens) */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Heading size="sm" color={textColor} fontWeight="bold">
          Franzor
        </Heading>
      </Box>

      {/* Search bar (toggle visibility on mobile and desktop) */}
      <Box ml={10} flex="1" maxW={{ base: '200px', md: '300px' }} position="relative">
        <motionDiv
          initial={{ width: '0' }}
          animate={{ width: isSearchActive ? '100%' : '0' }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          {isSearchActive ? (
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FiSearch color="gray.300" />
              </InputLeftElement>
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                variant="filled"
                size="sm"
                rounded="full"
                _placeholder={{ color: 'gray.500' }}
              />
              <InputRightElement>
                <Button
                  variant="link"
                  onClick={() => setSearchQuery('')}
                  size="sm"
                  _hover={{ bg: 'transparent' }}
                >
                  <FiX color="gray.500" />
                </Button>
              </InputRightElement>
            </InputGroup>
          ) : (
            <IconButton
              icon={<FiSearch />}
              aria-label="Search"
              variant="ghost"
              onClick={handleSearchToggle}
              _hover={{ bg: 'transparent' }}
            />
          )}
        </motionDiv>
      </Box>

      <Spacer />

      {/* Right-side icons */}
      <Flex align="center" gap={3}>
        {/* Messages */}
        <Box position="relative" cursor="pointer" _hover={{ color: 'blue.500' }}>
          <FiMessageSquare size={20} />
          {messageCount > 0 && (
            <Badge
              position="absolute"
              top="-2px"
              right="-2px"
              colorScheme="green"
              fontSize="xs"
              borderRadius="full"
            >
              {messageCount}
            </Badge>
          )}
        </Box>

        {/* Notifications */}
        <Box position="relative" cursor="pointer" _hover={{ color: 'red.500' }}>
          <FiBell size={20} />
          {notificationCount > 0 && (
            <Badge
              position="absolute"
              top="-2px"
              right="-2px"
              colorScheme="red"
              fontSize="xs"
              borderRadius="full"
            >
              {notificationCount}
            </Badge>
          )}
        </Box>

        {/* Dark mode toggle */}
        <IconButton
          icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
          aria-label="Toggle Dark Mode"
          size="sm"
          variant="ghost"
          _hover={{ bg: colorMode === 'light' ? 'gray.100' : 'gray.700' }}
        />

        {/* img & Menu */}
        <Menu>
          <MenuButton>
            <Flex align="center" gap={2} _hover={{ cursor: 'pointer' }}>
              <Avatar name="Franzor" src="/img/franzor22.jpg" size="sm" />
              {/* Show text only on md and above */}
              <Box
                ml={2}
                display={{ base: 'none', md: 'block' }}
                textAlign="left"
                _hover={{ color: 'blue.500' }}
                transition="color 0.3s"
              >
                <Text fontWeight="medium" fontSize="sm" color={textColor}>
                  Franzor
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Developer
                </Text>
              </Box>
              <Box ml={2} display={{ base: 'none', md: 'block' }}>
                <FiChevronDown />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList zIndex="popover">
            <MenuItem icon={<FiUser />}>My Profile</MenuItem>
            <MenuItem icon={<FiSettings />}>Settings</MenuItem>
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
