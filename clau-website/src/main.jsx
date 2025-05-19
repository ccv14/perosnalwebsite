import React from "react";
import ReactDOM from "react-dom/client";
// import { HelmetProvider } from "react-helmet-async"; // Ensure this is commented or removed
import App from "./App.jsx";
import "./index.css";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    if (
      error &&
      typeof error.message === "string" &&
      error.message.includes("Unable to preload CSS")
    ) {
      console.warn(
        "ErrorBoundary GDSFE: Tolerating CSS preload error for rendering purposes.",
        error.message
      );
      return { hasError: false };
    }
    console.warn(
      "ErrorBoundary GDSFE: Error did NOT match preload CSS string.",
      error ? error.message : error
    );
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary CDC: Caught an error:", error);
    console.log("ErrorBoundary CDC: Error message type:", typeof error.message);
    console.log(
      "ErrorBoundary CDC: Error message content:",
      error && error.message ? JSON.stringify(error.message) : String(error)
    );
    console.log("ErrorBoundary CDC: errorInfo:", errorInfo);
    this.setState({ error, errorInfo });
    if (
      !(
        error &&
        typeof error.message === "string" &&
        error.message.includes("Unable to preload CSS")
      )
    ) {
      this.setState({ hasError: true });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600">Please try refreshing the page</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> // Keep commented for now
  <ErrorBoundary>
    {/* <HelmetProvider> */}
    <App />
    {/* </HelmetProvider> */}
  </ErrorBoundary>
  // </React.StrictMode>
);
