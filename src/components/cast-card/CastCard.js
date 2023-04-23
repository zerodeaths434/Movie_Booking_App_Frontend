import "./CastCard.css";

function CastCard({ img, actor_name, character }) {
  return (
    <div className="castCard">
      <img src={`https://image.tmdb.org/t/p/original/${img}`} />
      <h1>{actor_name}</h1>
      {character && <div>as {character}</div>}
    </div>
  );
}

export default CastCard;
