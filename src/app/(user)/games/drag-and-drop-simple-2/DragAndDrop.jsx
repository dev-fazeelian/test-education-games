// React Beautiful Dnd components
import { DragDropContext } from "react-beautiful-dnd";

// React hooks
import { useState } from "react";

// Components
import { DroppableItems } from "./DroppableItems";

const DragAndDrop = () => {
    const [ items, setItems ] = useState(false);

    // On Drag End Function
    const onDragEnd = (result) => {
        if (!result.destination) return;
        
        const newItems = Array.from(setItems);
        const [draggedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, draggedItem);
    
        setItems(newItems);
    };

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <DroppableItems 
                id="droppable-1"
            />
        </DragDropContext>
    )
}

export { DragAndDrop };