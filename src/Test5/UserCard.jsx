import React from 'react';

// Receiving user details through props
const UserCard = ({ user }) => {
  if (!user) 
    return null;

  return (
    <div className="card mt-4 shadow-sm">
      <div className="card-header bg-success text-white">
        <h4 className="mb-0">User Profile</h4>
      </div>
      <div className="card-body">
        <p className="card-text"><strong>Name:</strong> {user.name}</p>
        <p className="card-text"><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;