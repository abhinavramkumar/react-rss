import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeFeed from "./pages/HomeFeed";
import GettingStarted from "./pages/GettingStarted";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeFeed />} /> {/* 👈 Renders at /app/ */}
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/add-opml-file" element={<GettingStarted />} />
        <Route path="/add-rss-url" element={<GettingStarted />} />
      </Routes>
    </BrowserRouter>
  );
}
