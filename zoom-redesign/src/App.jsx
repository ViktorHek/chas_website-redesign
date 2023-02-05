import Nav from "./pages/nav";
import Hero from "./pages/Hero";
import Mwlw from "./pages/Mwlw";
import Poaig from "./pages/Poaig";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div
        style={{ height: "105px", width: "100%", backgroundColor: "#0b5cff", position: 'relative' }}
        className="center">
        <img
          src="https://st1.zoom.us/static/6.3.11147/image/home2/zoom-products.png"
          alt="zoooooom"
          style={{ width: "30%" }}
        />
      </div>
      <Mwlw />
      <Poaig />
    </div>
  );
}

export default App;
