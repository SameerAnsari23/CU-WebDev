import { createRoot } from 'react-dom/client'
import App from './App';
import Start from './components/start';
import Counter from './components/Counter';

createRoot(document.getElementById('root')).render(
  <>
    <Start/>
    <App />
    <Counter/>
  </>,
)
