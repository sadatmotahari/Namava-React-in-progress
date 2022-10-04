import "./style.css"
import Header from "./header/header";
import MovieList from "./movieList/movieList";
import LiveStream from "./liveStream/liveStream";
import Stars from "./stars/stars";
import * as data from "./data";
const {special, live, justNamava, news, updated, iranianSeries, doobleh, stars} = data;
export default function Merge(){
    return(
        <div className="root">
            <div className="movie">
                <Header/>
                <MovieList title="ویژه" listName={special}/>
                <LiveStream title="پخش زنده" listName={live}/>
                <MovieList title="سریال‌های اختصاصی نماوا" listName={justNamava}/>
                <MovieList title="تازه‌های نماوا" listName={news}/>
                <MovieList title="سریال‌های به روز شده" listName={updated}/>
                <MovieList title="سریال‌های ایرانی" listName={iranianSeries}/>
                <MovieList title="دوبله نماوا" listName={doobleh}/>
                <Stars title="ستارگان" listName={stars}/>
            </div>
        </div>
    )
}