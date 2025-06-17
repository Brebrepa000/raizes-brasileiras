import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/Home"
import { SignUpPage } from "./pages/SignUp";
import { CreaturesPage } from "./pages/Criaturas";
import { LoginPage } from "./pages/Login";
import { ReportsPage } from "./pages/Relatos";


const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/criaturas" element={<CreaturesPage />} />
        <Route path="/relatos" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App