import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <SearchEngine city="New York" />
      <p>
        Code is open-sourced, by Katharina Ramer.{" "}
        <a
          href="https://github.com/supertramp222/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          {""}View on GitHub
        </a>
      </p>
    </div>
  );
}
