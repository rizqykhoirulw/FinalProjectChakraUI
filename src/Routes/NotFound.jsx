import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button, Box } from "@chakra-ui/react";

const NotFound = () => {
    const navigate = useNavigate();
    const handlClick = ()=>{
        navigate("/")
    }
    return (
        <Box h="100vh" bgImage="url('gambar2.jpg')" bgSize="cover">
            <Box display="flex" justifyContent="center" alignItems="center" flexDir="column" gap="20px" bgColor="blackAlpha.800" h="100vh">  
                <Text fontSize="30px" fontWeight="semibold" color="whitesmoke">404 | Not Found</Text>
                <Button data-testid="back" onClick={handlClick} colorScheme='teal' size='lg'>Take me Back</Button>
            </Box>
        </Box>
    );
};

export default NotFound;
