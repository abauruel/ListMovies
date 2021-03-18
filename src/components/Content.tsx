import { MovieCard } from '../components/MovieCard';

type Movies = {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
type GenreProps ={
  title: string;
}
type ContentProps = {
  movies: Movies[],
  selectedGenre: GenreProps
}
export function Content({movies, selectedGenre}: ContentProps) {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
  </div>
  )
}