import React from "react";

const   ButtonWithProgress = (props) =>{
return(
<button className="btn btn-primary" onClick={
    props.onChlick}
disabled={
    props.disabled}
>

  {props.pendingApiCall && (
<div className ="spinner-border text-light spinner-border-sm mr-1" >
  <span className="sr-only">Loading...</span>
</div>
)}
{props.text}
</button>

)   ; 
};

export default ButtonWithProgress;