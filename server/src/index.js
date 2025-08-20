import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


const analyticsData = {
  totals: {
    totalTrades: 76,
    winningTrades: 44,
    losingTrades: 32,
    winRatePct: 57.8,
    averageReturnPct: 3.7,
    profitFactor: 2.31,
    maxDrawdownPct: 12.4,
    sharpeRatio: 1.56,
    longestWinStreak: 5,
    longestLossStreak: 3,
    plCurrency: 1320,
    plPercent: 22.5,
  },
  equityCurve: [
    { t: "1", equity: 320 },
    { t: "2", equity: 520 },
    { t: "3", equity: 680 },
    { t: "4", equity: 920 },
    { t: "5", equity: 860 },
    { t: "6", equity: 1340 },
    { t: "7", equity: 1220 },
    { t: "8", equity: 1500 },
    { t: "9", equity: 1440 },
    { t: "10", equity: 1800 },
  ],
  recent10Trades: [
    { id: "T1", date: "2023-04-24", side: "LONG", returnPct: 2.2, pnl: 50 },
    { id: "T2", date: "2023-04-20", side: "SHORT", returnPct: 3.9, pnl: 80 },
    { id: "T3", date: "2023-04-16", side: "LONG", returnPct: 1.6, pnl: 30 },
    { id: "T4", date: "2023-04-13", side: "SHORT", returnPct: 3.6, pnl: 70 },
    { id: "T5", date: "2023-04-16", side: "LONG", returnPct: 2.5, pnl: 60 },
    { id: "T6", date: "2023-04-16", side: "SHORT", returnPct: 2.4, pnl: 55 },
    { id: "T7", date: "2023-04-16", side: "LONG", returnPct: 3.1, pnl: 65 },
    { id: "T8", date: "2023-04-14", side: "LONG", returnPct: -5.8, pnl: -120 },
    { id: "T9", date: "2023-04-13", side: "LONG", returnPct: -9.8, pnl: -210 },
    { id: "T10", date: "2023-04-13", side: "LONG", returnPct: 2.8, pnl: 55 },
  ],
};


app.get("/analytics", (req, res) => {
  try {
    res.json(analyticsData);
  } catch (err) {
    res.status(500).json({ error : "Dailed to fetch analytics data" });
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
