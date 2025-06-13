import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HomePage } from "./pages/Home"
import { CreaturesPage } from "./pages/Criaturas";


const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<HomePage />} />
        <Route path="/criaturas" element={<CreaturesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App