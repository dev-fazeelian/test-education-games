"use client";
import React from "react";

// Components
import { Header } from "@/components/Header"

// Styles for this component
import "@/assets/css/DragAndDropSimple.css";

// React Hooks
import { useState } from "react";

// React Beautiful DND Components
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DragAndDropSimple = () => {
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
        },
    ];

    const [ items, setItems ] = useState(initialItems);

    const onDragEnd = (result) => {
        if (!result.destination) return;
        
        const newItems = Array.from(draggedItems);
        const [draggedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, draggedItem);
    
        setItems(newItems);
    };

    return (
        <>
            {/* Header component */}
            <Header />

            {/* Content */}
            <main className="sect-content">
                <div className="title-view">
                    <h1>Drag and Drop - Simple </h1>
                </div>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="item-1" direction="vertical">
                        {(dropabbleProvided) => (
                            <ul 
                                {...dropabbleProvided.droppableProps} 
                                ref={dropabbleProvided.innerRef} 
                                className="cont-drag-drop-items--simple"
                            >
                                {items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(dragabbleProvided) => (
                                            <li 
                                                ref={dragabbleProvided.innerRef}
                                                {...dragabbleProvided.draggableProps} 
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

export default DragAndDropSimple;