import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from './FetchAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState(``);
  const { id } = useParams();

  useEffect(() => {
    async function showReviews() {
      try {
        const { data } = await fetchReviews(id);
        setReviews(
          data.results.map(({ author, content, id }) => {
            return (
              <div key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </div>
            );
          })
        );
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    showReviews();
  }, [id]);
  if (!reviews) {
    setReviews(
      <div>
        <p>Sorry, we don't have reviews for this movie</p>
      </div>
    );
  }
  return <div>{reviews}</div>;
};
export default Reviews;
