import React from "react";
import { useState } from "react";
import NavBar from "../components/Navbar.jsx";
import { FormControl, FormLabel, Input, Button, Select, Box, Text } from "@chakra-ui/react";
import Footer from "../components/Footer.jsx";

const AddStudent = () => {
    const [dataServer, setDataServer] = useState({
        id: '',
        fullname: '',
        profilePicture: '',
        address: '',
        birthDate: '',
        gender: '',
        phoneNumber: '',
        faculty: '',
        programStudy: ''
    })

    const controlChange = (e) => {
        const { name, value } = e.target;
        setDataServer((prevDataServer) => ({
            ...prevDataServer,
            [name]: value,
            faculty: pilihFakultas(value)
        }));
        
    };

    const pilihFakultas = (programStudy) => {
        if (
          programStudy === "Ekonomi" ||
          programStudy === "Manajemen" ||
          programStudy === "Akuntansi"
        ) {
          return "Fakultas Ekonomi";
        } else if (
          programStudy === "Administrasi Publik" ||
          programStudy === "Administrasi Bisnis" ||
          programStudy === "Hubungan Internasional"
        ) {
          return "Fakultas Ilmu Sosial dan Politik";
        } else if (programStudy === "Teknik Sipil" || programStudy === "Arsitektur") {
          return "Fakultas Teknik";
        } else if (
          programStudy === "Matematika" ||
          programStudy === "Fisika" ||
          programStudy === "Informatika"
        ) {
          return "Fakultas Teknologi Informasi dan Sains";
        } else {
          return "Zonk";
        }
      };

      const formSubmit = async (e) => {
        try {
            const res = await fetch("http://localhost:3001/student", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataServer) 
            })
            if (res.ok) {
                console.log("Data has been tranfered")
                window.location.href = '/student';
            }
        } catch(error) {
            console.log(error);
        }
         
        setDataServer({
            fullname: '',
            profilePicture: '',
            address: '',
            birthDate: '',
            gender: '',
            phoneNumber: '',
            faculty: '',
            programStudy: ''
        })
    }

    return (
        <div>
            <NavBar />
            <form onSubmit={formSubmit} method="POST" >
                
                <Box w="1080px" display="flex" flexDirection="column" m="auto" gap="10px" justifyContent="center" alignItems="center" mt="50px">
                <Text fontSize="28px" fontWeight="semibold">Add Student</Text>
                <FormControl>
                    <FormLabel fontSize="20px" htmlFor="input-name">Fullname</FormLabel>
                    <Input size="lg" type="text" id="input-name" name="fullname" value={dataServer.fullname} onChange={controlChange} data-testid="name"/>
                </FormControl>
                <FormControl>
                    <FormLabel fontSize="20px" htmlFor="input-profile-picture">Profile Picture</FormLabel>
                    <Input size="lg" type="text" id="input-profile-picture" name="profilePicture" value={dataServer.profilePicture} onChange={controlChange} data-testid="profilePicture" />
                </FormControl>
                <FormControl>
                    <FormLabel fontSize="20px" htmlFor="input-address">Address</FormLabel>
                    <Input size="lg" type="text" id="input-address" name="address" value={dataServer.address} onChange={controlChange} data-testid="address" />
                </FormControl>
                <FormControl>
                    <FormLabel fontSize="20px" htmlFor="input-phone-number">Phone Number</FormLabel>
                    <Input size="lg" type="text" id="input-phone-number" name="phoneNumber" value={dataServer.phoneNumber} onChange={controlChange} data-testid="phoneNumber" />
                </FormControl>
                <FormControl>
                    <FormLabel fontSize="20px" htmlFor="input-birthdate">Birth Date</FormLabel>
                    <Input size="lg" type="text" id="input-birthdate" name="birthDate" value={dataServer.birthDate} onChange={controlChange} data-testid="date" />
                </FormControl>
                <FormControl>
                    <FormLabel fontSize="20px" htmlFor="input-gender">Gender</FormLabel>
                    <Select id="input-gender" name="gender" data-testid="gender" value={dataServer.gender} onChange={controlChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel fontSize="20px" htmlFor="input-prody">Program Study</FormLabel>
                    <Select id="input-prody" name="programStudy" value={dataServer.programStudy} data-testid="prody" onChange={controlChange}>
                        <option value="Ekonomi">Ekonomi</option>
                        <option value="Manajemen">Manajemen</option>
                        <option value="Akuntansi">Akuntansi</option>
                        <option value="Administrasi Publik">Administrasi Publik</option>
                        <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                        <option value="Hubungan Internasional">Hubungan Internasional</option>
                        <option value="Teknik Sipil">Teknik Sipil</option>
                        <option value="Arsitektur">Arsitektur</option>
                        <option value="Matematika">Matematika</option>
                        <option value="Fisika">Fisika</option>
                        <option value="Informatika">Informatika</option>
                    </Select>
                </FormControl>
                <Button data-testid="add-btn" type="submit" colorScheme="teal" size="lg" mt="20px" mb="80px">Add Student</Button>
                </Box>
                <Footer />
            </form>
        </div>

    );
};

export default AddStudent;
