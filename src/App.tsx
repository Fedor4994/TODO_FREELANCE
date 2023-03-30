import GlobalStyle from "./global";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import CategoriePage from "./Pages/Categorie";
import ProtectedRoute from "./Routes/Route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute priv={true}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute priv={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categorie/:name"
          element={
            <ProtectedRoute priv={true}>
              <CategoriePage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
