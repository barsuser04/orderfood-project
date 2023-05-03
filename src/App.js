import "./App.css";
import Header from "./components/header/Header";
import MealSummary from "./components/meal-summary/MealSummary";
import SummaryCard from "./components/summaryCard/SummaryCard";

function App() {
  return (
    <div className="App">
      <Header />
      <MealSummary />
      <SummaryCard />

    </div>
  );
}

export default App;
