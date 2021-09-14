import React, { useState, useEffect } from "react";
import "@reach/dialog/styles.css";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import fyGr from "./assets/fyGr.gif";
import Graph from "./Graph";

const ShowDialog = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [gif, setGif] = useState(false);
  const [graph, setGraph] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setGif(1);
    }, 7000);
    return () => clearTimeout(timeout);
  }, [gif]);

  // const buttonRef = React.useRef();
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const showgif = () => {
    setGif(true);
  };
  const showgraph = () => {
    setGraph(true);
  };
  const handleClose = () => setGraph(false);

  return (
    <>
      <div>
        <button type="button" className="btn btn-primary" onClick={open}>Show Dialog</button>

        <DialogOverlay isOpen={showDialog} onDismiss={close}>
          <DialogContent
            style={{
              border: "solid 5rem hsla(0, 0%, 0%, 0.5)",
              borderRadius: "10rem",
            }}
          >
            <img
              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Maps_Pin_FullColor.max-1000x1000.png"
              alt="landing"
              style={{width:500, textAlign:"center"}}
            />
            <button type="button" className="btn btn-info" onClick={showgif}>Show GIF</button> <span/>
            {gif === true && <img src={fyGr} alt="loading...." />}
            
            <button type="button" className="btn btn-info" onClick={showgraph}>Show Graph</button> <hr/>
            <br />
            {graph === true && <Graph />}
            <button type="button" className="btn btn-info" onClick={handleClose}>Hide</button> <span/>
            
            <button type="button" className="btn btn-info" onClick={close}>Close</button>
          </DialogContent>
        </DialogOverlay>
      </div>
    </>
  );
};

export default ShowDialog;
