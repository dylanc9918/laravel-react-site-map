import "../../../css/Components/Report.css";
import "../../../css/Components/SiteInfo.css";
import "boxicons/css/boxicons.min.css";
import { useState, useEffect } from "react";
import DropdownContent from "./SidebarDropdownContent";
import { loadReportData } from "../../helpers/SidebarReport/loadReportData";
import NoData from "./noDataMessage";
import TimeSeries from "./timeSeriesGraph";
import TableStatSummary from "./tableStatSummary";

export default function Report({
    selectedSite,
    isSidebarOpen,
    setIsSidebarOpen,
}) {
    const [loading, setLoading] = useState(false);
    const [isGraphOpen, setIsGraphOpen] = useState(true);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [selectedType, setSelectedType] = useState("rwdata");
    const [reportData, setReportData] = useState([]);
    const [rawData, setRawData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const { reportData, rawData } = await loadReportData(
                    selectedSite,
                    selectedType
                );
                setReportData(reportData);
                setRawData(rawData);
            } catch (error) {
                console.error("Error fetching report data:", error);
            }
            setLoading(false);
        }

        if (selectedSite) {
            fetchData();
        }
    }, [selectedSite, selectedType]);

    if (rawData.length === 0) {
        return (
            <div className={isSidebarOpen ? "sidebar active" : "sidebar"}>
                <div className={loading ? "loading" : "not-loading"}></div>

                <NoData setIsSidebarOpen={setIsSidebarOpen} />
            </div>
        );
    }

    return (
        <div className={isSidebarOpen ? "sidebar active" : "sidebar"}>
            <div className={loading ? "loading" : "not-loading"}></div>
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
            <div className="rwi-type">
                <select
                    // className="rwi-type"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                >
                    <option value="rwdata">Ringwidth</option>
                    <option value="lwdata">Latewood</option>
                    <option value="ewdata">Earlywood</option>
                </select>
            </div>
            <DropdownContent
                isOpen={isGraphOpen}
                title={"Time Series Comparing Standardized and Raw Data"}
                onToggle={function toggleGraph() {
                    setIsGraphOpen(!isGraphOpen);
                }}
            >
                {isGraphOpen && <TimeSeries rawData={rawData} />}
            </DropdownContent>
            {/* <DropdownContent
                isOpen={isSummaryOpen}
                title={"Statstical Summary of Tree Site"}
                onToggle={function toggleSummary() {
                    setIsSummaryOpen(!isSummaryOpen);
                }}
            >
                <TableStatSummary reportData={reportData} />
            </DropdownContent> */}
        </div>
    );
}
