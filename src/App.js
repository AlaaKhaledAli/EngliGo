import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/navbar/Navbar';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ChatBot from 'react-chatbotify';
import { ThemeProvider } from 'react-bootstrap';


function App() {
  const styles = {
    headerStyle: {
      background: '#42b0c5',
      color: '#ffffff',
      padding: '10px',
    },
    chatWindowStyle: {
      backgroundColor: '#f2f2f2',
    },
    // ...other styles
  };
const steps = [
    {
        id: '0',
        message: 'Hey Geek!',

        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',

        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',

        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [

            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },

        ],
        end: true
    }
];

// Creating our own theme
const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};

// Set some properties of the bot
const config = {
    botAvatar: "img.png",
    floating: true,
};
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/register'} component={Register} />
        </Switch>
<ThemeProvider theme={theme}>
                <ChatBot
                styles={styles}
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="GeekBot"
                    steps={steps}
                    {...config}

                />
            </ThemeProvider>      
            </BrowserRouter>
    </>
  );
}
export default App;
