function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`./public/images/` + props.cardImg}
        alt={props.cardAlt}
        className="card--image"
      />
      <CardLineContent
        rating={props.stats.rating}
        reviews={props.stats.reviews}
        location={props.location}
      />
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

function CardLineContent(childProps) {
  return (
    <div className="card--stats">
      <img
        className="card--star"
        src="./public/images/gbnb-red-star.png"
        alt="card-star"
      />

      <span>{childProps.rating}</span>
      <span className="gray">({childProps.reviews}) . </span>
      <span className="gray">{childProps.location}</span>
    </div>
  );
}

export default Card;
