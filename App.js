// Created Nested React Elements
    const heading1 = React.createElement( "h1", {  },  "Namaste Everyone !!!");
    const heading2 = React.createElement("h2", { }, "Namaste!!!");
    const container = React.createElement("div", {  }, [heading1, heading2]);

// Create Root using createroot
    const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing react element inside root
    root.render(container);
