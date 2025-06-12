import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/Home"


const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<HomePage />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/criaturas" element={<HomePage />} />
        <Route path="/contos" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App