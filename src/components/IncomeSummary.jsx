import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  Heading, 
  SimpleGrid, 
  Badge, 
  Divider,
  useColorModeValue,
  Progress,
  Tooltip,
  useBreakpointValue,
  SlideFade,
  ScaleFade,
  Button,
  VStack,
  HStack,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';
import { 
  FiDollarSign, 
  FiTrendingUp, 
  FiTrendingDown, 
  FiUsers,
  FiInfo,
  FiBarChart2,
  FiPieChart,
  FiGrid,
  FiCalendar
} from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, LineChart, Line, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

// Wrap components with motion for animations
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const IncomeSummary = () => {
  // State for animations
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  
  // Load animations after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Color mode values
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');
  const subtleText = useColorModeValue('gray.600', 'gray.400');
  const barColor = useColorModeValue('#4299E1', '#3182CE');
  const currentBarColor = useColorModeValue('#3182CE', '#63B3ED');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  // Responsive settings
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true, lg: false });
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 4 });
  const chartsDirection = useBreakpointValue({ base: "column", lg: "row" });

  // Income data
  const incomeData = [
    { month: 'Jan', income: 4200, color: barColor },
    { month: 'Feb', income: 3800, color: barColor },
    { month: 'Mar', income: 5500, color: barColor },
    { month: 'Apr', income: 4800, color: barColor },
    { month: 'May', income: 5200, color: barColor },
    { month: 'Jun', income: 6000, color: currentBarColor }, // Highlight current month
  ];

  // Calculations
  const lastYearIncome = 25000;
  const currentYearIncome = incomeData.reduce((sum, month) => sum + month.income, 0);
  const currentMonth = incomeData[incomeData.length - 1];
  const previousMonth = incomeData[incomeData.length - 2];
  const percentageChange = ((currentMonth.income - previousMonth.income) / previousMonth.income) * 100;
  
  const yearlySummary = {
    total: currentYearIncome,
    average: currentYearIncome / incomeData.length,
    highest: Math.max(...incomeData.map(month => month.income)),
    target: 30000,
    yearOnYearChange: ((currentYearIncome - lastYearIncome) / lastYearIncome) * 100
  };
  
  const progress = (yearlySummary.total / yearlySummary.target) * 100;

  // Pie chart data
  const pieData = [
    { name: 'This Year', value: currentYearIncome },
    { name: 'Last Year', value: lastYearIncome }
  ];
  const COLORS = [useColorModeValue('#4299E1', '#63B3ED'), useColorModeValue('#48BB78', '#68D391')];

  // Team data
  const teamMembers = [
    { name: 'Oluwaseun Adebayo', role: 'Sales Director', contribution: 38, avatar: 'A' },
    { name: 'Chioma Eze', role: 'Marketing Manager', contribution: 27, avatar: 'C' },
    { name: 'Emeka Okafor', role: 'Account Executive', contribution: 20, avatar: 'E' },
    { name: 'Ngozi Onyeka', role: 'Client Relations', contribution: 15, avatar: 'N' }
  ];

  // Line chart data for weekly view
  const weeklyData = [
    { day: 'Mon', income: 980 },
    { day: 'Tue', income: 1200 },
    { day: 'Wed', income: 850 },
    { day: 'Thu', income: 1100 },
    { day: 'Fri', income: 1300 },
    { day: 'Sat', income: 500 },
    { day: 'Sun', income: 200 },
  ];

  // Helper components
  const TrendIndicator = ({ value }) => (
    <Flex align="center" color={value >= 0 ? 'green.500' : 'red.500'}>
      {value >= 0 ? <FiTrendingUp /> : <FiTrendingDown />}
      <Text ml={1} fontSize="sm">
        {Math.abs(value).toFixed(1)}%
      </Text>
    </Flex>
  );

  const StatCard = ({ label, value, secondaryValue, tooltip, delay = 0 }) => (
    <MotionBox 
      position="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      _hover={{ boxShadow: "md", borderColor: "blue.300", bg: hoverBg }}
    >
      {tooltip && (
        <Tooltip label={tooltip} placement="top" hasArrow>
          <Box position="absolute" top={2} right={2}>
            <FiInfo size={14} color={subtleText} />
          </Box>
        </Tooltip>
      )}
      <Text fontSize="sm" color={subtleText}>{label}</Text>
      <Text fontWeight="bold" fontSize="lg">{value}</Text>
      {secondaryValue && (
        <Text fontSize="xs" color={subtleText}>{secondaryValue}</Text>
      )}
    </MotionBox>
  );

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box bg={cardBg} p={3} borderRadius="md" boxShadow="lg" borderWidth="1px" borderColor={borderColor}>
          <Text fontWeight="bold">{label}</Text>
          <Text>${payload[0].value.toLocaleString()}</Text>
        </Box>
      );
    }
    return null;
  };

  // Tab content components
  const DailyView = () => (
    <Box>
      <Text mb={4} fontSize="sm" color={subtleText}>Daily income breakdown for the current week</Text>
      <Box h="250px">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <RechartsTooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke={barColor} 
              strokeWidth={2}
              dot={{ fill: barColor, strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );

  const MonthlyView = () => (
    <Box>
      <Text mb={4} fontSize="sm" color={subtleText}>Monthly income trends for the last 6 months</Text>
      <Box h="250px">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={incomeData}>
            <XAxis dataKey="month" />
            <YAxis />
            <RechartsTooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="income" 
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            >
              {incomeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );

  const YearlyView = () => (
    <Box>
      <Text mb={4} fontSize="sm" color={subtleText}>Year-over-year comparison</Text>
      <Flex direction={chartsDirection} align="center">
        <Box w="full" h="250px">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <RechartsTooltip formatter={(value) => [`$${value.toLocaleString()}`, "Income"]} />
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <SimpleGrid columns={2} spacing={4} mt={{ base: 4, lg: 0 }} ml={{ lg: 6 }}>
          <StatCard 
            label="This Year" 
            value={`$${currentYearIncome.toLocaleString()}`} 
            tooltip="Total income for current year"
          />
          <StatCard 
            label="Last Year" 
            value={`$${lastYearIncome.toLocaleString()}`} 
            tooltip="Total income for previous year"
          />
          <Box gridColumn="span 2">
            <Text fontSize="sm" color={subtleText}>Year Growth</Text>
            <TrendIndicator value={yearlySummary.yearOnYearChange} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );

  const TeamView = () => (
    <Box>
      <Text mb={6} fontSize="sm" color={subtleText}>
        Our team has achieved {progress.toFixed(0)}% of annual target with projected forecast to reach{' '}
        {yearlySummary.yearOnYearChange > 0 ? 'above' : 'near'} target by year-end.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
        {teamMembers.map((member, idx) => (
          <MotionBox 
            key={idx} 
            p={4} 
            borderWidth="1px" 
            borderRadius="lg" 
            borderColor={borderColor}
            _hover={{ boxShadow: "md", borderColor: "blue.300", transform: "translateY(-4px)" }}
            transition="all 0.3s"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
          >
            <Flex align="center" mb={3}>
              <Flex
                align="center"
                justify="center"
                w={8}
                h={8}
                borderRadius="full"
                bg={`${COLORS[idx % COLORS.length]}20`}
                color={COLORS[idx % COLORS.length]}
                fontWeight="bold"
                mr={3}
              >
                {member.avatar}
              </Flex>
              <Box>
                <Text fontWeight="medium">{member.name}</Text>
                <Text fontSize="sm" color={subtleText}>{member.role}</Text>
              </Box>
            </Flex>
            <Progress 
              value={member.contribution} 
              size="sm" 
              colorScheme="blue" 
              borderRadius="full"
              bg="gray.100"
            />
            <Text fontSize="sm" textAlign="right" mt={1}>
              {member.contribution}% contribution
            </Text>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );

  return (
    <Box p={{ base: 2, md: 4 }}>
      {/* Header with animations */}
      <MotionFlex 
        justify="space-between" 
        align="center" 
        mb={6}
        initial={{ opacity: 0, y: -20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Heading size={{ base: "md", md: "lg" }} color={textColor}>Income Dashboard</Heading>
        <Flex display={{ base: "none", md: "flex" }}>
          <Badge colorScheme="blue" mr={2}>Monthly</Badge>
          <Badge colorScheme="gray">Yearly</Badge>
        </Flex>
      </MotionFlex>

      {/* Current Month Summary with animations */}
      <ScaleFade in={isLoaded} initialScale={0.9}>
        <Box 
          bg={cardBg} 
          p={{ base: 4, md: 6 }} 
          borderRadius="xl" 
          boxShadow="sm" 
          borderWidth="1px" 
          borderColor={borderColor}
          mb={6}
        >
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between">
            <Box mb={{ base: 6, md: 0 }}>
              <Text fontSize="sm" color={subtleText}>Current Month Earnings</Text>
              <Flex align="center" mt={2}>
                <MotionBox 
                  p={2} 
                  borderRadius="full" 
                  bg="green.100" 
                  color="green.500" 
                  mr={3}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isLoaded ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <FiDollarSign size={24} />
                </MotionBox>
                <Heading size="xl">${currentMonth.income.toLocaleString()}</Heading>
              </Flex>
              <TrendIndicator value={percentageChange} />
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={{ base: 4, md: 6 }}>
              <StatCard 
                label="Yearly Total" 
                value={`$${yearlySummary.total.toLocaleString()}`}
                tooltip="Total income for the current year"
                delay={0.2}
              />
              <StatCard 
                label="Target" 
                value={`$${yearlySummary.target.toLocaleString()}`}
                tooltip="Annual income target"
                delay={0.3}
              />
              <StatCard 
                label="Progress" 
                value={`${progress.toFixed(0)}%`} 
                secondaryValue={`$${Math.abs(yearlySummary.total - yearlySummary.target).toLocaleString()} ${yearlySummary.total >= yearlySummary.target ? 'above' : 'below'} target`}
                tooltip="Progress toward annual target"
                delay={0.4}
              />
            </SimpleGrid>
          </Flex>
        </Box>
      </ScaleFade>

      {/* Responsive Tabs for different views */}
      <SlideFade in={isLoaded} offsetY="20px">
        <Box 
          bg={cardBg} 
          borderRadius="xl" 
          boxShadow="sm" 
          borderWidth="1px" 
          borderColor={borderColor}
          mb={6}
        >
          <Tabs isFitted variant="enclosed" onChange={(index) => setSelectedTab(index)}>
            <TabList>
              <Tab>
                <HStack spacing={2}>
                  <Icon as={FiCalendar} />
                  <Text display={{ base: "none", sm: "inline" }}>Daily</Text>
                </HStack>
              </Tab>
              <Tab>
                <HStack spacing={2}>
                  <Icon as={FiBarChart2} />
                  <Text display={{ base: "none", sm: "inline" }}>Monthly</Text>
                </HStack>
              </Tab>
              <Tab>
                <HStack spacing={2}>
                  <Icon as={FiPieChart} />
                  <Text display={{ base: "none", sm: "inline" }}>Yearly</Text>
                </HStack>
              </Tab>
              <Tab>
                <HStack spacing={2}>
                  <Icon as={FiUsers} />
                  <Text display={{ base: "none", sm: "inline" }}>Team</Text>
                </HStack>
              </Tab>
            </TabList>
            
            <TabPanels p={4}>
              <TabPanel>
                <ScaleFade in={selectedTab === 0} initialScale={0.95}>
                  <DailyView />
                </ScaleFade>
              </TabPanel>
              <TabPanel>
                <ScaleFade in={selectedTab === 1} initialScale={0.95}>
                  <MonthlyView />
                </ScaleFade>
              </TabPanel>
              <TabPanel>
                <ScaleFade in={selectedTab === 2} initialScale={0.95}>
                  <YearlyView />
                </ScaleFade>
              </TabPanel>
              <TabPanel>
                <ScaleFade in={selectedTab === 3} initialScale={0.95}>
                  <TeamView />
                </ScaleFade>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </SlideFade>

      {/* Mobile-specific Quick Stats Section */}
      {isMobile && (
        <SlideFade in={isLoaded} offsetY="20px">
          <Box 
            bg={cardBg} 
            p={4} 
            borderRadius="xl" 
            boxShadow="sm" 
            borderWidth="1px" 
            borderColor={borderColor}
            mb={6}
          >
            <Text fontSize="md" fontWeight="medium" mb={3}>Quick Stats</Text>
            <VStack spacing={3} align="stretch">
              <Flex justify="space-between">
                <Text fontSize="sm" color={subtleText}>Monthly Average</Text>
                <Text fontWeight="medium">${yearlySummary.average.toFixed(0)}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontSize="sm" color={subtleText}>Highest Month</Text>
                <Text fontWeight="medium">${yearlySummary.highest}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontSize="sm" color={subtleText}>YoY Growth</Text>
                <TrendIndicator value={yearlySummary.yearOnYearChange} />
              </Flex>
            </VStack>
          </Box>
        </SlideFade>
      )}
    </Box>
  );
};

export default IncomeSummary;