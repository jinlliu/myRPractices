import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component{
    render(){
       return(
            <h1>hello,world</h1>
        )
   }
}

//渲染虚拟dom
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('helloworld')
);