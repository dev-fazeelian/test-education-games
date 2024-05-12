"use client";

// Components
import { Header } from "@/components/Header"

// Styles for this component
import "@/assets/css/DragAndDropToDo.css";

// React Hooks
import React, { useState } from "react";

// React Beautiful DND Components
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// Items
const tasks = [
    { id: "1", content: "Task 1" },
    { id: "2", content: "Task 2" },
    { id: "3", content: "Task 3" },
    { id: "4", content: "Task 4" },
    { id: "5", content: "Task 5" }
];

// Columns
const taskStatus = {
    requested: {
        name: "Requested",
        items: tasks
    },
    toDo: {
        name: "To do",
        items: []
    },
    inProgress: {
        name: "In Progress",
        items: []
    },
    done: {
        name: "Done",
        items: []
    }
};

// On Drag End Function
const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);

        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);

        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};

function DragAndDropSplitted() {
    const [columns, setColumns] = useState(taskStatus);

    return (
        <>
            {/* Header component */}
            <Header />

            {/* Content */}
            <main className="sect-content">
                <div className="title-view">
                    <h1>Drag and Drop - To Do</h1>
                </div>

                <section className="drag-drop-section">
                    <DragDropContext
                        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
                    >
                        {Object.entries(columns).map(([columnId, column], index) => {
                            return (
                                <div
                                    style={{
                                        textAlign: 'center',
                                    }}
                                    key={columnId}
                                >
                                    
                                {/* Column Item map */}
                                <h2 style={{fontWeight: "lighter", fontSize: 22, }}>{column.name}</h2>
                                <div className="columns-cont">
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                // Column Item
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        background: snapshot.isDraggingOver
                                                            ? "#F2E922"
                                                            : "#F2D022",
                                                    }}
                                                    className="column"
                                                >

                                                {/* Items Map */}
                                                {column.items.map((item, index) => {
                                                    return (
                                                        // Item
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            backgroundColor: snapshot.isDragging
                                                                                ? "#A7A7A7"
                                                                                : "#D9D9D9",
                                                                            ...provided.draggableProps.style
                                                                        }}
                                                                        className="item-styles"
                                                                    >
                                                                    {item.content}
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                            );
                        })}
                    </DragDropContext>
                </section>
            </main>
        </>
  );
}

export default DragAndDropSplitted;