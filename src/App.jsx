import Counter from "./components/Counter.jsx";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-stone-100 p-20 text-center flex flex-col justify-center items-center">
        <h1 className="text-stone-600 font-bold text-6xl">
          useReducer hook in React
        </h1>
        <p className="text-stone-400 mt-8 text-xl font-light">
          Implementing useReducer hook as an alternative to useState hook
        </p>
      </header>
      <main className="bg-white p-20 flex-grow">
        <Counter />
      </main>
      <footer className="bg-stone-100 p-2 text-center flex flex-col justify-center items-center">
        <p className="text-sm font-light text-stone-400">
          &copy; useReducer hook in React
        </p>
      </footer>
    </div>
  );
};

export default App;
