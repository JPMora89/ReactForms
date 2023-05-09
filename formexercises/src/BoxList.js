import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    };

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const boxComponents = boxes.map(box => (
        <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            color={box.color}
            removeBox={removeBox}
        />
    ));

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxComponents}
        </div>
    );
};

export default BoxList;
