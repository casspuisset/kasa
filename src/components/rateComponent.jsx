import empty_star from "../assets/empty_star.png";
import full_star from "../assets/full_star.png"

export default function Rate({rating}) {

    let stars = [];
    for(let i=1; i<6; i++){
        if(i<=rating){
            stars.push(<img src={full_star} alt={rating}/>)
        } else {
            stars.push(<img src={empty_star} alt={rating}/>)
        }
    }
    
    return (
 
        <div className="rate-component">
            {stars}
        </div>

    );

}