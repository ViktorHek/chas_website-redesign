import Nav from "./pages/nav";
import Hero from "./pages/Hero";
import Mwlw from "./pages/Mwlw";
import Poaig from "./pages/Poaig";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <div
          style={{
            height: "105px",
            width: "100%",
            backgroundColor: "#0b5cff",
            position: "relative",
          }}
          className="center">
          <img
            src="https://st1.zoom.us/static/6.3.11147/image/home2/zoom-products.png"
            alt="zoooooom"
            style={{ width: "30%" }}
          />
        </div>
        <Mwlw />
        <Poaig />
      </main>
      <Footer />
    </div>
  );
}

export default App;
