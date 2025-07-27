import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {

  useEffect(() => {
    const login = localStorage.getItem("isLoggedIn");
    if (login) {
      window.location.href = "/seller/all-order";
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', true);
    window.location.href = "/seller/all-order";
  };

  return (
    <>
      <Navbar/>
      <div className="h-screen flex items-center justify-center bg-[#f9f5ed]">
        <div className="w-full max-w-md px-8 pt-20 max-[599px]:pt-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5c432d] text-center mb-8 font-serif">
            Account login
          </h1>
          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] placeholder-[#c2b6a6] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-[#e5ded4] rounded-lg px-5 py-3 bg-transparent text-[#5c432d] placeholder-[#c2b6a6] focus:outline-none focus:ring-2 focus:ring-[#bfa88a] transition"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-[#5c432d] text-white font-semibold py-3 rounded-full text-lg hover:bg-[#47321c] transition"
            >
              Login
            </button>
          </form>
          <div className="mt-7 flex flex-col items-center gap-2 text-[#5c432d] text-base">
            <span>
              Don't have an account yet?{' '}
              <Link to="/signup" className="underline hover:text-[#47321c]">
                Create account
              </Link>
            </span>
            <Link to="#" className="underline hover:text-[#47321c] mt-2">
              Forgot your password?
            </Link>
            <Link to="#" className="underline hover:text-[#47321c] mt-2">
              Need help accessing your subscriptions?
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;