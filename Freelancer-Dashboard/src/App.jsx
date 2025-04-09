// import React from 'react';
// import { ChakraProvider, Box } from '@chakra-ui/react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './components/pages/Dashboard';
// import Profile from './components/pages/Profile';
// import IncomeSummary from './components/IncomeSummary'; // Updated import
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Projects from './components/Projects';
// import Feedback from './components/Feedback';
// import theme from './theme';

// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Router>
//         <Box minH="100vh" bg="gray.50">
//           <Header />
//           <Sidebar />
//           <Box ml={{ base: 0, md: '250px' }} p={6} pt={{ base: '20', md: '6' }}>
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/income" element={<IncomeSummary />} /> {/* Updated route path to be more consistent */}
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/feedback" element={<Feedback />} />
//             </Routes>
//           </Box>
//         </Box>
//       </Router>
//     </ChakraProvider>
//   );
// }

// export default App;

import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile';
import IncomeSummary from './components/IncomeSummary';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import Feedback from './components/Feedback';

function App() {
  // Auto-adjust background color based on light/dark mode
  const bg = useColorModeValue('gray.50', 'gray.900');

  return (
    <Router>
      <Box minH="100vh" bg={bg}>
        <Header />
        <Sidebar />
        <Box ml={{ base: 0, md: '250px' }} p={6} pt={{ base: '20', md: '6' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/income" element={<IncomeSummary />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
