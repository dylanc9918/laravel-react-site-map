import {
    Bar,
    Line,
    Area,
    XAxis,
    YAxis,
    Legend,
    Tooltip,
    ComposedChart,
    ReferenceLine,
} from "recharts";
import { useState, useEffect } from "react";
import "../../../css/Components/timeSeriesGraph.css";

export default function TimeSeries({ rawData }) {
    const [activeSeries, setActiveSeries] = useState(["res", "ars"]);

    const handleLegendClick = (dataKey) => {
        if (activeSeries.includes(dataKey)) {
            setActiveSeries(activeSeries.filter((el) => el !== dataKey));
        } else {
            setActiveSeries((prev) => [...prev, dataKey]);
        }
    };

    const [processedData, setProcessedData] = useState([]);

    useEffect(() => {
        const newData = rawData.map((item) => ({
            ...item,
            dvd: (item.raw / item.std).toFixed(3),
        }));
        setProcessedData(newData);
    }, [rawData]);

    return (
        <ComposedChart width={900} height={400} data={processedData}>
            <Area
                yAxisId="right"
                type="monotone"
                dataKey="num"
                name="Sample Depth"
                stroke="#2C2C2C"
                fill="#e6e6e6"
                opacity={0.3}
                hide={activeSeries.includes("num")}
                dot={false}
            />
            <Bar
                yAxisId="left"
                dataKey="dvd"
                name="Division Difference"
                fill="#c3b095"
                stroke="#c3b095"
                hide={activeSeries.includes("dvd")}
            />
            <Line
                yAxisId="left"
                type="monotone"
                dataKey="raw"
                name="Raw Data"
                stroke="#488A99"
                hide={activeSeries.includes("raw")}
                dot={false}
            />
            <Line
                yAxisId="left"
                type="monotone"
                dataKey="std"
                name="Standardized Data"
                stroke="#AC3E31"
                hide={activeSeries.includes("std")}
                dot={false}
            />
            <Line
                yAxisId="left"
                type="monotone"
                dataKey="res"
                name="Residual"
                stroke="#8000FF"
                hide={activeSeries.includes("res")}
                dot={false}
            />
            <Line
                yAxisId="left"
                type="monotone"
                dataKey="ars"
                name="Autoregressive "
                stroke="#32CD32"
                hide={activeSeries.includes("ars")}
                dot={false}
            />
            <ReferenceLine
                y={1}
                stroke="black"
                strokeDasharray="3 3"
                yAxisId={"left"}
            />

            <XAxis
                dataKey="year"
                label={{ value: "Year", dy: 15, fontSize: 15 }}
            />
            <YAxis
                yAxisId="left"
                label={{
                    value: "RWI",
                    angle: -90,
                    position: "insideLeft",
                    fontSize: 15,
                }}
            />
            <YAxis
                yAxisId="right"
                orientation="right"
                tick={true}
                label={{
                    value: "Samp Depth",
                    angle: 90,
                    position: "outsideRight",
                    fontSize: 15,
                }}
            />
            <Tooltip />
            <Legend
                layout="horizontal"
                verticalAlign="top"
                align="center"
                stroke="black"
                onClick={(props) => handleLegendClick(props.dataKey)}
            />
        </ComposedChart>
    );
}
