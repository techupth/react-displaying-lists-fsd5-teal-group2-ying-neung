import movies from "./movies";
import App from "../App";

function MovieCard({
  item: { image,title, year, runtime, genres, imdbRating, imdbVotes },
}) {
  return (
    
    <div className= " shadow-md w-[500px] p-4 flex gap-10 font-medium ">
    <div>
    <img className=" w-[100px] h-[80px] rounded-xl" src={image}></img>
    </div>
    <div className="flex flex-col gap-2">
      <p>Title: {title}</p>
      <p> Year: {year}</p>
      <p> Runtime: {runtime}</p>
      <div className=" flex gap-2 items-center flex-wrap"> Genres:{genres.map((item)=>(<p className=" bg-red-200 p-2 rounded-xl ">{item}</p>))}</div>
      <p> IMDB Ratings: {imdbRating}</p>
      <p> IMDB Votes: {imdbVotes}</p>
      </div>
      </div>
    
  );
}

export default MovieCard;
