import React from "react";
import { Box, Text } from "@chakra-ui/react";


const Footer = () => {
    return (
        <Box className="footer" display="flex" justifyContent="center" p="20px" gap="10px" bgColor="grey" color="whiteAlpha.900" >
            <Text className="studentName" fontSize="20px" fontWeight="semibold">Rizqy Khoirul Waritsin</Text>
            <Text fontSize="20px" fontWeight="semibold"> - </Text>
            <Text className="studentId" fontSize="20px" fontWeight="semibold">FE5563292</Text>
        </Box>
    );
};

export default Footer;
