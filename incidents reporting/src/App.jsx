import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Reporting from "./pages/Reporting";
function App(){
 return(
  <BrowserRouter>
      <Routes>
        <Route index element={<Signin/>} />
        <Route path="/reporting" element={<Reporting/>}/>       
      </Routes>
    </BrowserRouter>
 );
}
export default App
