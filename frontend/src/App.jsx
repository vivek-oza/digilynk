import "./App.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import DigilynkRoutes from "./lib/Routes";
import { Toaster } from "react-hot-toast";
import ClickSpark from "./components/reactbits/Animations/ClickSpark/ClickSpark";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <ClickSpark
        sparkColors={["#fff"]}
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
              background: "var(--toast-bg, #333)",
              color: "var(--toast-color, #fff)",
            },
          }}
        />
      </ClickSpark>
    </ThemeProvider>
  );
}

export default App;
