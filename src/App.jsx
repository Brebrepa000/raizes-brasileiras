import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/Home"
import { SignUpPage } from "./pages/SignUp";
import { CreaturesPage } from "./pages/Criaturas";


const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/criaturas" element={<CreaturesPage />} />
        <Route path="/login" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App