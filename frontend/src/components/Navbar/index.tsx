import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <Box sx={{flexGlow: 1, display: "flex"}}>
            <Stack direction="row" spacing={2}>
                <Button color="inherit" component={Link} to="/">
                Inicio
                </Button>
                <Button color="inherit" component={Link} to="/categorias">
                Categorias
                </Button>
                <Button color="inherit" component={Link} to="/produtos">
                Produtos
                </Button>
            </Stack>
        </Box>
    );
}   