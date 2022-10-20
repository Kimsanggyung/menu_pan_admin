import './App.css';
import './components/Login'
import Login from './components/Login';
import Main from './components/Main';
import AddMenu from './components/AddMenu';

function App() {
  return (
    <>
      <div className="App">
        <Login></Login>
      </div>
      {/* <div className='main'>
        <Main></Main>
      </div>
      <div>
        <AddMenu></AddMenu>
      </div> */}
    </>
    
  );
}

export default App;
