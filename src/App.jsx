import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import cardData from "./cardData";
console.log(cardData);

function App() {
  const cards = cardData.map((item) => {
    return (
      <Card
        img={item.cardImg}
        alt={item.cardAlt}
        title={item.title}
        rating={item.stats.rating}
        reviews={item.stats.reviews}
        location={item.location}
        price={item.price}
      />
    );
  });
  return (
    <>
      <NavBar />
      <Hero />
      {cards}
    </>
  );
}

export default App;
