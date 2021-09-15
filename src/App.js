import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container/Container';
import Appbar from './components/Appbar/AppBar';

const HomeView = lazy(() => import('./views/HomeView'));
const MoviesByQueryView = lazy(() => import('./views/MoviesByQueryView'));
const MovieDetailsView = lazy(() => import('./views/MovieDetailsView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));

function App() {
    return (
        <Container>
            <Appbar />
            <Suspense fallback={<h1>LOADING...</h1>}>
                <Switch>
                    <Route path="/" exact>
                        <HomeView />
                    </Route>
                    <Route path="/movies/:movieId">
                        <MovieDetailsView />
                    </Route>
                    <Route path="/movies" exact>
                        <MoviesByQueryView />
                    </Route>

                    <Route>
                        <NotFoundView />
                    </Route>
                </Switch>
            </Suspense>
        </Container>
    );
}

export default App;
