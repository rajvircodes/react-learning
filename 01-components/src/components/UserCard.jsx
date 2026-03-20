function UserCard() {
  const user = {
    name: "Rajvirsinh",
    role: "React Developer",
    age: 21,
    theme: {
      backgroundColor: "#1a1a2e",
      color: "#e0e0e0",
    },
  };

  return (
    <div
      style={
       user.theme
      }
    >
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <span>{user.age}</span>
    </div>
  );
}

export default UserCard;
