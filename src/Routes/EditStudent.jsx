import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { FormControl, FormLabel, Input, Button, Select, Box, Text, Image } from "@chakra-ui/react";

const EditStudent = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [dataUpdt, setDataUpdt] = useState({
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
        if (name=="programStudy") {
            setDataUpdt((prevDataUpdt) => ({
                ...prevDataUpdt,
                [name]: value,
                faculty: pilihFakultas(value)
            }));
        } else{
            setDataUpdt((prevDataUpdt) => ({
                ...prevDataUpdt,
                [name]: value,
            }));
        }
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



    useEffect(() => {
        const fetchId = async () => {
        
            try {
                setLoading(true);
                const URL = `http://localhost:3001/student/${id}`;
                const res = await fetch(URL);
                const data = await res.json();
                setDataUpdt(data);
                setLoading(false);
            } catch (error) {
                console.log(error)
            }
            
        }

        fetchId();
    }, [id])

    const fetchSubmit = async (e) => {
        e.preventDefault();
        try {
            const URL = `http://localhost:3001/student/${id}`;
            const res = await fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUpdt) 
            })
            if (res.ok) {
                console.log("Data has been tranfered")
                window.location.href = '/student';
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <div>
            <NavBar />
            {loading && <p>Loading ...</p>}
            {!loading &&
                <Box>
                    <Box display="flex" justifyContent="center" mb="30px">
                        <Text fontSize="28px" fontWeight="semibold">Edit Data</Text>
                    </Box>
                    <Box display="flex" justifyContent="center" w="1080px" margin="auto" p="10px" gap="20px">
                        
                        
                        <Box>
                            <form onSubmit={fetchSubmit}>
                                <FormControl my="15px">
                                    <FormLabel fontSize="20px" htmlFor="input-name" >Fullname</FormLabel>
                                    <Input size="lg" w="700px" type="text" id="input-name" name="fullname" value={dataUpdt.fullname} onChange={controlChange} data-testid="name"/>
                                </FormControl>
                                
                                <FormControl my="15px">
                                    <FormLabel fontSize="20px" htmlFor="input-address">Address</FormLabel>
                                    <Input size="lg" w="700px" type="text" id="input-address" name="address" value={dataUpdt.address} onChange={controlChange} data-testid="address" />
                                </FormControl>
                                <FormControl my="15px">
                                    <FormLabel fontSize="20px" htmlFor="input-phone-number">Phone Number</FormLabel>
                                    <Input size="lg" w="700px" type="text" id="input-phone-number" name="phoneNumber" value={dataUpdt.phoneNumber} onChange={controlChange} data-testid="phoneNumber" />
                                </FormControl>
                                <FormControl my="15px">
                                    <FormLabel fontSize="20px" htmlFor="input-birthdate">Birth Date</FormLabel>
                                    <Input size="lg" w="700px" type="text" id="input-birthdate" name="birthDate" value={dataUpdt.birthDate} onChange={controlChange} data-testid="date" />
                                </FormControl>
                                <FormControl my="15px">
                                    <FormLabel fontSize="20px" htmlFor="input-gender">Gender</FormLabel>
                                    <Select id="input-gender" name="gender" data-testid="gender" value={dataUpdt.gender} onChange={controlChange}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Select>
                                </FormControl>
                                <FormControl my="15px">
                                    <FormLabel fontSize="20px" htmlFor="input-prody">Program Study</FormLabel>
                                    <Select id="input-prody" name="programStudy" value={dataUpdt.programStudy} data-testid="prody" onChange={controlChange}>
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
                                <Button data-testid="edit-btn" type="submit" colorScheme="teal" size="lg" mt="20px" mb="50px">Edit student</Button>
                            </form>
                        </Box>
                        <Box mt="20px" px="10px">
                            <img src={dataUpdt.profilePicture} boxSize="250px" borderRadius="50%" />
                        </Box>
                    </Box>
                </Box>
            }
            <Footer />
        </div>
    );
};

export default EditStudent;
