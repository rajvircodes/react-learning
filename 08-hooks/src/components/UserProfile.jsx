import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  // useEffect ka jaadu yahan hai
  useEffect(() => {
    console.log(`Fetching data for ID: ${userId}`);
    
    // API Call
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));

    // Optional: Cleanup function
    return () => {
      console.log("Purana data saaf ho raha hai ya component hat raha hai");
    };
  }, [userId]); // Jab jab userId badlegi, ye function dobara chalega!

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>User Profile</h1>
      <button onClick={() => setUserId(userId + 1)}>Next User</button>
      <button onClick={() => setUserId(userId - 1)}>Prev User</button> 
      
      {user ? (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;