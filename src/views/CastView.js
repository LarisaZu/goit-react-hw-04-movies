import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieCast } from '../services/movies-api';
import { options } from '../services/movies-api';
import profileImg from '../image/profile.jpg';

// const imageUrl = 'https://image.tmdb.org/t/p/w200';

const CastView = () => {
    const [cast, setCast] = useState(null);

    useEffect(() => {
        fetchMovieCast(649087).then(response => setCast(response.cast));
    }, []);
    console.log(cast);
    return (
        <>
            <h1>cast</h1>
            {cast &&
                cast.map(profile => (
                    <li key={profile.id}>
                        <img
                            src={
                                profile.profile_path
                                    ? `${options.IMG_URL}w200${profile.profile_path}`
                                    : profileImg
                            }
                            alt={`${profile.name}`}
                        />
                        <h5>{profile.name}</h5>
                        <p>Character: {profile.character}</p>
                    </li>
                ))}
        </>
    );
};

export default CastView;
