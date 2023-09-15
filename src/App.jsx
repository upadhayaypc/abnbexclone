import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import cardData from "./cardData";
console.log(cardData);

function App() {
  const cards = cardData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <NavBar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
