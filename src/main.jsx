import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/mainDashboard';
// import CourseDetail from './pages/courseDetail';

createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/courses/:slug" element={<CourseDetail />} /> */}
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
)
