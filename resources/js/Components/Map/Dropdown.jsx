import React from "react";
import { Dropdown } from "primereact/dropdown";
import "../../../css/Components/Dropdown.css";

export default function FilterDropdown({ filters, setFilters, dendroSites }) {
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const uniqueTreeSpecies = Array.from(
        new Set(dendroSites.map((site) => site.species_name))
    ).filter((species_name) => species_name !== null);

    const statusValues = Array.from(
        new Set(dendroSites.map((site) => site.status))
    ).filter((status) => status !== null);

    return (
        <div className="filter-bar">
            <div className="custom-dropdown">
                <i className="bx bxs-tree"></i>
                <Dropdown
                    name="species_name"
                    placeholder="All Tree Species"
                    value={filters.species_name}
                    options={uniqueTreeSpecies}
                    onChange={handleFilterChange}
                    showClear
                />
            </div>
            <div className="custom-dropdown">
                <i className="bx bx-notepad"></i>
                <Dropdown
                    name="status"
                    placeholder="Site Status"
                    value={filters.status}
                    options={statusValues}
                    onChange={handleFilterChange}
                    showClear
                />
            </div>
        </div>
    );
}
