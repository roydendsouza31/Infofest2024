import { useState } from 'react'
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Winners from './pages/Winners';
import Navbar from './components/Navbar';


const Event = React.lazy(() => import('./pages/Event'))

const PageNotFound = React.lazy(() => import('./pages/404'))
const Schedule = React.lazy(() => import('./pages/Schedule'))
const Rules = React.lazy(() => import('./pages/Rules'))
// const About = React.lazy(() => import('./pages/About'))
// const ContactUs = React.lazy(() => import('./pages/ContactUs'))
const About = React.lazy(() => import('./pages/about'))
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event' element={
          <React.Suspense fallback={<Fallback />}>
            <Event />
          </React.Suspense>
        } />
        
        <Route path='/schedule' element={
          <React.Suspense fallback={<Fallback />}>
            <Schedule />
          </React.Suspense>
        } />
        
        <Route path='/rules' element={
          <React.Suspense fallback={<Fallback />}>
            <Rules />
          </React.Suspense>
        } />
       
        
        <Route path='/ranking' element={
          <React.Suspense fallback={<Fallback />}>
            <Ranking />
          </React.Suspense>
        } />
        <Route path='/winners' element={
          <React.Suspense fallback={<Fallback />}>
            <Winners />
          </React.Suspense>
        } />
        <Route path='/about' element={
          <React.Suspense fallback={<Fallback />}>
            <About />
          </React.Suspense>
        } />
        <Route path='*' element={
          <React.Suspense fallback={<Fallback />}>
            <PageNotFound />
          </React.Suspense>
        } />
      </Routes>
    </>
  )
}

export default App


const Fallback = () => <div style={{ minHeight: '90vh' }} />

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname])

  return null;
}