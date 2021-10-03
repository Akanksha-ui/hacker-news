import "./Stories.css";

const Link = ({ url, title }) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Stroies = ({ story }) => {
  const { id, by, title, kids, time, url } = story;
  return (
    <div className="story_tile">
      <div className="story_title">
        <Link url={url} title={title} />
      </div>
      <div className="story_info">
        <span>
          by
          <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} />
        </span>
        |
        <span>
          {new Date(time * 1000).toLocaleDateString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </span>
        |
        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
};

export default Stroies;
