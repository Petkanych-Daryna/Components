import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Message from "./components/Message";

function App() {
  const handleClick = () => {
    console.log("Кнопку натиснуто!");
  };

  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Ласкаво просимо до мого React додатку!" />
      <Button onClick={handleClick} />
    </div>
  );
}

export default App;
