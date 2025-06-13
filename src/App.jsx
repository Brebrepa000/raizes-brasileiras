import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/Home"
<<<<<<< HEAD
import { SignUpPage } from "./pages/SignUp";
=======
import { CreaturesPage } from "./pages/Criaturas";
>>>>>>> 31db25a0f4d80fb069d17162a0afce285ab9a3e9


const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/criaturas" element={<HomePage />} />
        <Route path="/contos" element={<HomePage />} />
=======
        <Route path="/cadastro" element={<HomePage />} />
        <Route path="/criaturas" element={<CreaturesPage />} />
>>>>>>> 31db25a0f4d80fb069d17162a0afce285ab9a3e9
      </Routes>
    </BrowserRouter>
  )
}

export default App