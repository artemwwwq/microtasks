

type ButtonPropsType={
    name: string,
    callBack: ()=> void

}


export const Button = (props:ButtonPropsType) => {

    const buttonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={buttonHandler}>{props.name}</button>
    )
}