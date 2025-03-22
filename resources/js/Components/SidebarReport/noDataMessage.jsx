import React from "react";

export default function NoDataMessage({ setIsSidebarOpen }) {
    return (
        <>
            <button
                type="button"
                title="Close Sidebar"
                onClick={function handleCloseSidebar() {
                    setIsSidebarOpen(false);
                }}
                className="close-btn"
            >
                <i className="bx bx-chevrons-right"></i>
            </button>

            <h2 className="no-data-warning">
                No Data available for this site please select another
            </h2>
        </>
    );
}
