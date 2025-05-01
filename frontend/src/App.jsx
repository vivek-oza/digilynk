import "./App.css";
import React, { useEffect } from "react";
import DigilynkRoutes from "./lib/Routes";
import { Toaster } from "react-hot-toast";
import ClickSpark from "./components/reactbits/Animations/ClickSpark/ClickSpark";

function App() {
  return (
    <>
      <ClickSpark
        // sparkColors={["#3B82F6", "#10B981", "#8B5CF6"]} // Blue, Green, Purple
        sparkColors={["#3B82F6"]} // Blue
        sparkSize={10}
        sparkRadius={20}
        sparkCount={8}
        duration={400}
      >
        <DigilynkRoutes />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </ClickSpark>
    </>
  );
}

export default App;
