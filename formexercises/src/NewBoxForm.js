import React, {useState} from 'react';
// import './NewBoxForm.css';





const NewBoxForm = ({addBox}) => {
    
    const initialState = {width: "", height: "", color: "" };
const [formData, setFormData] = useState(initialState);

const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
        ...formData,
        [name]: value
    }));
};

const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
};
    
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="width">Width:</label>
                <input 
                type="text" 
                name="width" 
                id="width"
                placeholder='Width'
                value={formData.width}
                onChange={handleChange} />
                
                <label htmlFor="height">Height:</label>
                <input 
                type="text" 
                name="height" 
                id="height"
                placeholder='Height'
                value={formData.height}
                onChange={handleChange} />
                
                <label htmlFor="color">Color:</label>
                <input 
                type="text" 
                name="color" 
                id="color"
                placeholder='Color'
                value={formData.color}
                onChange={handleChange} />
               
                <button>Add a new box!</button>
            </form>
        </div>
    );
};

export default NewBoxForm;