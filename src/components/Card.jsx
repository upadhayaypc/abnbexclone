function Card() {
  return (
    <div className="card">
      <img
        src="./images/gbnb-katie-zaferes.png"
        alt="card-image"
        className="card--image"
      />
      <CardLineContent />
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}

function CardLineContent() {
  return (
    <div className="card--stats">
      <img
        className="card--star"
        src="./images/gbnb-red-star.png"
        alt="card-star"
      />

      <span>5.0</span>
      <span className="gray">(6) . </span>
      <span className="gray">USA</span>
    </div>
  );
}

export default Card;
