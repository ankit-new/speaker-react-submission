import React, { useState } from "react";
import AddSpeakerSidebar from "./components/AddSpeakerSidebar";
import { Button } from "@mui/material";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div
      style={{
        width: "120px",
        height: "79px",
        position: "absolute",
        top: "121px",
        left: "120px",
        gap: "16px",
        opacity: 1,
      }}
    >
      <p
        style={{
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "21px",
          textAlign: "left",
          color: "#575757",
        }}
      >
        Add Speaker
      </p>

      <Button
        sx={{
          width: "120px",
          height: "42px",
          borderRadius: "10px",
          background: "#E4875D",
          border: "none",
          color: "white",
          padding: "2px 10px",
          fontSize: "small",
          textTransform: "math-auto"
        }}
        onClick={handleSidebarOpen}
      >
        Add Speaker
      </Button>
      {sidebarOpen && (
        <AddSpeakerSidebar open={sidebarOpen} onClose={handleSidebarClose} />
      )}
    </div>
  );
}

export default App;

// ent.style {
//   width: 120px;
//   height: 42px;
//   border-radius: 10px;
//   background: #E4875D;
//   border: none;
//   color: white;
// }

// style={{
//   width: '120px',
//   height: '79px',
//   position: 'absolute',
//   top: '121px',
//   left: '120px',
//   gap: '16px',
//   opacity: 1,
// }}
