import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Nav from './Componoents/Nav';

function App() {
  return (
    <div>
      <Nav/>

      <div className='HomeBox'>
        <div>
          <h1> Scarlett White</h1>
          <p>Urban explorer who thrives on the thrill of uncovering the forgotten and the eerie.</p>
        </div>
        <div>
          <img></img>
        </div>
      </div>


    </div>
  );
}

export default App;
