import API from "api/API";
import { URLs } from "api/scripts";
import { useEffect } from "react";

function App() {
    const fetchTodo = async () => {
        const res = await API.get(URLs.mswTest.todos);
        console.log(res);
        return res;
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    return <div></div>;
}

export default App;
