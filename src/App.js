import "./App.css";
import { Row } from "./Component/Row";
import requests from "./requests";
import { Banner } from "./Component/Banner";
import { Nav } from "./Component/Nav";
function App() {
  return (
    <div className="app">
      <Nav />

      <Banner />
      <Row
        title="NETFLIX ORIGIONAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
