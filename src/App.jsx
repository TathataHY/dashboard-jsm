import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import { useStateContext } from "./contexts/context-provider";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pie,
  Pyramid,
  Stacked,
} from "./pages";

function App() {
  const {
    activeMenu,
    themeSettings,
    currentMode,
    setThemeSettings,
    currentColor,
    setCurrentColor,
    setCurrentMode,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  useEffect(() => {
    const elements = document.querySelectorAll(
      'div[style*="position: fixed;"][style*="background: #EEF2FF;"]'
    );
    elements.forEach((element) => {
      element.style.display = "none";
    });
  }, []);

  return (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <BrowserRouter>
          <div className="relative flex dark:bg-main-dark-bg">
            <div className="right-4 bottom-4 fixed" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  className="hover:bg-light-gray hover:drop-shadow-xl p-3 text-3xl text-white"
                  style={{ background: currentColor, borderRadius: "50%" }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="fixed bg-white dark:bg-secondary-dark-bg w-72 sidebar">
                <Sidebar />
              </div>
            ) : (
              <div className="dark:bg-secondary-dark-bg w-0">
                <Sidebar />
              </div>
            )}
            <div
              className={`bg-main-bg dark:bg-main-dark-bg w-full min-h-screen 
                ${activeMenu ? "md:ml-72" : "flex-2"}`}
            >
              <div className="md:static fixed bg-main-bg dark:bg-main-dark-bg w-full navbar">
                <Navbar />
              </div>

              <div>
                {themeSettings && <ThemeSettings />}

                <Routes>
                  {/* Dashboard */}
                  <Route path="/" element={<Ecommerce />} />
                  <Route path="/ecommerce" element={<Ecommerce />} />

                  {/* Pages */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* Apps */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                  {/* Charts */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
