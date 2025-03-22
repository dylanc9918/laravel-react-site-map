import axios from "axios";

export async function handleMarkerClick(
    site,
    activeMarker,
    setActiveMarker,
    setMarkerPosition,
    setIsSidebarOpen,
    isSidebarOpen
) {
    if (activeMarker === site.site_id && isSidebarOpen) {
        // If the same marker is clicked, do nothing
        return;
    }

    setActiveMarker(site.site_id);
    setMarkerPosition([site.lat, site.long]);

    setIsSidebarOpen(true);
}
