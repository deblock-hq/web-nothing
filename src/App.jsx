import Logo from './assets/logo.svg';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <div className='images-container'>
          <img className='logo' src={Logo} atl='Logo Deblock' />
        </div>
      </div>
    </div>
  )
};

export default App;
