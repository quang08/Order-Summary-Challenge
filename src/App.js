import Summary from "./components/Summary";

function App() {
  return (
    <div className="bg-blue-200/50 w-screen h-screen flex items-center justify-center">
      <div className="w-1/2 h-3/4 flex items-center justify-center">
        <div className="md:max-w-lg h-3/4 w-full text-center">
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default App;
