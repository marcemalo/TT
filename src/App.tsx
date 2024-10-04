import Like from "./routes/Like";
import Home from "./routes/Home";
import Single from "./routes/Single";


import { Route, Routes } from "react-router-dom";



import "./utils/app.css";






function App() {

  

  return (
    <>




 

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/like" element={<Like />} />
        <Route path="/single:id" element={<Single />} />

      </Routes>




    </>
  );
}

export default App;
