import Logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <div className='images-container'>
          <img className='logo' src={Logo} atl='Logo Deblock' />
        </div>
        <p>PROBABLY NOTHING</p>
      </div>
    </div>
  )
};

export default App;
