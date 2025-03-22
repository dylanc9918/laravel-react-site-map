import React from "react";
import "../../css/Pages/Table.css";

export default function Table({ dendroSites = [] }) {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Site Name</th>
                        <th>Code</th>
                        <th>Drainage Basin</th>
                        <th>Province/Territory/State</th>
                        <th>Species Name</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Elevation (m)</th>
                        <th>Status</th>
                        <th>Measuring System</th>
                        <th>Lab Location</th>
                        <th>Notes</th>
                        <th>Date Collected</th>
                        <th>Site ID</th>
                    </tr>
                </thead>
                <tbody>
                    {dendroSites.map((site) => (
                        <tr key={site.site_id}>
                            <td>{site.site_name}</td>
                            <td>{site.code}</td>
                            <td>{site.drainage_basin}</td>
                            <td>{site.prov_terr_state}</td>
                            <td>{site.species_name}</td>
                            <td>{site.lat ? site.lat.toFixed(4) : ""}</td>
                            <td>{site.long ? site.long.toFixed(4) : ""}</td>
                            <td>{site.elevation_m}</td>
                            <td>{site.status}</td>
                            <td>{site.measuring_system}</td>
                            <td>{site.lab_location}</td>
                            <td>{site.notes}</td>
                            <td>{site.date_col}</td>
                            <td>{site.site_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
