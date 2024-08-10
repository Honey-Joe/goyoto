import ReactDOM from "react-dom/client";
import Body from "./components/Body/Body";
import "./index.css"


const Applayout = ()=>{
  return(
    <>
    <Body></Body>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout></Applayout>)