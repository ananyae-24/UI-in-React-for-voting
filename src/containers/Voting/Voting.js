import React, { Component } from "react";
import { connect } from "react-redux";
import Box from "../../components/Box/Box";
import classes from "./Voting.module.css";
class Voting extends Component {
  state = { candidates:null, voting: [], current: 0, active:[0,0,0] , final:[], submit:false, btnstate:true, code:null, loading:false};
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.current !== this.props.current ||
      this.state.voting !== nextState.voting
    )
      return true;
    return false;
  }
  componentWillMount() {
    let voting = [];
    for (let i in this.props.candidates) {
      voting.push(i);
    }
    this.setState({ candidates: this.props.candidates, voting });
  }
  getactive=(e,id,position)=>{
 let active=this.state.active;
 if(id == active[0] || id == active[1] || id == active[2]){}
 else
 {active[position]=id;
 this.setState((prevState,props)=> {return {active}})

 if(this.state.candidates[this.state.voting[this.state.current]][0].multi==true){
   let t=true;
   t=this.state.active[0]!=0;
   t=this.state.active[1]!=0;
   t=this.state.active[2]!=0;
    this.setState(()=>{return{btnstate:!t}});
 }
 else{
  let t=true;
  t=this.state.active[0]!=0;
  this.setState(()=>{return{btnstate:!t}});
 }}
  }
pushtofinal =()=>{
 let final=this.state.final;
 final.push(this.state.active[0]);
 final.push(this.state.active[1]);
 final.push(this.state.active[2]);
 if(this.state.current== this.state.voting.length-1)
 {
 this.setState((prevState,props)=>{return{
 final,
 active:[0,0,0],
 current:prevState.current+1,
 submit:true
 }});
 console.log(this.state);
}
 else{ 
   this.setState((prevState,props)=>{return{
  final,
  active:[0,0,0],
  current:prevState.current+1,
  btnstate:true
  }});
  console.log(this.state);
}

  }
  code=(e)=>{
    this.setState((prevState,props)=>{
      return{code:e.target.value};
    })
  }
  back=()=>{
    this.setState((prevState,props)=>{
      return {
        current:0,
        final:[],
        active:[],
        submit:false,
      }
    });
  }
  render() {
    if (!this.state.submit)
    {
    let cur= this.state.candidates[this.state.voting[this.state.current]];
    let temp=[];
    let t=cur[0].multi;
    for (let i=0;i<cur.length;i++)
    {
      temp.push(<Box key={cur[i].id} multi={t} name={cur[i].name} id={cur[i].id} fuc={this.getactive} active={this.state.active} ></Box>);
    }
    return <div><p className={classes.center}>{this.state.voting[this.state.current]}</p><div className={classes.content}>{temp}</div><button className={classes.btn} onClick={this.pushtofinal} disabled={this.state.btnstate}>Submit</button></div>;
    }
    else {
    return <div className={classes.standardbox}><p className={classes.heading_}>Submit your vote</p><p>Enter Code:</p><input className={classes.input_} onChange={this.code}></input><br/><button className={classes.btn_back} onClick={this.back}>Back</button><button className={classes.finalsubmit}>Submit</button></div>;
  }
  }
}
let mapStateToProps = (state) => {
  return {
    candidates: state.candidates,
  };
};
// mapStateToProps=dispatch=> ({

// })
export default connect(mapStateToProps, null)(Voting);
