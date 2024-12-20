import { Route, Routes } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import ChatPage from "./components/pages/ChatPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/chats" element={<ChatPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
