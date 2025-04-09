// import React from 'react';
// import { 
//   Box, 
//   Heading, 
//   Table, 
//   Thead, 
//   Tbody, 
//   Tr, 
//   Th, 
//   Td, 
//   Badge, 
//   Flex,
//   Button,
//   Text,
//   useColorModeValue,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   IconButton,
//   Progress
// } from '@chakra-ui/react';
// import { FiMoreVertical, FiEdit, FiEye, FiTrash2, FiChevronRight, FiFilter } from 'react-icons/fi';

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       name: 'E-commerce Website',
//       client: 'ShopMaster',
//       status: 'Completed',
//       deadline: '15 Jan 2023',
//       amount: '$4,500',
//       progress: 100
//     },
//     {
//       id: 2,
//       name: 'Portfolio Design',
//       client: 'Creative Agency',
//       status: 'In Progress',
//       deadline: '28 Feb 2023',
//       amount: '$2,800',
//       progress: 75
//     },
//     {
//       id: 3,
//       name: 'Mobile App Development',
//       client: 'TechStart',
//       status: 'Pending',
//       deadline: '10 Mar 2023',
//       amount: '$6,200',
//       progress: 30
//     },
//     {
//       id: 4,
//       name: 'Dashboard UI',
//       client: 'DataSystems',
//       status: 'Completed',
//       deadline: '05 Jan 2023',
//       amount: '$3,500',
//       progress: 100
//     },
//     {
//       id: 5,
//       name: 'Marketing Website',
//       client: 'GrowthHackers',
//       status: 'In Progress',
//       deadline: '22 Mar 2023',
//       amount: '$5,100',
//       progress: 60
//     },
//   ];

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Completed':
//         return 'green';
//       case 'In Progress':
//         return 'blue';
//       case 'Pending':
//         return 'orange';
//       default:
//         return 'gray';
//     }
//   };
  
//   const getProgressColor = (progress) => {
//     if (progress >= 100) return 'green';
//     if (progress >= 70) return 'blue';
//     if (progress >= 40) return 'yellow';
//     return 'red';
//   };

//   const bgColor = useColorModeValue('white', 'gray.800');
//   const borderColor = useColorModeValue('gray.200', 'gray.700');

//   return (
//     <Box 
//       bg={bgColor} 
//       p={6} 
//       borderRadius="xl" 
//       boxShadow="md"
//       borderWidth="1px"
//       borderColor={borderColor}
//     >
//       <Flex justify="space-between" align="center" mb={6}>
//         <Heading size="md" color={useColorModeValue('gray.700', 'white')}>Recent Projects</Heading>
//         <Flex gap={2}>
//           <Button size="sm" leftIcon={<FiFilter />} variant="outline">
//             Filter
//           </Button>
//           <Button size="sm" colorScheme="brand" leftIcon={<FiChevronRight />}>
//             View All
//           </Button>
//         </Flex>
//       </Flex>
      
//       <Box overflowX="auto">
//         <Table variant="simple">
//           <Thead>
//             <Tr>
//               <Th>Project</Th>
//               <Th>Client</Th>
//               <Th>Status</Th>
//               <Th>Progress</Th>
//               <Th>Deadline</Th>
//               <Th isNumeric>Amount</Th>
//               <Th width="50px"></Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {projects.map((project) => (
//               <Tr key={project.id}>
//                 <Td fontWeight="medium">{project.name}</Td>
//                 <Td>{project.client}</Td>
//                 <Td>
//                   <Badge colorScheme={getStatusColor(project.status)} px={2} py={1} borderRadius="full">
//                     {project.status}
//                   </Badge>
//                 </Td>
//                 <Td>
//                   <Flex direction="column" gap={1}>
//                     <Progress 
//                       value={project.progress} 
//                       size="sm" 
//                       colorScheme={getProgressColor(project.progress)}
//                       borderRadius="full"
//                     />
//                     <Text fontSize="xs" textAlign="right">{project.progress}%</Text>
//                   </Flex>
//                 </Td>
//                 <Td>{project.deadline}</Td>
//                 <Td isNumeric fontWeight="semibold">{project.amount}</Td>
//                 <Td>
//                   <Menu>
//                     <MenuButton
//                       as={IconButton}
//                       icon={<FiMoreVertical />}
//                       variant="ghost"
//                       size="sm"
//                       aria-label="Options"
//                     />
//                     <MenuList>
//                       <MenuItem icon={<FiEye />}>View Details</MenuItem>
//                       <MenuItem icon={<FiEdit />}>Edit Project</MenuItem>
//                       <MenuItem icon={<FiTrash2 />} color="red.500">Delete</MenuItem>
//                     </MenuList>
//                   </Menu>
//                 </Td>
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </Box>
//     </Box>
//   );
// };

// export default Projects;

import React from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Flex,
  Button,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Progress,
  Stack,
  Collapse,
  useDisclosure
} from '@chakra-ui/react';
import {
  FiMoreVertical,
  FiEdit,
  FiEye,
  FiTrash2,
  FiChevronRight,
  FiFilter
} from 'react-icons/fi';

