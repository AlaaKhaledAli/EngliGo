import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Reading from './Pages/Reading/Reading';
import Footer from './Components/Footer/Footer';
import ChatBot from './Pages/ChatBot/ChatBot';
import Writing from './Pages/Spoken/Writing';

function App() {
  return (
    <>
      <BrowserRouter  basename="/EngliGo">
        <NavBar />
        <div className='min-vh-100'>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
          <Route exact path={'/Writing'} component={Writing} />
          <Route exact path={'/Reading'} component={Reading} />
          <Route exact path={'/ChatBot'} component={ChatBot} />
        </Switch>
        </div>
        <Footer/>      
            </BrowserRouter>
    </>
  );
}
export default App;
