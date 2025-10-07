import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/mainDashboard';
import DetailCourse from './pages/detailCourse';
import Home from './components/Home';

createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/courses/:slug" element={<DetailCourse />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
)
