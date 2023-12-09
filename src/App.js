import "./App.css";

import { Routes, Route } from "react-router-dom";

import Exit from "./components/Exit";
import EnterInfo from "./components/EnterInfo";
import DataDisplay from "./components/DataDisplay";
import Chat from "./components/Chat";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/exit" element={<Exit />} />
        <Route exact path="/" element={<EnterInfo />} />
        <Route exact path="/data" element={<DataDisplay />} />
      </Routes>
      
    </>
  );
}

export default App;