const Projects = () => {
  const { isOpen, onToggle } = useDisclosure();

  const projects = [
    { id: 1, name: 'E-commerce Website', client: 'ShopMaster', status: 'Completed', deadline: '15 Jan 2023', amount: '$4,500', progress: 100 },
    { id: 2, name: 'Portfolio Design', client: 'Creative Agency', status: 'In Progress', deadline: '28 Feb 2023', amount: '$2,800', progress: 75 },
    { id: 3, name: 'Mobile App Development', client: 'TechStart', status: 'Pending', deadline: '10 Mar 2023', amount: '$6,200', progress: 30 },
    { id: 4, name: 'Dashboard UI', client: 'DataSystems', status: 'Completed', deadline: '05 Jan 2023', amount: '$3,500', progress: 100 },
    { id: 5, name: 'Marketing Website', client: 'GrowthHackers', status: 'In Progress', deadline: '22 Mar 2023', amount: '$5,100', progress: 60 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'green';
      case 'In Progress': return 'blue';
      case 'Pending': return 'orange';
      default: return 'gray';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 100) return 'green';
    if (progress >= 70) return 'blue';
    if (progress >= 40) return 'yellow';
    return 'red';
  };

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bgColor} p={4} borderRadius="xl" boxShadow="md" borderWidth="1px" borderColor={borderColor}>
      <Flex justify="space-between" align="center" mb={4} wrap="wrap" gap={2}>
        <Heading size="md" color={useColorModeValue('gray.700', 'white')}>Recent Projects</Heading>
        <Flex gap={2}>
          <Button size="sm" leftIcon={<FiFilter />} variant="outline" onClick={onToggle}>
            Filter
          </Button>
          <Button size="sm" colorScheme="blue" leftIcon={<FiChevronRight />}>
            View All
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box mb={4} p={3} bg={useColorModeValue('gray.50', 'gray.700')} borderRadius="md">
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.300')}>Filter options go here.</Text>
        </Box>
      </Collapse>

      <Box display={{ base: 'none', md: 'block' }} overflowX="auto">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Project</Th>
              <Th>Client</Th>
              <Th>Status</Th>
              <Th>Progress</Th>
              <Th>Deadline</Th>
              <Th isNumeric>Amount</Th>
              <Th width="50px"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.map((project) => (
              <Tr key={project.id}>
                <Td fontWeight="medium">{project.name}</Td>
                <Td>{project.client}</Td>
                <Td>
                  <Badge colorScheme={getStatusColor(project.status)} px={2} py={1} borderRadius="full">
                    {project.status}
                  </Badge>
                </Td>
                <Td>
                  <Flex direction="column" gap={1}>
                    <Progress value={project.progress} size="sm" colorScheme={getProgressColor(project.progress)} borderRadius="full" />
                    <Text fontSize="xs" textAlign="right">{project.progress}%</Text>
                  </Flex>
                </Td>
                <Td>{project.deadline}</Td>
                <Td isNumeric fontWeight="semibold">{project.amount}</Td>
                <Td>
                  <Menu>
                    <MenuButton as={IconButton} icon={<FiMoreVertical />} variant="ghost" size="sm" aria-label="Options" />
                    <MenuList>
                      <MenuItem icon={<FiEye />}>View Details</MenuItem>
                      <MenuItem icon={<FiEdit />}>Edit Project</MenuItem>
                      <MenuItem icon={<FiTrash2 />} color="red.500">Delete</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Mobile / Tablet View */}
      <Stack display={{ base: 'flex', md: 'none' }} spacing={4}>
        {projects.map(project => (
          <Box key={project.id} p={4} borderRadius="lg" borderWidth="1px" borderColor={borderColor} bg={bgColor} boxShadow="sm" transition="0.3s ease" _hover={{ boxShadow: 'md' }}>
            <Flex justify="space-between" align="center">
              <Heading size="sm">{project.name}</Heading>
              <Menu>
                <MenuButton as={IconButton} icon={<FiMoreVertical />} variant="ghost" size="sm" aria-label="Options" />
                <MenuList>
                  <MenuItem icon={<FiEye />}>View</MenuItem>
                  <MenuItem icon={<FiEdit />}>Edit</MenuItem>
                  <MenuItem icon={<FiTrash2 />} color="red.500">Delete</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Text fontSize="sm" mt={1} color="gray.500">Client: <strong>{project.client}</strong></Text>
            <Badge colorScheme={getStatusColor(project.status)} mt={2}>{project.status}</Badge>
            <Progress mt={3} value={project.progress} size="sm" colorScheme={getProgressColor(project.progress)} borderRadius="full" />
            <Flex justify="space-between" mt={2} fontSize="sm">
              <Text>{project.deadline}</Text>
              <Text fontWeight="semibold">{project.amount}</Text>
            </Flex>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Projects;
