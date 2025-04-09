import React, { useState } from 'react';
import { 
  Box, 
  Flex, 
  Grid, 
  Heading, 
  SimpleGrid, 
  Container,
  useColorModeValue,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack
} from '@chakra-ui/react';
import { FiDollarSign, FiBriefcase, FiStar, FiUsers, FiMenu } from 'react-icons/fi';
import Header from '../Header';
import Sidebar from '../Sidebar';
import StatsCard from '../StatsCard';
import Projects from '../Projects';
import IncomeSummary from '../IncomeSummary';

const Dashboard = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Responsive sidebar behavior
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const sidebarWidth = useBreakpointValue({ base: 'full', md: 'px', lg: 'px' });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box display="flex" minH="100vh" bg={bgColor} overflow="hidden">
      {/* Mobile Drawer - Sidebar shown in Drawer on mobile */}
      {isMobile && (
        <Drawer
          isOpen={isSidebarOpen}
          placement="left"
          onClose={toggleSidebar}
          size="full"
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Sidebar isOpen={true} onClose={toggleSidebar} />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
      
      {/* Main Content */}
      <Box 
        flex={1} 
        p={{ base: 4, md: 6 }}
        transition="margin-left 0.3s"
        overflowX="hidden" // To prevent overflow
        ml={{ base: 0, lg: sidebarWidth }} // Only move the content on large screens
      >
        {/* Mobile Header with Menu Button */}
        {isMobile && (
          <Flex justify="space-between" align="center" mb={6}>
            <Heading size="lg" color={useColorModeValue('gray.700', 'white')}>
              Franzor
            </Heading>
            <Box w="0px" /> {/* Spacer for alignment */}
          </Flex>
        )}
        
        {/* Desktop Header */}
        {!isMobile && (
          <Flex justify="space-between" align="center" mb={6}>
            <Heading size="lg" color={useColorModeValue('gray.700', 'white')}>
              Franzor
            </Heading>
          </Flex>
        )}
        
        <Container maxW="container.xl" px={0}>
          {/* Stats Cards - adjust columns for mobile */}
          <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 2, lg: 4 }} 
            spacing={{ base: 4, md: 6 }} 
            mb={8}
          >
            <StatsCard
              title="Monthly Income"
              value="$24,500"
              icon={FiDollarSign}
              color="green"
              change="+12.5%"
              trend="up"
            />
            <StatsCard
              title="Projects Completed"
              value="48"
              icon={FiBriefcase}
              color="blue"
              change="+3"
              trend="up"
            />
            <StatsCard
              title="Client Rating"
              value="4.9"
              icon={FiStar}
              color="yellow"
              change="+0.2"
              trend="up"
            />
            <StatsCard
              title="Active Clients"
              value="12"
              icon={FiUsers}
              color="purple"
              change="+2"
              trend="up"
            />
          </SimpleGrid>

          <Box mb={8}>
            <IncomeSummary />
          </Box>

          <Grid 
            templateColumns={{ 
              base: '1fr', 
              md: '1fr', 
              lg: '2fr 1fr' 
            }} 
            gap={{ base: 4, md: 6 }}
          >
            <Box>
              <Projects />
            </Box>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
