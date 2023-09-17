import { getCreditsById } from "Api/api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export const Cast = () => {
    const [Credits, setCredits] = useState({})
    const { movieId } = useParams();
    const id = movieId.slice(1)
    useEffect(() => {
        getCreditsById(id)
        .then(resp => setCredits(resp))
        .catch(err => console.log(err))
      }, [])
    return <div>
<ul>
{Credits.cast && Credits.cast.length > 0 ? (
                    Credits.cast.map(actor => (
                        <li key={actor.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                                width="250px"
                                alt={actor.name}
                            />
                            <p>{actor.name}</p>
                            <p>{actor.character}</p>
                        </li>
                    ))
                ) : (
                    <p>There are no cast</p>
                )}
</ul>
    </div>
}