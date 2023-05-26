import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../MyHooks/DynamicTitle';

const ErrorPage = () => {
  useTitle('404 Error Page')
  return (
    <>
      {/* <!-- component --> */}
      <section>

        <div className="bg-white">
          <div className="flex h-screen">
            <div className="m-auto text-center pb-20">
              <img className='w-screen h-screen' src="https://cdn.dribbble.com/users/605899/screenshots/4144886/media/47ae8417ee638d039a4b7300439ea061.gif" alt="error img" />
              <h1 className="md:text-7xl text-4xl mx-2 relative bottom-20 text-slate-600 font-bold">oops! Page not found</h1>
              <Link to="/" className="awesome-btn px-10 py-4 relative bottom-8 rounded-md">
                BACK To HOME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;