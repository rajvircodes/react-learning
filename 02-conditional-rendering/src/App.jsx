import { UserCard } from "./UserCard";
import './App.css'
function App() {
  return (
    <div className="app-container">
      <UserCard
    
        isOnline={true}
        isAdmin={false}
        name="Rajvirsinh"
        bio="React feel very smooth when you find solutions"
      />
      <UserCard
        isOnline={false}
        isAdmin={false}
        name="Amit"
        bio="I am Amit working professional"
      />
      <UserCard isOnline={true} isAdmin={false} name="Yuvarajsinh"/>
    </div>
  );
}

export default App;
