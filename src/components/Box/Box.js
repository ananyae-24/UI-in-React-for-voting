import React from "react";
import classes from "./Box.module.css";
const box=(props)=>{
    let t=null;
    if (props.multi){
        t=<div><button className={props.active[0]==props.id?classes.btn_blue_active :classes.btn_blue} id={props.id} onClick={(e)=>{props.fuc(e,props.id,0)}}>1st </button>
        <button className={props.active[1]==props.id?classes.btn_yello_active :classes.btn_yello} id={props.id} onClick={(e)=>{props.fuc(e,props.id,1)}}>2nd </button>
        <button className={props.active[2]==props.id?classes.btn_green_active :classes.btn_green} id={props.id} onClick={(e)=>{props.fuc(e,props.id,2)}}>3rd </button></div>
    }
    else
    {
t=<button className={props.active[0]==props.id?classes.btn_blue_active :classes.btn_blue} id={props.id} onClick={(e)=>{props.fuc(e,props.id,0)}}>Vote </button>
    }
    return <div className={classes.Box}>
        <p>{props.name}</p>
        {t}
    </div>
}
export default box;