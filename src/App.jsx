import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CreaturesPage } from "./pages/Criaturas";
import { ReportsPage } from "./pages/Relatos";
import { CreateReportPage } from "./pages";
import { SignUpPage } from "./pages/SignUp";
import { SignInPage } from "./pages/Login";
import { HomePage } from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creatures" element={<CreaturesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/reports/create" element={<CreateReportPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}