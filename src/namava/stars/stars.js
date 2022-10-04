import "./style.css";
export default function Stars(props){
    const {listName , title} = props
    function renderStars(){
        return listName.map(function(item , index){
            const {name , image} = item;
            return(
                <li className="li" key={index}>
                    <div className="star-image">
                        <img src={image}/>
                    </div>
                    <div className="star-content">
                    <span>{name}</span>
                    </div>
                </li>
        
            )
        })
    }
    return(
        <div className="total">
            <div className="container-content">
        <h3 className="title">{title}</h3>
        <ul className="star-boxes">{renderStars()}</ul>
        </div>
        </div>
    )
}