import TrendingMoviesView from './TrendingMoviesView';
import PageHeading from '../components/PageHeading/PageHeading';

const HomeView = () => {
    return (
        <div>
            <PageHeading text="Trending Today" />
            <TrendingMoviesView />
        </div>
    );
};

export default HomeView;
