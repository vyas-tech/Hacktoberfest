import React ,{Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from './Plan';

class App extends Component {
  state={
    item:[],
    text:""
  }
  handleChange=e=>{
this.setState({
  text:e.target.value
})
  }
  handleAdd=e=>{
    if(this.state.text !==""){
      const item=[...this.state.item,this.state.text];
      
    }
  }
  
  render(){
    return(
      <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h2 className="text-center"> Today's Plan </h2>
          <div className="container-fluid">
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control" placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange} />
              </div>
              <div className="col-2">
                <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
              </div>
            </div>
            <div className="conatiner">
              <ul className="list-unstyled row m-5">
                {
                  this.state.item.map((value, i) => {
                    return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                  })
                }
              </ul>
              {/* <ul className="list-unstyled row m-5">
                <Plan p={this.state.items} sendData={this.handleDelete} />
              </ul> */}
            </div>
          </div>

        </div>
      </div>
    </div>
      
    )
  }

}

export default App;
