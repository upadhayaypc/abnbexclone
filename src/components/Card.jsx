function Card(props) {
  return (
    <div className="card">
      <img
        src={`./public/images/` + props.img}
        alt={props.alt}
        className="card--image"
      />
      <CardLineContent
        rating={props.rating}
        reviews={props.reviews}
        location={props.location}
      />
      <p>{props.title}</p>
      <p>
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
