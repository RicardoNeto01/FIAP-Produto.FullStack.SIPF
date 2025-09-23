import { Box } from "@mui/material"
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRoutes from "./routes"
function App() {

  return (
    <Box sx={{display: 'flex', flexDirection: 'Column', minHeigth: '100vh'}}>
      <Header title = "Hub de produtos"/>
      <Box component="main" sx={{flexGrow: 1, p:2}}>
        <AppRoutes />
      </Box>
      <Footer/>
    </Box>
  )
}

export default App
