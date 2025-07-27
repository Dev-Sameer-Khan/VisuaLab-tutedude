import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Router from './router/routes';
import { RouterProvider } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});
gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={Router} />
  </StrictMode>,
)
