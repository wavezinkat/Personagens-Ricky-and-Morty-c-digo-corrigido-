import reactDom from "react-dom/client";
import List from "./components/List";
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
    return (
        <div className="container">
            <h1>Ricky and Morty</h1>
            <List />
        </div>
    );
};

const container = document.getElementById('root');
const root = reactDom.createRoot(container);

root.render(<App />);

