import { lazy, Suspense } from 'react';
import { Route, NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import s from './css/MovieDetails.module.css';

const CastView = lazy(() =>
    import('./CastView' /* webpackChunkName: "cast-view" */),
);
const ReviewsView = lazy(() =>
    import('./ReviewsView' /*webpackChunkName: "reviews-view"*/),
);

const AdditionalInfoView = () => {
    const location = useLocation();
    const { url, path } = useRouteMatch();

    return (
        <>
            <h5>Additional Information</h5>
            <ul className={s.infoList}>
                <li>
                    <NavLink
                        to={{
                            pathname: `${url}/cast`,
                            state: { from: { ...location?.state?.from } },
                        }}
                        className={s.link}
                        activeClassName={s.activeLink}
                    >
                        Cast
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={{
                            pathname: `${url}/reviews`,
                            state: { from: { ...location?.state?.from } },
                        }}
                        className={s.link}
                        activeClassName={s.activeLink}
                    >
                        Reviews
                    </NavLink>
                </li>
            </ul>
            <Suspense fallback={<h1>LOADING...</h1>}>
                <Route path={`${path}/cast`}>
                    <CastView />
                </Route>
                <Route path={`${path}/reviews`}>
                    <ReviewsView />
                </Route>
            </Suspense>
        </>
    );
};

export default AdditionalInfoView;
