import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {changeTodo, deleteTodo} from "../../../services/todoService";
import './item.css'
import {useDispatch} from "react-redux";
import {changeIsDone, deleteItem} from "../../../redux/todo/action";

const Item = ({email, username, content, id, isDone}) => {

    const dispatch = useDispatch();

    const onDelete = () => {
        deleteTodo(id);
        dispatch(deleteItem(id));
    }

    const onChangeToDone = () => {
        changeTodo({id, isDone: true, content, email, username})
        dispatch(changeIsDone(id))
    }

    return(<>
        <Card className="main" >
            <CardContent>
                <Typography variant="h5" component="h5">
                    {username}
                </Typography>
                <Typography variant="caption" component="p">
                    {isDone? "DONE" : "IN PROGRESS"}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {email}
                </Typography>
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color={"error"} size="small" onClick={() => onDelete()}>Delete</Button>
                {isDone? null : <Button color="success" size="small" onClick={() => onChangeToDone()}>Done!</Button>}
            </CardActions>
        </Card>
    </>)
}

export default Item
