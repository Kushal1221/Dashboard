import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function PlChart({ analyticsData }) {
  const currency = (n) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
      <div className="rounded-md border bg-white px-3 py-2 shadow text-sm">
        <div className="font-medium">Day {label}</div>
        <div className="text-gray-600">
          Equity: ${currency(payload[0].value)}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-4">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-5">
        P/L Breakdown
      </h3>
      <div className="h-64 sm:h-72 md:h-80 lg:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={analyticsData?.equityCurve || []}>
            <CartesianGrid stroke="#E5E7EB" vertical={false} />
            <XAxis
              dataKey="t"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickFormatter={(v) => `${currency(v)}`}
              width={64}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="equity"
              stroke="#2563EB"
              fill="#93C5FD"
              fillOpacity={0.35}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PlChart;
