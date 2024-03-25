package pl.project.firstproject.movieclub.domain.movie;

import org.springframework.stereotype.Service;
import pl.project.firstproject.movieclub.domain.movie.dto.MovieDto;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    //metoda, która pozwoli pobrać wszystkie promowane filmy.
    public List<MovieDto> findAllPromotedMovies() {
        return movieRepository.findAllByPromotedIsTrue().stream()
                .map(MovieDtoMapper::map)
                .toList();
    }
}
