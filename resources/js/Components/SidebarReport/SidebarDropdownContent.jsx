import "../../../css/Components/SidebarDropdownContent.css";

export default function DropdownContent({ isOpen, title, onToggle, children }) {
    return (
        <>
            {!isOpen ? (
                <div className="dropdown-menu">
                    <i className="bx bx-line-chart dropdown-title-icon"></i>
                    <h3 className="dropdown-title">{title}</h3>
                    <button
                        type="button"
                        title={`Toggle ${title}`}
                        onClick={onToggle}
                        className="dropdown-toggle-button"
                    >
                        <i className="bx bx-plus"></i>
                    </button>
                    <div className="dropdown-content">{children}</div>
                </div>
            ) : (
                <div className="dropdown-menu">
                    <i className="bx bx-line-chart dropdown-title-icon"></i>
                    <h3 className="dropdown-title">{title}</h3>
                    <button
                        type="button"
                        title={`Toggle ${title}`}
                        onClick={onToggle}
                        className="dropdown-toggle-button open"
                    >
                        <i className="bx bx-plus"></i>
                    </button>
                    <div className="dropdown-content open">{children}</div>
                </div>
            )}
        </>
    );
}
