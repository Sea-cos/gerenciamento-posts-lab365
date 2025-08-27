import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PostsLists from './pages/PostsLists.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PostsLists />
  </StrictMode>,
)
