import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
