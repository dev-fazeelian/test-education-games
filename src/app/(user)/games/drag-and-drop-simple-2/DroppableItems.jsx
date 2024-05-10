// React Beautiful DND Components
import { Draggable, Droppable } from "react-beautiful-dnd";

// Items List
import ItemsList from "./ItemsList";

// React Hooks
import { useState } from "react";

// Styles for this component
import "@/assets/css/DragAndDropSimple.css";

const DroppableItems = (props) => {
    // Items State
    const [ items, setItems ] = useState(ItemsList);

    return(
        <Droppable droppableId={props.id} direction="vertical">
            {(droppableProvided) => (
                <div
                    {...droppableProvided.droppableProps} 
                    ref={droppableProvided.innerRef} 
                    className="cont-drag-drop-items--simple"
                >
                    {/* Mapping all Items */}
                    {items.map((item, index) => (
                        <Draggable draggableId={item.id} key={item.id} index={index}>
                            {(draggableProvided) => (
                                <div
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.draggableProps} 
                                    {...draggableProvided.dragHandleProps}
                                    className="drag-drop-item--simple"
                                >
                                    {item.content}
                                </div>
                            )}
                        </Draggable>
                    ))}
                </div>
            )}
        </Droppable>
    )
}

export { DroppableItems };