import "../../css/Pages/Map.css";
import "leaflet/dist/leaflet.css";
import useFilteredDendroSites from "../Hooks/useFilteredDendrosites.jsx";
import FilterDropdown from "../Components/Map/Dropdown.jsx";
import { handleMarkerClick } from "../helpers/Map/handleMarkerClick.jsx";
import CenterMap from "../helpers/Map/centerMap.jsx";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "boxicons/css/boxicons.min.css";
import L from "leaflet";
import treeIcon from "../../../public/tree-icon.webp";
import treeSelectIcon from "../../../public/tree-icon-selected.png";
import Report from "../Components/SidebarReport/Report.jsx";

const defaultIcon = L.icon({
    iconUrl: treeIcon,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -42],
});

const selectedIcon = L.icon({
    iconUrl: treeSelectIcon,
    iconSize: [52, 52],
    iconAnchor: [26, 52],
    popupAnchor: [0, -52],
});

//MAP COMPONENT//////////////////////////////////////////////////////////////////
export default function Map({ dendroSites }) {
    const [map, setMap] = useState(null);

    const [filters, setFilters] = useState({
        species_name: undefined,
        siteType: undefined,
        status: undefined,
    });

    const [activeMarker, setActiveMarker] = useState(null);
    const [markerPosition, setMarkerPosition] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const filteredDendroSites = useFilteredDendroSites(dendroSites, filters);

    const selectedSite = dendroSites.find(
        (site) => site.site_id === activeMarker
    );

    const closeAllPopups = () => {
        if (map) {
            map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    layer.closePopup();
                }
            });
        }
    };

    useEffect(() => {
        if (!isSidebarOpen) {
            setActiveMarker(null);
            closeAllPopups();
        }
    }, [isSidebarOpen]);

    return (
        <div className="leaflet-container">
            <FilterDropdown
                filters={filters}
                setFilters={setFilters}
                dendroSites={dendroSites}
            />
            <MapContainer
                center={[56.1304, -106.3468]}
                zoom={5}
                zoomControl={false}
                closePopupOnClick={true}
                ref={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CenterMap position={markerPosition} />
                {filteredDendroSites.map((site) =>
                    site.lat !== null && site.long !== null ? (
                        <Marker
                            key={site.site_id}
                            icon={
                                activeMarker === site.site_id
                                    ? selectedIcon
                                    : defaultIcon
                            }
                            position={[site.lat, site.long]}
                            zIndexOffset={
                                activeMarker === site.site_id ? 1000 : 0
                            }
                            eventHandlers={{
                                mouseover: (e) => {
                                    e.target.openPopup();
                                },
                                mouseout: (e) => {
                                    if (activeMarker !== site.site_id) {
                                        e.target.closePopup();
                                    }
                                },
                                click: (e) => {
                                    handleMarkerClick(
                                        site,
                                        activeMarker,
                                        setActiveMarker,
                                        setMarkerPosition,
                                        setIsSidebarOpen,
                                        isSidebarOpen
                                    );
                                    closeAllPopups();
                                    e.target.openPopup();
                                },
                            }}
                        >
                            <Popup autoClose={false}>
                                <strong>Site: </strong>
                                {site.site_name}
                                <br />
                                <strong>Tree Species: </strong>
                                {site.species_name}
                                <br />
                                <strong>Drainage Basin: </strong>
                                {site.drainage_basin}
                            </Popup>
                        </Marker>
                    ) : null
                )}
            </MapContainer>
            <Report
                selectedSite={selectedSite}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            ;
        </div>
    );
}
