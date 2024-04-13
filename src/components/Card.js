import {useState} from "react";

function Card({id, image, info, price, name, removeTour}){

    // readmore stores whether we have some content hidden or not
    const[readmore, setReadmore] = useState(false);

    // if readmore is true then set entire description else clip it to 200 characters
    const description = readmore? info: `${info.substring(0,200)}...`;

    // to handle when readmore is clicked
    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore? `show less`: `read more`}
                    </span>
                </div>
            </div>
            {/* calls remove tour method on App.js */}
            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;