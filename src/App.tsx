import './index.css';
import { AppRoutes } from './routes/AppRoutes';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
