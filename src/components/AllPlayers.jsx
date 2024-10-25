import { useState, useEffect } from "preact/hooks";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm";

const AllPlayers = () => {

    const [players, setPlayers] = useState([])
    const [error, setError] = useState(null)
    const [searchPlayer, setSearchPlayer] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllPlayers() {
            const response = await fetchAllPlayers();
            
            if(response.success){
                setPlayers(response.data.players)
            } else {
                setError(response.error.message)
            }
        }

        getAllPlayers();
    }, [])

    const playersToDisplay = searchPlayer ? players.filter((player) => player.name.toLowerCase().includes(searchPlayer)) : players

    return ( 
        <>
            <NewPlayerForm />
            <hr />
            <div>
                <label>
                    Search: {" "}
                    <input 
                        type="text"
                        placeholder="search"
                        onChange={(e) => setSearchPlayer(e.target.value.toLowerCase())}
                    />
                </label>
            </div>
            <ul>
                {playersToDisplay.map((player) => {
                    return <li 
                                key={player.id} style={{ cursor: "pointer" }}
                                onClick={() => navigate(`/players/${player.id}`)}
                            >
                                <strong>{player.name}</strong>
                            </li>
                })}
            </ul>
        </>
     );
}
 
export default AllPlayers;