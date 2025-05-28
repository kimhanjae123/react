import { initTodos, myReducer } from './MyReducer';
import { useReducer } from 'react';

export default function ReducerEx() {

    const [todos, dispacth] = useReducer(myReducer, initTodos);

    return (
        <>
            {todos.map(todo =>
                <div key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.complate}
                        onChange={()=>dispacth({type:"COMPLATE",id:todo.id})}/>
                        {todo.title}&nbsp;&nbsp;&nbsp;
                        {todo.count}&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>dispacth({type:"INCREMENT",id:todo.id})}>+</button>
                    </label>

                </div>
            )}
        </>
    )
}