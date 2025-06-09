import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFound.jsx'
import WowFatB from './pages/criterias/WowFatB.jsx'
import Intro from './pages/criterias/Intro.jsx'
import FlashbackIntro from './pages/criterias/FlashbackIntro.jsx'
// import SupSus from './pages/criterias/SupSus.jsx'
import DilemmaTech from './pages/criterias/DilemmaTech.jsx'
import Trigger from './pages/criterias/Trigger.jsx'
import ColorChar from './pages/criterias/ColorChar.jsx'

const router = createBrowserRouter([
  {path: '/home', element: <App />},
  {path: '/home/WOWFATB', element: <WowFatB />},
  {path: '/home/Introduction', element: <Intro />},
  {path: '/home/Flashback Introduction', element: <FlashbackIntro />},
  //{path: '/home/Super Suspense', element: <SuperSus />},
  {path: '/home/Dilemma Technique', element: <DilemmaTech />},
  {path: '/home/Trigger + Decision', element: <Trigger />},
  {path: '/home/Colourful Characterisation', element: <ColorChar />},
  {path: '*', element: <NotFoundPage />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
