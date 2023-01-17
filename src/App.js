import "./index.scss";
import React from "react";
import Modal from "./components/Modal";

function App() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="App">
            <button onClick={() => setOpen(true)} className="open-modal-btn">
                ✨ Відкрити вікно
            </button>
            <Modal open={open} setOpen={setOpen}>
                <img src="https://media.tenor.com/3X9_AycN5R8AAAAC/angry-birds.gif" />
            </Modal>
        </div>
    );
}

export default App;
