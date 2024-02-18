import {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import ProfileRoutes
    from "./routes/profileRoutes/ProfileRoutes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ProfileRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
