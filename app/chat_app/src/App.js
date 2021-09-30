import Header from "./components/Header";
import Button from "./components/Button";
import MessageInput from "./components/MessageInput";

function App() {
  return (
    <div className="App">
      <Header />
      <MessageInput messageInputName="Message" messageInputID="messageInputID" />
      <Button title="Send" />
    </div>
  );
}

export default App;
