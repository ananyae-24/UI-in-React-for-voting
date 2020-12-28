import React, { Component } from "react";
import { connect } from "react-redux";
import Box from "../../components/Box/Box";
import classes from "./Voting.module.css";
class Voting extends Component {
  state = { candidates:null, voting: [], current: 0, active:[0,0,0] };
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
// console.log(this.state.active)
active[position]=id;
this.setState((prevState,props)=> {return {active}})
 console.log(this.state.active);
  }
  render() {
    let cur= this.state.candidates[this.state.voting[this.state.current]];
    let temp=[];
    for (let i=0;i<cur.length;i++)
    {
      temp.push(<Box multi={true} name={cur[i].name} id={cur[i].id} fuc={this.getactive} active={this.state.active} ></Box>);
    }
    return <div><p className={classes.center}>{this.state.voting[this.state.current]}</p><div className={classes.content}>{temp}</div><button className={classes.btn}>Submit</button></div>;
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
