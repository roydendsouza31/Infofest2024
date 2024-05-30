import { useState, useEffect } from 'react';
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Winners from './pages/Winners';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarsCanvas from './components/ui/Star';

const Event = React.lazy(() => import('./pages/Event'));
const PageNotFound = React.lazy(() => import('./pages/404'));
const Schedule = React.lazy(() => import('./pages/Schedule'));
const Rules = React.lazy(() => import('./pages/Rules'));
const Ranking = lazy(() => import('./pages/Ranking'));
const About = React.lazy(() => import('./pages/about'));
const Team = React.lazy(()=>import('./pages/Teams'));

const Fallback = () => (
  <div className='bg-teal-500 text-red-100'>Loading...</div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event' element={
          <Suspense fallback={<Fallback />}>
            <Event />
          </Suspense>
        } />
        <Route path='/schedule' element={
          <Suspense fallback={<Fallback />}>
            <Schedule />
          </Suspense>
        } />
        <Route path='/rules' element={
          <Suspense fallback={<Fallback />}>
            <Rules />
          </Suspense>
        } />
        <Route path='/ranking' element={
          <Suspense fallback={<Fallback />}>
            <Ranking />
          </Suspense>
        } />
        <Route path='/winners' element={
          <Suspense fallback={<Fallback />}>
            <Winners />
          </Suspense>
        } />
        <Route path='/about' element={
          <Suspense fallback={<Fallback />}>
            <About />
          </Suspense>
        } />
        <Route path='/team' element={
          <Suspense fallback={<Fallback />}>
            <Team />
          </Suspense>
        } />
        <Route path='*' element={
          <Suspense fallback={<Fallback />}>
            <PageNotFound />
          </Suspense>
        } />
      </Routes>
      <Footer />
      <StarsCanvas/>
    </>
  );
}

export default App;
