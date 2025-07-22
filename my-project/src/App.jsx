import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col md:flex-row h-full min-h-screen font-sans">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-400 to-blue-700 text-white p-8 md:p-12 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl mb-6 md:mb-8 font-semibold">
          Take 10 seconds to Sign up!
        </h2>
        <ul className="space-y-4 text-base md:text-lg">
          <li className="flex items-start">
            <span className="mr-2 md:mr-3">✔️</span> Get on-demand Q&amp;A{" "}
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
            Login or <b className="font-semibold">Sign Up</b>
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-3 border border-gray-300 rounded"
          />

          <p className="text-sm mb-3">
            <a href="#" className="text-blue-700 hover:underline">
              I want to tutor on Studyconnect
            </a>
          </p>

          <button className="bg-sky-400 hover:bg-sky-500 text-white py-3 w-full rounded text-base font-medium mt-1 mb-3">
            CREATE ACCOUNT
          </button>

          <div className="text-center my-2 text-black font-medium">OR</div>

          <div className="space-y-3">
            <button className="w-full py-3 rounded text-white text-sm bg-blue-600 hover:bg-blue-700">
              Sign up with Google
            </button>
            <button className="w-full py-3 rounded text-white text-sm bg-green-600 hover:bg-green-700">
              Sign up with Facebook
            </button>
          </div>

          <div className="text-center mt-5 text-sm">
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
