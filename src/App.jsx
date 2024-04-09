import "./App.css";
import CurrencyConvertor from "./components/currency-convertor";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="container">
        <CurrencyConvertor />


      </div>
      <div className="font-semibold text-blue-700 relative top-9 mb-0 py-0">Made by Rakshith K N</div>
    </div>
  );
}

export default App;
