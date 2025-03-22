import axios from "axios";

export async function loadReportData(site, selectedType) {
    try {
        const reportResponse = await axios.get(
            `/api/report/${selectedType}/${site.site_id}`
        );

        const rawDataResponse = await axios.get(
            `/api/data/${selectedType}/${site.site_id}`
        );
        return {
            reportData: reportResponse.data,
            rawData: rawDataResponse.data,
        };
    } catch (error) {
        console.error("Failed to fetch response data:", error);
    }
}
