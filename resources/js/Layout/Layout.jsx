import { Link } from "@inertiajs/react";
import "../../css/Layout.css";
import "boxicons/css/boxicons.min.css";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <div className="navbar-container">
                        <div className="title">
                            <i className="bx bx-book-open"></i>
                            <span id="title">PARC Database Navigator</span>
                        </div>
                        <Link href="/map" className="nav-link">
                            <i className="bx bx-map-alt"></i>
                            <span>Tree Site Map</span>
                        </Link>
                        <Link href="/table" className="nav-link">
                            <i className="bx bx-list-ul"></i>
                            <span>Tree Site Database</span>
                        </Link>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </>
    );
}
