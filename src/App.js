// // src/App.js

// import React from 'react';
// import { auth } from './firebase';
// import Login from './login';
// import Hello from './hello';

// class App extends React.Component {
//   componentDidMount() {
//     // Add Firebase auth event listener
//     auth.onAuthStateChanged(user => {
//       if (user) {
//         console.log('User is signed in:', user);
//       } else {
//         console.log('User is signed out');
//       }
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Hello/>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react"
import Login from './login'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import DApp from './components/DApp'
 
 
function App() {
 
  return (
    // <Login />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        {/* <Route path="/DApp" element={<DApp />}></Route> */}
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;