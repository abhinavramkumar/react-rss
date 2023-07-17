import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const HomeFeed = lazy(() => import("./pages/HomeFeed"));
const AddFeeds = lazy(() => import("./pages/AddFeeds"));
const Login = lazy(() => import("./pages/Login"));
const Page = lazy(() => import("./components/Page"));
const Signup = lazy(() => import("./pages/Signup"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ChooseInterests = lazy(() => import("./pages/ChooseInterests"));
const Intro = lazy(() => import("./pages/Intro"));
const Settings = lazy(() => import("./pages/Settings"));
const SplashScreen = lazy(() => import("./pages/SplashScreen"));
const Search = lazy(() => import("./pages/Search"));
const PageWithDock = lazy(() => import("./components/PageWithDock"));
const FeedDetail = lazy(() => import("./pages/FeedDetail"));

export default function App() {
  return (
    <Page>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/choose-interests" element={<ChooseInterests />} />
            <Route
              path="/home-feed"
              element={
                <PageWithDock>
                  <HomeFeed />
                </PageWithDock>
              }
            />
            <Route
              path="/feed/:feedID"
              element={
                <PageWithDock>
                  <FeedDetail />
                </PageWithDock>
              }
            />
            <Route path="/add-feeds" element={<AddFeeds />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/settings"
              element={
                <PageWithDock>
                  <Settings />
                </PageWithDock>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Page>
  );
}
