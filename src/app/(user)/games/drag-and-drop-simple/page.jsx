"use client";

// Components
import { Header } from "@/components/Header"

// Styles for this component
import "@/assets/css/DragAndDropSimple.css";

// React Hooks
import { useState } from "react";

// React Beautiful DND Components
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialItems = [
    {
        id: "1",
        text: "Item 1"
    },
    {
        id: "2",
        text: "Item 2"
    },
    {
        id: "3",
        text: "Item 3"
    },
    {
        id: "4",
        text: "Item 4"
    }
];

export default function DragAndDropSimple () {
    const [ items, setItems ] = useState(initialItems);

    return(
        <>
            {/* Header component */}
            <Header />
            <main className="sect-content">
                <DragDropContext onDragEnd={(result) => console.log(result)}>
                    <div className="title-view">
                        <h1>Drag and Drop - Simple </h1>
                    </div>
                    <Droppable droppableId="items">
                        {(dropabbleProvided) => (
                            <ul 
                                {...dropabbleProvided.droppableProps} 
                                ref={dropabbleProvided.innerRef} 
                                className="cont-drag-drop-items--simple"
                            >
                                {items.map((item, index) => (
                                    <Draggable key={items.id} draggableId={item.id} index={index}>
                                        {(dragabbleProvided) => (
                                            <li 
                                                {...dragabbleProvided.draggableProps} 
                                                ref={dragabbleProvided.innerRef}
                                                {...dragabbleProvided.dragHandleProps}
                                                className="drag-drop-item--simple"
                                            >
                                                {item.text}
                                            </li>
                                        )}
                                    </Draggable>
                                ))}
                                {dropabbleProvided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </main>
        </>
    )
}