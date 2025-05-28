import React,{Component} from "react";
class MyComponent extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            name:'hong',
            age:20
        }
    }

    changeName = (e)=>{
        // this.state.name = 'song';
        // this.forceUpdate();
        this.setState({...this.state,name:e.target.value})
    }
    changeAge = (e) => {
        this.setState({...this.state,age:e.target.value})
    }

    render(){
        return (<>
        <h1>Hello React</h1>
        <span>이름:{this.state.name}</span><br/>
        <input type="text"/>
        <button onClick={this.changeName}>변경</button><br/>
        
        <span>나이:{this.state.age}</span><br/>
        <input type="text"/>
        <button onClick={this.changeName}>변경</button><br/>
        </>)
    }

}

export default MyComponent;