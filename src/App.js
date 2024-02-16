import {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import ProfileRoutes
    from "./routes/profileRoutes/ProfileRoutes";
function App() {
    useEffect(() => {
        fetch(`https://localhost:8443/`,
            {method: 'GET'}).then(
            res => {
                console.log(res)
                res.text().then(data => {console.log(data)})
            }
        )
    }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ProfileRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
