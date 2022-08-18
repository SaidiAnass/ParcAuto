import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormSignIn from './components/FormSignIn';
import FormSignUp from './components/FormSignUp';


function App() {
  return (
    <div className="App" style={gradient}>
      <Routes>
        <Route exact path="/" element={<FormSignIn />} />
        <Route path="/SignUp" element={<FormSignUp />} />
      </Routes>
    </div>
  );
}

const gradient = {
  background: 'linear-gradient(to right, #4A5b70, #AFC0C6)'
}

export default App;
