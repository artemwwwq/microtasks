import React from 'react';

type SuperProps = {
    name: string
    callBack: () => void
}
const SuperButton = (props: SuperProps) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (

        <button onClick={onClickHandler}>{props.name}</button>

    );
};

export default SuperButton;