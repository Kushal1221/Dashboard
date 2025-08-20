import { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  const [analyticsData, setAnalyticsData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/analytics")
      .then((res) => setAnalyticsData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    analyticsData ? (
      <>
        <div className="app">
          <Header />
          <Dashboard />
          <Footer />
        </div>
      </>
    ) : (
      <>
        <h2>Loading...</h2>
      </>
    )
  );
}

export default App;
