import React from 'react';
// import './Box.css';

const Box = ({ id, width, height, color, removeBox }) => {
    const remove = () => removeBox(id);
    return (
        <div>
        <div
            className="Box"
            style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: color
            }}
        />
        <button onClick={remove}>X</button>
        </div>
    );
    };

export default Box;