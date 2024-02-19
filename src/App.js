import {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import ProfileRoutes
    from "./routes/profileRoutes/ProfileRoutes";
import AuthenticationRoutes
    from "./routes/authenticationRoutes/AuthenticationRoutes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProfileRoutes />
          <AuthenticationRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
