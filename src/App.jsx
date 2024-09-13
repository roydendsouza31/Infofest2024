import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StarsCanvas from './components/ui/Star';
import SplashScreen from './components/ui/SplashScreen';
import Loading from './components/ui/loading'

const Events = React.lazy(() => import('./pages/Events'));
const Event = React.lazy(() => import('./pages/Event'));
const PageNotFound = React.lazy(() => import('./pages/404'));
const Schedule = React.lazy(() => import('./pages/Schedule'));
const Rules = React.lazy(() => import('./pages/Rules'));
const Ranking = lazy(() => import('./pages/Ranking'));
const About = React.lazy(() => import('./pages/about'));
const Team = React.lazy(()=>import('./pages/Teams'));
const Winners = React.lazy(() => import('./pages/Winners'));




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
      <SplashScreen />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={
        <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>} />
        <Route path='/events' element={
          <Suspense fallback={<Loading />}>
            <Events />
          </Suspense>
        } />
        <Route path='/events/:slug' element={
          <Suspense fallback={<Loading />}>
            <Event />
          </Suspense>
        } />
        <Route path='/schedule' element={
          <Suspense fallback={<Loading />}>
            <Schedule />
          </Suspense>
        } />
        <Route path='/rules' element={
          <Suspense fallback={<Loading />}>
            <Rules />
          </Suspense>
        } />
        <Route path='/ranking' element={
          <Suspense fallback={<Loading />}>
            <Ranking />
          </Suspense>
        } />
        <Route path='/winners' element={
          <Suspense fallback={<Loading />}>
            <Winners />
          </Suspense>
        } />
        <Route path='/about' element={
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        } />
        <Route path='/team' element={
          <Suspense fallback={<Loading />}>
            <Team />
          </Suspense>
        } />
        <Route path='/winners' element={
          <Suspense fallback={<Loading />}>
            <Winners />
          </Suspense>
        } />
        <Route path='*' element={
          <Suspense fallback={<Loading />}>
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
