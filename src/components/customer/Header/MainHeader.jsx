import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img from'../../../assets/Sheen.png';
import axiosInstance from '../../../utlils/axiosinstance';
import { toast } from 'react-toastify';

function MainHeader() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const jwt_access = localStorage.getItem('access');
  const refresh = JSON.parse(localStorage.getItem('refresh'));

  useEffect(() => {
    if (!jwt_access || !user) {
      navigate("/login");
    }
  }, [jwt_access, user, navigate]);

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.post("/auth/logout/", { refresh_token: refresh });
      if (res.status === 200) {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        localStorage.removeItem('user');
        navigate('/login');
        toast.success("Logout successful");
      }
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const handleProfile = async () => {
    try {
      const resp = await axiosInstance.get("/auth/profile/");
      console.log('Response:', resp); // Log the entire response object
      if (resp.status === 200) {
        navigate('/profile')
      }
    } catch (error) {
      console.error('Error fetching profile:', error); // Log the error for debugging
      toast.error("Failed to fetch profile");
    }
  };

  return (
    <>
      <div className='w-screen max-h-24 grid grid-cols-12 p-3 border-b-2 border'>
        <div className='col-span-6'>
          <img src={img} alt="Logo" className='h-20' />
        </div>
        <div className='flex justify-end items-center col-span-6'>
          <div>
            {user ? (
              <div>
                <p className="text-black font-bold mr-4">{user.name}</p>
                <button onClick={handleLogout} className='bg-red-500 font-bold text-white my-auto px-4 p-2 rounded-lg'>Logout</button>
                <button onClick={handleProfile} className='bg-green-500 font-bold text-white my-auto px-4 p-2 rounded-lg ml-2'>Profile</button>
              </div>
            ) : (
              <Link to="/login" className='bg-blue-500 font-bold text-white my-auto px-4 p-2 rounded-lg'>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
