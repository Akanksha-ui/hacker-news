import "./pages.css";
import { useState, useEffect } from "react";
import Stroies from "../component/Stories/Stories";
import { getStories } from "../utils/api";

const Job = () => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories("job")
      .then((stories) => {
        console.log(stories);
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            {isLoading ? (
              <p className="loading">Loading...</p>
            ) : (
              stories.map(({ data: story }) => (
                <Stroies key={story.id} story={story} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Job;
