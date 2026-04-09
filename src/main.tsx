// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { ThemeProvider } from './context/ThemeContext.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </StrictMode>,
// )



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function LoadingScreen() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '24px'
    }}>
      Loading...
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingScreen />
  </StrictMode>,
)



