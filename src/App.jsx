import Logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <div className='images-container'>
          <img className='logo' src={Logo} atl='Logo Deblock' />
          <span>probably nothing</span>
        </div>
      </div>
    </div>
  )
};

export default App;
