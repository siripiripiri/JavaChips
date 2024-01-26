import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MyProvider } from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyProvider>
        <App />
    </MyProvider>
)
