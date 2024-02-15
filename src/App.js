import {useEffect} from "react";

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
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
