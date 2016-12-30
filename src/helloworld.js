import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component{
	myshow = () =>{
		console.log(this.props.title);
		console.log(this.props.contents);
		console.log(this.props.name);
	};

    render(){
       return(
       		<div>
       			<h1>HelloWorld</h1>            
            	<button onClick={this.myshow}>Click Button</button>
            </div>
        )
   }
}

//render virtural dom
const data={title:'this is a title',contents:'this is contents'};
ReactDOM.render(
    <HelloWorld {...data} name={'this is name'}/>,
    document.getElementById('helloworld')
);