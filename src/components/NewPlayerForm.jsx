import { Box, Typography, Container, Button } from "@mui/material";
import { useState } from "preact/hooks";
import { useNavigate } from "react-router-dom";
import { addPlayer } from "../API";


const NewPlayerForm = () => {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const navigate = useNavigate()

   return ( 
        <>
            <Container>
                <Box component="form">
                    <Typography variant="h5">New Player Form</Typography>
                    <label>
                        Name: {""}
                        <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Breed: {""}
                        <input 
                            type="text"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                        />
                    </label>
                    <Button 
                        variant="text"
                        onClick={() => {addPlayer({name, breed}); setName(""); setBreed(""); window.location.reload()}}
                    >
                        Submit
                    </Button>
                </Box>
            </Container>
        </>
     );
}
 
export default NewPlayerForm;