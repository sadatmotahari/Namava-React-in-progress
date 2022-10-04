import "./style.css";
export default function MovieList(props){
    const {listName , title} = props
    function renderMovies(){
        return listName.map(function(item , index){
            const {name , image , type , year, rate, detail, playIcon} = item;
            return(
                <li className="li" key={index}>
                    <div className="image">
                    <img src={image}/>
                    <div className="content">
                        <div className="detail">
                            <p>{type} {year}</p>
                            <p>{rate}</p>
                        </div>
                        <img src={playIcon}/>
                    </div>
                    </div>
                    <div className="span">
                    <span>{name}</span>
                    </div>
                    <div className="more-detail">
                        <p>{detail}</p>
                    </div>
                </li>
        
            )
        })
    }
    return(
        <div className="total">
            <div className="container-content">
        <h3 className="title">{title}</h3>
        <ul className="movie-boxes">{renderMovies()}</ul>
        </div>
        </div>
    )
}