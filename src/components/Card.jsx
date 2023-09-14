function Card() {
  return (
    <section>
      <img src="./images/gbnb-card.png" alt="card" />
      <CardLineContent />
    </section>
  );
}

function CardLineContent() {
  return (
    <section>
      <img
        className="cardLineContent cardLineContent--img"
        src="./images/gbnb-red-star.png"
        alt="red-star"
      />
      <span className="cardLineContent">5.0</span>
      <span className="cardLineContent">6</span>
      <span className="cardLineContent">(USA)</span>
    </section>
  );
}

export default Card;
