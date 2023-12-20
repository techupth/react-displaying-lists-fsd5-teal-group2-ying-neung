import "./App.css";
import movies from "./data/movies";
import Moviescard from "./data/moviescard";
function App() {
  return (
    <div className="App">
      <section className="movie-list-section gap-10 flex flex-col justify-center items-center m-10">
      <h1 className=" text-3xl font-bold">Movie List Section</h1>
        {movies.map((item, index) => {
          return <Moviescard key={index} item={item} />;
        })}
      </section>
    </div>
  );
}

export default App;
