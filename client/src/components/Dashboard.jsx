import React from "react";
import Card from "./Card";
import PlChart from "./PlChart";
import RecentTrades from "./RecentTrades";

function Dashboard({ analyticsData }) {
  return (
    <div className="">
      <div className="dashboard-border text-white">
        <div className="bashboard">
          <div className="mb-25">
            <h1 className="text-center text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
              Dashboard
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-25 px-4 md:px-20">
            <div>
              <h4 className="text-md md:text-lg text-gray-300 mb-2">
                Win Rate
              </h4>
              <div className="flex items-center justify-center gap-2">
                {analyticsData?.totals?.winRatePct >= 50 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7-7-7"
                    />
                  </svg>
                )}
                <p className="text-xl md:text-2xl font-bold">
                  {analyticsData?.totals?.winRatePct}%
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-md md:text-lg text-gray-300 mb-2">
                Profit Factor
              </h4>
              <div className="flex items-center justify-center gap-2">
                {analyticsData?.totals?.profitFactor >= 1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7-7-7"
                    />
                  </svg>
                )}
                <p className="text-xl md:text-2xl font-bold">
                  {analyticsData?.totals?.profitFactor}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-md md:text-lg text-gray-300 mb-2">
                Average Return
              </h4>
              <div className="flex items-center justify-center gap-2">
                {analyticsData?.totals?.averageReturnPct >= 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7-7-7"
                    />
                  </svg>
                )}
                <p className="text-xl md:text-2xl font-bold">
                  {analyticsData?.totals?.averageReturnPct}%
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-md md:text-lg text-gray-300 mb-2">
                Max Drawdown
              </h4>
              <div className="flex items-center justify-center gap-2">
                {analyticsData?.totals?.maxDrawdownPct <= 10 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7-7-7"
                    />
                  </svg>
                )}
                <p className="text-xl md:text-2xl font-bold">
                  {analyticsData?.totals?.maxDrawdownPct}%
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] px-4 md:px-20 gap-6 items-stretch">

            <div className="flex flex-col gap-10">
              <PlChart analyticsData={analyticsData} />

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <Card
                  data1={{
                    label: "Total Trades",
                    value: analyticsData?.totals?.totalTrades,
                  }}
                  data2={{
                    label: "Longest Win Streak",
                    value: analyticsData?.totals?.longestWinStreak,
                  }}
                />
                <Card
                  data1={{
                    label: "Winning Trades",
                    value: analyticsData?.totals?.winningTrades,
                  }}
                  data2={{
                    label: "Longest Loss Streak",
                    value: analyticsData?.totals?.longestLossStreak,
                  }}
                />
                <Card
                  data1={{
                    label: "Losing Trades",
                    value: analyticsData?.totals?.losingTrades,
                  }}
                  data2={{
                    label: "Sharpe Ratio",
                    value: analyticsData?.totals?.sharpeRatio,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col h-full">
                <RecentTrades trades={analyticsData?.recent10Trades} />
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
