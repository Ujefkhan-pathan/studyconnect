import { useState,Navigate } from 'react'
import { useNavigate } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [department, setDepartment] = useState("");
  const [division, setDivision] = useState("");
  const [year, setYear] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [isLogin , setIsLogin] = useState(false);
  const navigate = useNavigate();

  


  const submitHandeler = (e) => {
    e.preventDefault();
    if (!email || !username || !password || !avatar || !department  ) {
      alert("Please fill all fields");
      return;
    }

  }

  return (
    <div className="flex flex-col md:flex-row h-full min-h-screen font-sans">
    {/* Left Panel */}
    <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-400 to-blue-700 text-white p-8 md:p-12 flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 font-semibold">
        Take 10 seconds to Sign up!
      </h2>
      <ul className="space-y-4 text-base md:text-lg">
        <li className="flex items-start">
          <span className="mr-2 md:mr-3">✔️</span> Get on-demand{" "}
          <b className="font-semibold">study help</b> from tutors
        </li>
        <li className="flex items-start">
          <span className="mr-2 md:mr-3">✔️</span>{" "}
          <b className="font-semibold">Study documents</b> through the notebank
        </li>
        <li className="flex items-start">
          <span className="mr-2 md:mr-3">✔️</span> Read 1000s of rich{" "}
          <b className="font-semibold">book guides</b> covering popular titles
        </li>
      </ul>
    </div>
  
    {/* Right Panel */}
    <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-5">
          {isLogin ? 'Login ' : 'Sign Up'}
        </h2>
  
       
        {!isLogin && (
           <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded"
        />
        )}
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded"
        />
        {!isLogin && (
          <>
                  <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          className="w-full p-3 mb-3 border border-gray-300 rounded"
        />
  
        <select
          onChange={(e) => setDepartment(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded"
        >
          <option value="">Select Department</option>
          <option value="BSc CS">BSc CS</option>
          <option value="BCS">BCS</option>
          <option value="BCom">BCom</option>
        </select>
  
        <select
          onChange={(e) => setDivision(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded"
        >
          <option value="">Select Division</option>
          <option value="A">Division A</option>
          <option value="B">Division B</option>
        </select>
  
        <input
          type="number"
          placeholder="Year (e.g., 1, 2, 3)"
          onChange={(e) => setYear(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Roll No"
          onChange={(e) => setRollNo(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded"
        />
          </>
        )}

  
        <button
          onClick={submitHandeler}
          className="bg-sky-400 hover:bg-sky-500 text-white py-3 w-full rounded text-base font-medium mt-1 mb-3"
        >
          {isLogin ? 'Login' : 'Create Account'}
        </button>
  
        <button
          onClick={()=>{ navigate('/home')}}
          className="bg-sky-400 hover:bg-sky-500 text-white py-3 w-full rounded text-base font-medium mt-1 mb-3"
        >
          Click To Go to Hello.jsx
        </button>
  
        <div className="text-center my-2 text-black font-medium">OR</div>
  
        <div onClick={()=>{setIsLogin(!isLogin)}} className="text-center mt-5 text-sm">
          Already have an account?{" "}
          <a href="#" className="text-blue-700 font-medium hover:underline">
            Login
          </a>
        </div>
      </div>
    </div>
  </div>
  
  );

}

export default App
