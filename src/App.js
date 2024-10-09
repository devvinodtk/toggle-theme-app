import AuthProvider from "./AuthProvider";
import Dashboard from "./Dashboard";
import ThemeProvider from "./ThemeProvider";

function App() {
  return (
      <AuthProvider>
        <ThemeProvider>
          <Dashboard />
        </ThemeProvider>
      </AuthProvider>
  );
}

export default App;
