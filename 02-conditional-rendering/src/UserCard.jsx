import './Card.css'
export function UserCard({ isOnline, isAdmin, name, bio }) {

    return (
        <div className="card">
            <h3>{name}</h3>
            {isAdmin && <p>Admin</p>}
            {isOnline ? "Online🟢" : "offline🛑"}
            <p>{bio ?? "Not bio yet"}</p>
            {/* {bio ?? "Not bio yet"} */}
        </div>
    )

}


