import './App.css';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Footer/Footer';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3ge6rmpQq9FofboXWiY8GeXUZqyGNFS8",
  authDomain: "abbas-paryavi.firebaseapp.com",
  projectId: "abbas-paryavi",
  storageBucket: "abbas-paryavi.appspot.com",
  messagingSenderId: "202647955851",
  appId: "1:202647955851:web:c44c50d6a578baf372278e",
  measurementId: "G-QFGQK14GJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>

      <Footer />
    </div >
  );
}

export default App;
