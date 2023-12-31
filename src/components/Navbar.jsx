import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Button, Text, Link, } from "@chakra-ui/react"
const NavBar = () => {
    return (
        <Box display="flex" justifyContent="space-between" mb="20px" p="20px" bgColor="grey">
            <Link as={ReactRouterLink} to={`/`} data-testid="home-page">
                <Text fontSize="22px" fontWeight="semibold" color="white">Student Portal</Text>
            </Link>
            <Box display="flex" justifyContent="space-around" w="25%">
                <Link as={ReactRouterLink} to={`/student`}>
                    <Button data-testid="student-page" bg="transparent" color="white" _hover={{ backgroundColor: "transparent", color: "whiteAlpha.500" }}>All Student</Button>
                </Link>
                <Link as={ReactRouterLink} to={`/add`}>
                    <Button data-testid="add-page" bg="transparent" color="white" _hover={{ backgroundColor: "transparent", color: "whiteAlpha.500" }}>Add Student</Button>
                </Link>
            </Box>
            
            
        </Box>
        
        
    );
};

export default NavBar;
