import React, { Component } from 'react'
const Context = React.createContext()

const reducer =(prevState,action) =>{
    switch(action.type){
        
        case "TOGGLE": return{todos:prevState.todos.map(t => {if(t.id === action.payload) {t.complete =! t.complete }; 
        return t}) }

        case "REMOVE":
        return{todos:prevState.todos.filter(todo=>todo.id !== action.payload) }
        
        case"ADD":
        return{ todos: [...prevState.todos , action.payload]}
        
        default:
            return prevState
    }
}
export  class Provider extends Component {
    state = {
        todos:[
            {
                id:1,
                title:"Даалгавруудаа дуусгах",
                complete:false
            },
            {
                id:2,
                title:"Шалгалтандаа бэлдэх",
                complete:true
            },
            {
                id:3,
                title:"Боорцог хийх",
                complete:true
            }
        ],
        dispatch:(action) =>this.setState(prevState => reducer(prevState,action))
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
