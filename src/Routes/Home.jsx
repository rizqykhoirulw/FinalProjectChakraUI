import React from "react";
import { Link } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <Box h="100vh" bgImage="url('gambar1.jpg')" bgSize="cover">
            <Box display="flex" justifyContent="center" alignItems="center" h="90.7vh" flexDir="column" gap="40px" bgColor="blackAlpha.800">
                <Box display="flex" justifyContent="center" alignItems="center" flexDir="column">
                    <Text fontSize="32px" fontWeight="bold" color="whitesmoke">Studi Independen Kampus Merdeka</Text>
                    <Text fontSize="20px" fontWeight="semibold" color="whitesmoke">by Ruang Guru</Text>
                </Box>
                <Link to={`/student`} >
                    <Button data-testid="student-btn" colorScheme='teal' size='lg'>All Student</Button>
                </Link>
            </Box>
            <Footer />
        </Box>
        
    ); 
};

export default Home;
