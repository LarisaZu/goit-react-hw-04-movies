import { Switch, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import Appbar from './components/Appbar/AppBar';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import NotFoundView from './views/NotFoundView';
import MovieDetailsView from './views/MovieDetailsView';
import CastView from './views/CastView';
import ReviewsView from './views/ReviewsView';

function App() {
    return (
        <Container>
            <Appbar />
            <Switch>
                <Route path="/" exact>
                    <HomeView />
                </Route>
                <Route path="/movies" exact>
                    <MoviesView />
                </Route>
                <Route path="/movies/:movieId" exact>
                    <MovieDetailsView />
                </Route>
                <Route path="/movies/:movieId/cast">
                    <CastView />
                </Route>
                <Route path="/movies/:movieId/reviews">
                    <ReviewsView />
                </Route>
                <Route>
                    <NotFoundView />
                </Route>
            </Switch>
        </Container>
    );
}

export default App;
