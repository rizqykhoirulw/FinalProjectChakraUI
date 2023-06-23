import React from "react";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Button, Box, Table, Tr, Thead, Td, Tbody, Th } from "@chakra-ui/react";

const Student = () => {
    const [dataStudent, setDataStudent] = useState(null);
    const [loading, setLoading] = useState(false)
    const [filterData, setFilterData] = useState("All")
    
    const fetchdata = async () =>{
        const URL = "http://localhost:3001/student";
        try {
            setLoading(true);

            const res = await fetch(URL);
            const data = await res.json();

            setDataStudent(data);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteData = async (id) => {
        try {
            setLoading(true);
            const res = await fetch(`http://localhost:3001/student/${id}`, {
                method: 'DELETE'
            });

            if (res.ok) {
                console.log("Data has been deleted");
                fetchdata()
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchdata();
    }, []);

    const handleChange = (e)=>{
        setFilterData(e.target.value);
    }

    const filterMurid = dataStudent?.filter((dt) => {
        if (filterData === "All") {
            return true;
        } else{
            return dt.faculty === filterData;
        }
    })

    return (
        <>
            <NavBar />
            {loading && <p>Loading ...</p>}
            {!loading &&
                <> 
                    
                    <Box p="10px" mb="80px" mt="30px">
                    <Select data-testid="filter" onChange={handleChange} mb="50px" w="20%" mx="20px"> 
                        <option value="All">All</option>
                        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                        <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                        <option value="Fakultas Teknik">Fakultas Teknik</option>
                        <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
                    </Select>
                    <Table id="table-student" m="auto">
                        <Thead>
                            <Tr>
                                <Th textAlign="center" verticalAlign="middle" fontSize="15px">No</Th>
                                <Th textAlign="center" verticalAlign="middle" fontSize="15px">Name</Th>
                                <Th textAlign="center" verticalAlign="middle" fontSize="15px">Faculty</Th>
                                <Th textAlign="center" verticalAlign="middle" fontSize="15px">Program Study</Th>
                                <Th textAlign="center" verticalAlign="middle" fontSize="15px">Option</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filterMurid?.map((murid, index) => (
                                <Tr className="student-data-row" key={index}>
                                    <Td textAlign="center" verticalAlign="middle">{murid.id}</Td>
                                    <Td textAlign="center" verticalAlign="middle">
                                        <Link to={`/student/${murid.id}`}>
                                            {murid.fullname}
                                        </Link>
                                    </Td>
                                    
                                    <Td textAlign="center" verticalAlign="middle">{murid.faculty}</Td>
                                    <Td textAlign="center" verticalAlign="middle">{murid.programStudy}</Td>
                                    <Td textAlign="center" verticalAlign="middle">
                                        <Button type="submit" onClick={() => deleteData(murid.id)} data-testid={`delete-${murid.id}`} colorScheme="red" >Delete</Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    </Box>
                </>
            }
            <Footer />
        </>
    );
};

export default Student;
