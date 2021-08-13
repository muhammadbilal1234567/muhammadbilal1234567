import Home from './components/Home'
import './App.css'
import {Route} from 'react-router-dom'
import Vaults from './components/Vaults';
import Services from './components/Services';
import Coins from './components/Coins';
import About from './components/About';
import Help from './components/Help';
import LaunchFoxwalle from './components/LaunchFoxwalle';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreateWallet from './components/CreateWallet';
import Auth from './components/Auth'
function App() {
  return (
    <div >
   <Route exact path='/' component={Home}/>
   <Route exact path='/vaults' component={Vaults}/>
   <Route exact path='/services' component={Services}/>
   <Route exact path='/coins' component={Coins}/>
   <Route exact path='/about' component={About}/>
   <Route exact path='/help' component={Help}/>
   <Route exact path='/launch' component={LaunchFoxwalle}/>
   <Route exact path='/signin' component={SignIn}/>
   <Route exact path='/signup' component={SignUp}/>
   <Route exact path='/createwallet' component={CreateWallet}/>
   <Route exact path='/auth' component={Auth}/>
    </div>
  );
}

export default App;
