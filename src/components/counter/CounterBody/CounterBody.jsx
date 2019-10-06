import React from 'react';

export const CounterBody = (props) => {
    let classForWrongValue = props.isValueWrong ? 'counter-error' : '';

    return (
        <main className={`counter-body ${classForWrongValue}`}>
            {props.currentValue}
        </main>
    )
}