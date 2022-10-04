import "./style.css";
export default function LiveStream(props){
    const {listName , title} = props
    function renderMovies(){
        return listName.map(function(item , index){
            const {name , image , sport , time} = item;
            return(
                <li className="li" key={index}>
                    <div className="live">
                    <img src={image}/>
                    <div className="details">
                    <span>{name}</span>
                    <p>{sport}</p>
                    <p>{time}</p>
                    </div>
                    </div>
                </li>
            )
        })
    }
    return(
        <div className="total">
            <div className="container-content">
                <h3 className="title">{title}</h3>
                <div className="movies">
                    <ul className="movie-boxes">{renderMovies()}</ul>
                </div>
        </div>
        </div>
    )
}