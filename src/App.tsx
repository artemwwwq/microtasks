import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });



    function removeTask(todolistID: string, id: string) {
        setTasks({...tasks, [todolistID]:tasks[todolistID].filter(el=>el.id !== id)})
    }

    function addTask(todolistID:string, title: string) {
        let newTask = {id:v1(), title: title, isDone: false}
        setTasks({...tasks, [todolistID]: [ newTask,...tasks[todolistID]]})
    }

    function changeStatus(todolistID:string ,taskId: string, NewIsDone: boolean) {
        setTasks({...tasks, [todolistID]: tasks[todolistID].map(el=> el.id === taskId ? {...el, isDone:NewIsDone } : el)})
    }




    function changeFilter(todolistID: string, value: FilterValuesType) {
        setTodolists(todolists.map(filtered=> filtered.id === todolistID ? {...filtered, filter: value} : filtered))
    }


    return (
        <div className="App">
            {
                todolists.map(todolist=> {

                    let tasksForTodolist = tasks[todolist.id];

                    if (todolist.filter === "active") {

                        tasksForTodolist = tasks[todolist.id].filter(t => !t.isDone);
                    }
                    if (todolist.filter === "completed") {
                        tasksForTodolist = tasks[todolist.id].filter(t => t.isDone);
                    }

                return (
                <Todolist key={todolist.id}
                          todolistID={todolist.id}
                          title={todolist.title}
                          tasks={tasksForTodolist}
                          removeTask={removeTask}
                          changeFilter={changeFilter}
                          addTask={addTask}
                          changeTaskStatus={changeStatus}
                          filter={todolist.filter}
                />
                )})}

        </div>
    );
}

export default App;
