import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
        <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path='/product/:id' component={ProductPage}/>
          </Container>
        </main>
      <Footer/>
    </BrowserRouter>
      
  );
}

export default App;
