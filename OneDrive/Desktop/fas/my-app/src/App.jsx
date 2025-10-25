import "./main.css";
import Header from "./components/Header";
import Ethiopian from "./components/Ethiopian";
import data from "./components/data";

function App() {
  const homeElements = data.map((item) => {
    return (
      <Ethiopian
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <>
      <Header />
      {homeElements}
    </>
  );
}

export default App;
