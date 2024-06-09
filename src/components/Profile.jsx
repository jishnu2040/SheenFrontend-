import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Your Profile</h1>
        <p className="text-lg text-center mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nulla ac mi aliquet tristique.
          Phasellus non ex vitae leo ullamcorper hendrerit. Duis consectetur diam at cursus fermentum.
          Quisque nec enim nec lacus ullamcorper gravida non nec velit.
        </p>
        <div className="flex justify-center">
          <button onClick={() => setIsVisible(!isVisible)} className="bg-blue-500 text-white px-6 py-3 rounded-md mr-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Toggle Paragraph</button>
          <Link to="/dashboard" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Go to Dashboard</Link>
        </div>
        {isVisible && (
          <p className="mt-8 text-lg text-center">
            This paragraph is visible.
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
