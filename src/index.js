import  ReactDOM  from "react-dom/client";
import Counter from "./components/counter/Counter";
import TaskList from "./components/lists/TaskList";
import Settings from "./components/settings/Settings";

function App() {
    return(
        <div>
            <TaskList />
            {/* <Settings /> */}
            <Counter />
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)