import { Route, Routes } from "react-router-dom";
import ListarCategorias from "../pages/categorias/listar-categorias";
import ListarProdutos from "../pages/produtos/listar-produtos";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<h1>Página inicial</h1>} />

            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/produtos" element={<ListarProdutos />} />
        </Routes>
    );
}