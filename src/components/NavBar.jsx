import { Link, Box, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
    return ( 
        <>
            <Box component="nav">
                <Link href="/"><HomeIcon fontSize="large"/></Link>
                <Typography variant="h4">Puppy Bowl</Typography>
            </Box>
        </>
     );
}
 
export default NavBar;