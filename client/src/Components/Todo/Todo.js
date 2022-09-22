import Item from "./item/Item";
import './todo.css'
import {useSelector} from "react-redux";
import {Button, MenuItem, Pagination, Select, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import Spinner from "./spinner.gif";
import useFetcher from "../../hooks/useFetcher";
import usePagination from "../../hooks/usePagination";
import {useNavigate} from "react-router";
import {useState} from "react";

const Todo = () => {
    const [sortParam, setSortParam] = useState('username')
    const { isLoading, isError } = useFetcher(sortParam);

    const navigate = useNavigate()

    const {list} = useSelector((state) => state.todo);

    const {changePage, pageCount, range, itemCountInOnePage} = usePagination(list.length);

    if(isError){
        return(<Typography variant="h3" component="h3">
             Oops, something went wrong
            <Button type="button" onClick={() => navigate(0)}>Refresh</Button>
        </Typography>)
    }

    if(isLoading){
        return(<div className="spinner">
            <img src={Spinner} alt="spinner"/>
        </div>)
    }

    return(<div className="todoMain">
        <header className="header">
            <Typography variant="h3" component="h3">
                Todo
            </Typography>
            <Typography variant="h4" component="h4" className="createNew">
                <NavLink to="/create">Create new</NavLink>
            </Typography>
        </header>
        <Select
            label="Sort by"
            value={sortParam}
            onChange={(e) => setSortParam(e.target.value)}
        >
            <MenuItem value={'username'}>username</MenuItem>
            <MenuItem value={'email'}>email</MenuItem>
        </Select>
        <div className="wrapper">
            {list.slice(...range).map((item) => {
                const { email, username, id, content, isDone } = item;
                return(<Item email={email} username={username} content={content} id={id} key={id} isDone={isDone}/>)
            })}
        </div>
        { list.length > itemCountInOnePage ? (
            <div className="paginationWrapper">
                <Pagination
                    count={pageCount}
                    variant="outlined"
                    color="primary"
                    onChange={(event, page) => {
                        changePage(page)
                    }}
                />
            </div>) : null
        }
    </div>)
}

export default Todo;
