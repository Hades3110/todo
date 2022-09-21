import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import Todo from "../Components/Todo/Todo";
import CreateTodo from "../Components/CreateTodo/CreateTodo";

const RoutePages = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Todo />} />
            <Route path='/create' element={<CreateTodo />} />
        </Routes>
    </Router>
)

export default RoutePages
