import MovieCard from "../components/MovieCard.jsx"


function Home(){

    const movies =[
        {id: 1, title: "The Matrix", release_date: "1999-03-31",url: "https://example.com/matrix.jpg"},
        {id: 2, title: "The Matrix 2", release_date: "2003-05-15",url: "https://example.com/matrix2.jpg"},
        {id: 3, title: "The Matrix 3", release_date: "2003-11-05",url: "https://example.com/matrix3.jpg"},
        {id: 4, title: "The Matrix 4", release_date: "2003-11-05",url: "https://example.com/matrix4.jpg"}
    ]

    const handleSubmit = () => {
    }


    return (
      <div className="Home">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>

        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );

    
}
export default Home;