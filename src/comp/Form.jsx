import React, { Component } from 'react';
import './css/form.css';
class Form extends Component {
  state = {  }
  handelBgColor = (bg) =>{
    const bgColorBtn = <div
      key={bg.id} 
      className={'fsBgColBnt bg-'+bg.col+' cup '+bg.bor} 
      onClick={()=>this.props.handelTodoBg(bg)}
    ></div>
    return bgColorBtn;
  }
  render() { 
    return (
      <div className='form_shell flex fdc'>
        <div className="fsInputDiv bor mb5">
          <input type="text" className="fsInput w100" onChange={this.props.handelTodoTitle} placeholder='your new todo...'/>
        </div>
        <div className="fsBgColorDiv bor mb5 flex">
          <div className="fsiBgColorDiv bor flex pt5">
            {this.props.bgcolor.map(bg => this.handelBgColor(bg))}
          </div>
        </div>
        <div className="fsBtnAddDiv bor mb5">
          <button className="fsBtnAdd w100 cup" onClick={()=>this.props.handelNewTodo('add')}>Add</button>
        </div>
        <div className="fsBtnCancelDiv bor mb5">
          <button className="fsBtnCancel w100 cup" onClick={()=>this.props.handelFloorList('list')}>Cancel</button>
        </div>
      </div>
    );
  }
}
export default Form;