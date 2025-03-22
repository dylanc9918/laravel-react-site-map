import "../../../css/Components/tableStatSummary.css";

export default function TableStatSummary({ reportData }) {
    const tableMapping = {
        "c.eff": "Effective Cores",
        eps: "Expressed Population Signal",
        n: "Sample Size",
        "n.bt": "Unique BT Combinations",
        "n.cores": "Number of Cores",
        "n.tot": "Total Unique Combinations",
        "n.trees": "Number of Trees",
        "n.wt": "Unique WT Combinations",
        "rbar.bt": "Mean Correlation (Different Trees)",
        "rbar.eff": "Effective Signal",
        "rbar.tot": "Mean Correlation (All Cores)",
        "rbar.wt": "Mean Correlation (Same Tree)",
        snr: "Signal-to-Noise Ratio",
    };
    return (
        <>
            {reportData.map((item, index) => (
                <div key={index} className="report-item">
                    {Object.keys(item).map((key) => (
                        <div key={key} className="report-item-row">
                            <h2>{tableMapping[key] || key}:</h2>{" "}
                            <div className="value">{item[key]}</div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}
