// import CCoffee from "./components/CCoffee";
import ContactForm from './components/ContactForm';
import FCoffee from './components/FCoffee';
import Small from './components/Small';
import Home from "../src/components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
       <Route>
         <Route path="*" element={<h1>404 Page Not Found</h1>} />
         </Route>
      </BrowserRouter>
      {/* <FCoffee firstName='Todd' />
      <Small /> */}
    </>
  )
}

export default App