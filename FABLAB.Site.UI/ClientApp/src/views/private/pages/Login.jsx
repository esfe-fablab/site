import React, { useState } from 'react';
import { authAdmin } from '../../../shared/api/auth';

const Login = () => {
  const [credentials, setCredentials] = useState({
    UserName: '',
    Password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await authAdmin(credentials);
    console.log(result);
    if (!result.result) {
      alert('CREDENCIALES INVALIDAS');
    } else {
      localStorage.setItem('authResult', JSON.stringify(result.token));
      window.location.assign('/lab/');
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-8 h-8 mr-2" src="/img/logo/fablab-logo-dark.svg" alt="logo" />
          Esfe Fablab
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Inicia Sesión
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900">
                  UserName
                </label>
                <input
                  type="text"
                  name="UserName"
                  id="user"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Username"
                  autoComplete="off"
                  required
                  value={credentials.UserName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="Password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  autoComplete="off"
                  required
                  value={credentials.Password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center justify-between">
                <a href="/" className="text-sm font-medium text-primary-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{' '}
                <a href="/" className="font-medium text-primary-600 hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
