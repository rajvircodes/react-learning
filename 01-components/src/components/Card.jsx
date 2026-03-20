export function Card({name,role="developer", age}){
    return(
        <div>
            <h1>{name}</h1> 
            <p>{role}</p>
            <p>{age}</p>
        </div>
    )
}