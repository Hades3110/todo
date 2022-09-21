import {useForm} from "react-hook-form";
import {createTodo} from "../../services/todoService";
import {addItem} from "../../redux/todo/action";
import {useDispatch} from "react-redux";
import {useState} from "react";

const useTodoForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const dispatch = useDispatch();

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: '',
            email: '',
            content: '',
            isDone: false,
        }
    })

    const onSubmit = (newTodo) => {
        createTodo(newTodo)
            .then(() => {
                dispatch(addItem(newTodo))
                setIsSuccess(true)
            })
    }

    return {
        onSubmit: handleSubmit(onSubmit),
        register,
        errors,
        emailPattern,
        isSuccess
    }
}

export default useTodoForm;
