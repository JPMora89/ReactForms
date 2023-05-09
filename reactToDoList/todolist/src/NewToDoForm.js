import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';

const NewToDoForm = ({addTodo}) => {
    const INITIAL_STATE = {task: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const newTodo = {...formData, id: uuid()};
        addTodo(newTodo);
        setFormData(INITIAL_STATE);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task:</label>
                <input

                    type="text"
                    name="task"
                    id="task"
                    placeholder='Task'
                    value={formData.task}
                    onChange={handleChange} />

                <button>Add a new task!</button>
            </form>
        </div>
    );


}

export default NewToDoForm;