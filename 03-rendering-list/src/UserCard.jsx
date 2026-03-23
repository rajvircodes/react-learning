import {users} from "./data.js";

function UserCard() {
  const allUsers = users.map((user) => <li key={user.id}>{user.name}</li>);
  const activeDev = users
  .filter(d => d.role === "developer" && d.isActive)
  .map(d =><li key={d.id}>{d.name}</li>);

 return (
    <>
      <h2>All Users</h2>
      <ul>{allUsers}</ul>

      <h2>Active Developers</h2>
      <ul>{activeDev}</ul>
    </>
  );
}

export default UserCard;

