"use client";

import React from "react";

// Components
import { Header } from "@/components/Header"

// Styles for this component
import "@/assets/css/DragAndDropSimple.css";

// Components
import { DragAndDrop } from "./DragAndDrop";

const DragAndDropSimple = () => {
    return (
        <>
            {/* Header component */}
            <Header />

            {/* Content */}
            <main className="sect-content">
                <div className="title-view">
                    <h1>Drag and Drop - Simple 2 </h1>
                </div>

                {/* Drag and Drop Component */}
                <DragAndDrop />
            </main>
        </>
    )
}

export default DragAndDropSimple;