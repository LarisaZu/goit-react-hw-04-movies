import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/movies-api';
import { options } from '../services/movies-api';
import profileImg from '../image/profile.jpg';
import s from './css/MovieDetails.module.css';

const CastView = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchMovieCast(movieId).then(response => setCast(response.cast));
    }, [movieId]);

    return (
        <>
            {cast && (
                <ul>
                    {cast.map(profile => (
                        <li key={profile.id}>
                            <img
                                src={
                                    profile.profile_path
                                        ? `${options.IMG_URL}w200${profile.profile_path}`
                                        : profileImg
                                }
                                alt={`${profile.name}`}
                                className={s.profile}
                            />
                            <h5>{profile.name}</h5>
                            <p>Character: {profile.character}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default CastView;
