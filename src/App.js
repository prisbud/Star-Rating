import StarRating from "./Components/StarRating";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Star Ratings</h1>
      <StarRating starCount={6} />
    </div>
  );
}
