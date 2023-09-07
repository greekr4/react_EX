import { useMediaQuery } from 'react-responsive';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
};

export default App;
