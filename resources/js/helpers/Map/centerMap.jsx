import { useMap } from "react-leaflet";
import { useRef } from "react";

import { usePrevious } from "@uidotdev/usehooks";

/// This function centers the map on the selected tree site
export default function CenterMap({ position }) {
    const refMap = useMap();
    const prevPosition = useRef(null);

    const targetPoint = refMap.getSize().multiplyBy(0.6);

    prevPosition.current = usePrevious(position);

    console.log("positions", position);
    console.log("prevPositions", prevPosition.current);

    if (position) {
        if (JSON.stringify(position) === JSON.stringify(prevPosition.current)) {
            console.log("same position");
            return null;
        }

        const targetCoord = refMap.containerPointToLatLng(targetPoint);

        refMap.flyTo([position[0], position[1] + 1.5], 9);
    }

    return null;
}
