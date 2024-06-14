// App.jsx
import React, { createContext, useState } from "react";
import First from "./components/First";
import HappyBirthday from "./components/HappyBirthday";

const PageContext = createContext();

function App() {
  const [activePage, setActivePage] = useState("first");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <PageContext.Provider value={{ activePage, handlePageChange }}>
      <div className="app">
        <Navigation />
        <PageContext.Consumer>
          {(context) => {
            const { activePage } = context;

            return (
              <>
                {activePage === "first" && <First />}
                {activePage === "happybirthday" && <HappyBirthday />}
                {/* Add other pages here */}
              </>
            );
          }}
        </PageContext.Consumer>
      </div>
    </PageContext.Provider>
  );
}

export default App;
