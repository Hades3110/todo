import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getAll} from "../services/todoService";
import {changeTodo} from "../redux/todo/action";

const useFetcher = (sortParam) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        getAll(sortParam)
            .then((response) => {
                dispatch(changeTodo(response.data));
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [sortParam, dispatch]);

    return {
        isLoading,
        isError,
    }
}

export default useFetcher;
