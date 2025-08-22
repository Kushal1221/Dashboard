import React from "react";

function RecentTrades({ trades }) {
  return (
    <div className="rounded-xl border border-gray-600 overflow-hidden bg-gray-900/40 flex flex-col h-full">

      <h3 className="px-4 py-3 text-lg font-semibold text-white border-b border-gray-600">
        Recent 10 Trades
      </h3>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse h-full">
          <thead>
            <tr className="text-sm text-gray-400">
              <th className="px-4 py-2 font-medium">Date</th>
              <th className="px-4 py-2 font-medium">Side</th>
              <th className="px-4 py-2 font-medium">Return</th>
              <th className="px-4 py-2 font-medium">P/L</th>
            </tr>
          </thead>
          <tbody>
            {trades?.map((trade, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-700 text-sm hover:bg-gray-800/50 transition-colors"
              >
                <td className="px-4 py-2 text-gray-300">{trade.date}</td>
                <td className="px-4 py-2 font-medium text-gray-300">{trade.side}</td>
                <td
                  className={`px-4 py-2 font-medium ${
                    trade.returnPct > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {trade.returnPct > 0
                    ? `+${trade.returnPct}%`
                    : `${trade.returnPct}%`}
                </td>
                <td className="px-4 py-2 text-gray-300">{trade.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentTrades;
