import React from 'react';

function Header() {
  return (
    <header className="header flex justify-between items-center p-4 bg-gray-900 text-white">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded bg-gray-700"
      />
      <div className="flex space-x-4">
        <button className="p-2 bg-gray-700 rounded">Notifications</button>
        <button className="p-2 bg-gray-700 rounded">News</button>
        <button className="p-2 bg-gray-700 rounded">Profile</button>
      </div>
    </header>
  );
}

export default Header;
