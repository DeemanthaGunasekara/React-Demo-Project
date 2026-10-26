import "./App.css"
import MovieCard from "./components/MovieCard"

function App() {
  return (
    <>
    <MovieCard movie={{title: "The Matrix", release_date: "1999-03-31",url: "https://example.com/matrix.jpg"}} />
    <MovieCard movie={{title: "The Matrix 2 ", release_date: "1999-03-35",url: "https://example.com/matrix.jpg"}} />
    </>
    
  );
}







export default App
