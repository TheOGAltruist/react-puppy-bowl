import { useParams } from "react-router-dom";
import { useEffect, useState } from "preact/hooks";
import { fetchSinglePlayer } from "../API";
import { Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deletePlayer } from "../API";

const SinglePlayer = () => {

    const { id } = useParams()
    const [singlePlayer, setSinglePlayer] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getSinglePlayer() {
            const response = await fetchSinglePlayer(id);
                        
            if(response.success){
                setSinglePlayer(response.data.player)
            } else {
                setError(response.error.message)
            }
        }

        getSinglePlayer();
    }, [id])
    
    return ( 
        <>
            <Container className="singlePlayer">
                <img src={`${singlePlayer.imageUrl}`} alt={`${singlePlayer.name}`} />
                <Typography variant="h6" ><strong>NAME:</strong> {singlePlayer.name}</Typography>
                <Typography align="center" variant="subtitle1" ><strong>BREED:</strong> {singlePlayer.breed}</Typography>
                <Typography align="center" variant="subtitle1" ><strong>STATUS:</strong> {singlePlayer.status}</Typography>
                {singlePlayer.team?.name && <Typography align="center" variant="subtitle1" ><strong>TEAM:</strong> {singlePlayer.team?.name}</Typography>}
                <Button 
                    variant="contained"
                    onClick={() => navigate("/")}
                >
                    Home
                </Button>
                <Button 
                    variant="contained" 
                    color="error"
                    onClick={() => {deletePlayer(singlePlayer.id); navigate("/")}}
                >
                    Delete Player
                </Button>
            </Container>
        </>
     );
}
 
export default SinglePlayer;