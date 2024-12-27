import React from 'react';

const Sidebar = ({ onNodeAdd }) => {
  return (
    <div className="sidebar">
      <button onClick={onNodeAdd}>Add Node</button>
    </div>
  );
};

export default Sidebar;
