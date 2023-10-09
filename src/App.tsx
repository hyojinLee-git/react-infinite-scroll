import API from "api/API";
import { URLs } from "api/scripts";
import useQueryHook from "hooks/useQueryHook";

function App() {
    const fetchTodo = async () => {
        const res: string[] = await API.get(URLs.mswTest.todos);
        console.log(res);
        return res;
    };

    const { data } = useQueryHook(["fetch", "todo"], fetchTodo);

    return (
        <ul>
            {data?.map((v) => (
                <li key={v}>{v}</li>
            ))}
        </ul>
    );
}

export default App;
