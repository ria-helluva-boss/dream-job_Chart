import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Full-stack developer", 2],
  ["Rock Star", 2],
  ["Racer", 2],
  ["WWE Wrestler", 2],
  ["Screenwriter at Romance Club", 2],
  ["Pirate", 14],
];

export const options = {
  title: "My Dream Job",
};
function App() {
  return (
    <div className="App">
<Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
