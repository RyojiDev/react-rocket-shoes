import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header';

import GlobalStyle from './styles/global'
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
