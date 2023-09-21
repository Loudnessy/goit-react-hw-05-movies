import { getMovieReviews } from "Api/api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Reviews = () => {
    const [Reviews, setReviews] = useState({})
    const { movieId } = useParams();
    const id = movieId.slice(1)
    useEffect(() => {
        getMovieReviews(id)
        .then(resp => setReviews(resp))
        .catch(err => console.log(err))
      }, [id])
    return <div>
<ul>
    {Reviews.results && Reviews.results.length > 0 ? Reviews.results.map(review => 
    <li>
        <h2>{review.author}</h2>
        <p>{review.content}</p>
        </li>
    ) : <li>There are no reviews</li>}
</ul>
    </div>
}
export default Reviews