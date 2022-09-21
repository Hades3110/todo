import {Box, Button, FormHelperText, Modal, TextareaAutosize, TextField, Typography} from "@mui/material";
import './createTodo.css'
import {useNavigate} from "react-router";
import useTodoForm from "./useTodoForm";
import {NavLink} from "react-router-dom";

const CreateTodo = () => {

    const navigate = useNavigate();

    const {onSubmit, register, errors, emailPattern, isSuccess } = useTodoForm();

    if(isSuccess){
        return(
            <Modal open>
                <Box className="success">
                    <Typography variant="h6" component="h2">
                        Success
                    </Typography>
                    <Button onClick={() => navigate('/')}>
                        Go to list
                    </Button>
                </Box>
            </Modal>
        )
    }

    return(<div className="createMain">
        <Typography variant="h3" component="h3" className="createHeader">
            <NavLink to="/">Todo</NavLink>
        </Typography>
        <form className="form"  onSubmit={onSubmit}>
            <div className="inputWrapper">
                <TextField
                    {...register('email', { required: true, pattern: emailPattern })}
                    label="e-mail"
                    color="secondary"
                    style={{width: 300}}
                />
                {errors.email ? <FormHelperText style={{ color: "red" }}>EMAIL IS NOT VALID</FormHelperText> : null}
            </div>

            <div className="inputWrapper">
                <TextField
                    {...register('username', { required: true })}
                    label="username"
                    color="secondary"
                    style={{width: 300}}/>
                {errors.username ? <FormHelperText style={{ color: "red" }}>USERNAME IS NOT VALID</FormHelperText> : null}
            </div>

            <div className="inputWrapper">
                <TextareaAutosize
                    {...register('content', { required: true })}
                    placeholder="write content"
                    style={{ width: 290, height: 200, padding: 10}}
                />
                {errors.content ? <FormHelperText style={{ color: "red" }}>CONTENT IS NOT VALID</FormHelperText> : null}
            </div>

            <Button type="submit">Create</Button>
        </form>
    </div>)
}

export default CreateTodo
