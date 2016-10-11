import React, { Component } from 'react';

export class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '/* add jsx here */',
      output: '',
      err: ''
    }
    this.update = this.update.bind(this);
  }
  update(e){
    let code = e.target.value;
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: "all"
        }).code,
        err: ''
      });
    }catch(err){
      this.setState({
        err: err.message
      });
    }
  }
  render() {
    return (
      <div>
        <header>&nbsp;{this.state.err}</header>
        <div className="container">
          <textarea onChange={this.update} defaultValue={this.state.input}>
          </textarea>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    );
  }
}


export default App;


// const App = (props) => {
//   var myStyle = {
//     backgroundColor: '#000',
//     height: 10
//   }
//   return(
//     <div style={myStyle}>
//       <a href="#"
//         notrendered="x"
//         onClick={update}>
//         {/* this is a comment */}
//         this is the text
//         {i>1 ? 'More than one' : 'one'}
//         {i>1 && 'More than one'}
//       </a>
//     </div>
//   )
// }
