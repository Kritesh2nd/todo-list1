import React, { Component } from 'react';
import './css/navbar.css';
class Navbar extends Component {
  state = {  } 
  render() { 
    return (
      <div className='navbar_shell bor flex'>
        <div className="nsRitDiv bor flex">
          <div className="nsTitleListA bor cup" onClick={()=>this.props.handelListtype('typea')}>List</div>&nbsp;&nbsp;
          <div className='nsListACount bor flex jcc aic'>
            <span className="nsListACountSpan bor">
              {this.props.listacount}
            </span>
          </div>
        </div>
        <div className="nsLftDiv bor flex">
        <div className="nsTitleListB bor cup" onClick={()=>this.props.handelListtype('typeb')}>Completed</div>&nbsp;&nbsp;
          <div className='nsListBCount bor flex jcc aic'>
            <span className="nsListBCountSpan flex jcc aic">
              {this.props.listbcount}
            </span> 
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;