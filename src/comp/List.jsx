import React, { Component } from 'react';
import './css/list.css';
import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
class List extends Component {
  state = {  }
  handelCheckbox(l){
    let inputLet;
    if(!l.completed){inputLet = <input type="checkbox" className="lsCheckbox" onClick={()=>this.props.handelListTask(l)}/>;}
    else if(l.completed){inputLet = <input type="checkbox" className="lsCheckbox" onClick={()=>this.props.handelListTask(l)} defaultChecked={true}/>;}
    return inputLet;
  }
  handelBgColor(l){return 'list_shell bor flex bg-'+l.color;}
  render() { 
    return (
      <div className={this.handelBgColor(this.props.list)}>
        <div className="lsRoom1 bor flex aic">
          {this.handelCheckbox(this.props.list)}
        </div>
        <div className="lsRoom2 bor fg1 flex aic">
          {this.props.list.title}
        </div>
        {/* <div className="lsRoom3 borx">
          <BiEditAlt className='cup'/>
        </div> */}
        <div className="lsRoom4 bor flex jcc aic">
          <AiOutlineDelete className='lsDeleteIcon cup' onClick={()=>this.props.handelDelete(this.props.list)}/>
        </div>
      </div>
    );
  }
}
export default List;