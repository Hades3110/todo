import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getAll} from "../services/todoService";
import {changeTodo} from "../redux/todo/action";

const useFetcher = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getAll()
            .then((response) => {
                dispatch(changeTodo(response.data));
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    return {
        isLoading,
        isError,
    }
}

export default useFetcher;
