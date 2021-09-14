import React,{useState} from "react";
import ShowDialog from "./ShowDialog";

export default function App() {
  const[dialog,setDialog]=useState(false);
const openDialog=()=>{
  setDialog(true);
}

  return (
    <>
      <div className="App" >
        <h1 style={{width:500, marginLeft: 594}}>Gida Technologies</h1>
        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Maps_Pin_FullColor.max-1000x1000.png"
          alt="landing"
          style={{width:500, marginLeft: 491}}
        />
        <hr/>
        <button type="button" className="btn btn-primary" onClick={openDialog}>Open Dialog</button> <small>Scroll Down</small><hr/>
        {dialog===true && <ShowDialog/>}
        
      </div>
      
    </>
  );
}


