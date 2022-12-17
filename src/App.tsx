import React, {MouseEvent, useState} from 'react';

import './App.css';
import {FullInput} from "./Component/FullInput";
import {Input} from "./Component/input";
import {Button} from "./Component/Button";
//import {NewComponent} from "./Component/NewComponent";
/*import {SwitchButton} from "./Component/switchButton";*/


/*
export type FilterType = 'ALL' | 'DOLLAR'| 'RUBLS'

export type MoneyFilterType = {
    banknots: string
    value: number
    number: string
}

export type currentMoneyType = {
    currentMoney: Array<MoneyFilterType>
}
*/


function App() {

    /*const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const stupidButton = () => {
        console.log('I am Stupid Button')
    }



    return (
    <div className='App'>
      <SwitchButton name={'YouTubeChanel-1'} callBack={()=>Button1Foo('i am Ivan', 25, 'I am living in Ekaterinburg')}/>
      <SwitchButton name={'YouTubeChanel-2'} callBack={()=>Button2Foo('i am Artem', 23, 'I am living in Berezovsky')}/>
      <SwitchButton name={'Stupid'} callBack={stupidButton}/>
    </div>
  );*/

    /*let[a, setA] = useState(1)

    const onClickHendler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickDelete = () => {
        setA(a = 0)
    }

    return (
        <div className='App'>
                <h1>{a}</h1>
            <button onClick={onClickHendler} >number</button>
            <button onClick={onClickDelete} >0</button>
        </div>
    )
*/
    {/* <ul>
            {currentMoney.map((objFromMoneyArr, index)=>{
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknots} </span>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
            <div style={{marginLeft:'35px'}}>
            <button onClick={()=>onClickFilterHandler('ALL')} >ALL</button>
            <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLES</button>
            <button onClick={()=>onClickFilterHandler('DOLLAR')}>DOLLARS</button>
            </div>*/}


    /*const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])


    const [Filter, setFilter] = useState<FilterType>('ALL')


    let currentMoney = money;

    if(Filter==='DOLLAR') {
        currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots==='Dollars')
    }
    if(Filter==='RUBLS') {
        currentMoney = money.filter((filteredMoney)=>filteredMoney.banknots==='RUBLS')
    }

        const onClickFilterHandler = (nameButton: FilterType) => {
            setFilter(nameButton)
        }

    return (
        <>
            <NewComponent currentMoney={currentMoney}
                          onClickFilterHandler={onClickFilterHandler}
            />*/
           {/* <ul>
            {currentMoney.map((objFromMoneyArr, index)=>{
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknots} </span>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
            <div style={{marginLeft:'35px'}}>
            <button onClick={()=>onClickFilterHandler('ALL')} >ALL</button>
            <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLES</button>
            <button onClick={()=>onClickFilterHandler('DOLLAR')}>DOLLARS</button>
            </div>*/}
       /* </>*/


   /* )*/


    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])


    let [title, setTitle] = useState('')




    const addMessage =(title: string)=> {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = ()=> {
        addMessage(title)
        setTitle('')
    }
    return (
        <div className={'App'}>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index)=>{
                return (

                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
}



export default App;
