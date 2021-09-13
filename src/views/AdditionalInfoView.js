import { Link, useParams, useRouteMatch } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import CastView from './CastView';
import ReviewsView from './ReviewsView';

const AdditionalInfoView = () => {
    // const { movieId } = useParams();
    const { url } = useRouteMatch();
    // console.log(urrl);
    // console.log(ddr);
    return (
        <>
            <PageHeading text="Additional Information" />
            <ul>
                <li>
                    <Link to={`${url}/cast`}>Cast</Link>
                </li>
                <li>
                    <Link to={`${url}/reviews`}>Reviews</Link>
                </li>
            </ul>
        </>
    );
};

export default AdditionalInfoView;
