import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllQuestions from './components/Questions/AllQuestions/AllQuestions';
import PostQuestion from './components/Questions/PostQuestion/PostQuestion';
import LoginForm from './components/User/LoginForm/LoginForm';
import RegisterForm from './components/User/RegisterForm/RegisterForm';
import NavBar from './components/NavBar/NavBar';

function App() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <div>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllQuestions />} />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <RegisterForm />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <LoginForm />}
          />
          <Route
            path="/post-question"
            element={isLoggedIn ? <PostQuestion /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
