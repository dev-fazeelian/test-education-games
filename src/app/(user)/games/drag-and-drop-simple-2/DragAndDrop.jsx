// React Beautiful Dnd components
import { DragDropContext } from "react-beautiful-dnd";

// React hooks
import { useState } from "react";

// Components
import { DroppableItems } from "./DroppableItems";

// Initial Items list
import ItemsList from "./ItemsList";

const DragAndDrop = () => {
    const [ items, setItems ] = useState(ItemsList);

    // On Drag End Function
    const onDragEnd = (result) => {
        // the item will return to it's position when it's out of the available drag and drop container (DragDropContext)
        if (!result.destination) return;
        
        // Dragged Items []
        const newItems = Array.from(items);

        const [draggedItem] = newItems.splice(result.source.index, 1); // use of splice for change an item index - position
        newItems.splice(result.destination.index, 0, draggedItem); // insertion of new item
    
        setItems(newItems); // save changes
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