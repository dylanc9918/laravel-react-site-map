import { useState, useEffect } from "react";

const useFilteredDendroSites = (dendroSites, filters) => {
    const [filteredDendroSites, setFilteredDendroSites] = useState(dendroSites);

    useEffect(() => {
        let filteredData = dendroSites;

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                filteredData = filteredData.filter(
                    (site) => site[key] === value
                );
            }
        });

        setFilteredDendroSites(filteredData);
    }, [filters, dendroSites]);

    return filteredDendroSites;
};

export default useFilteredDendroSites;
