import React from 'react';

export const CounterFooter = (props) => {
    const buttons = [
        {id: 'plus', value: 'Plus'},
        {id: 'minus', value: 'Minus'},
        {id: 'reset', value: 'Reset'},
        {id: 'settings', value: 'Settings'}
    ];

    const changeValue = (event) => {
        let target = event.currentTarget.id;
        props.changeValue(target);
    };

    const buttonsElements = buttons.map(item => {
        let action = () => {};
        let classForSettingsIcon = '';
        let classForDisabledButton = props.modeChangingInProcess ? 'disabled-button' : '';
        
        switch (item.id) {
            case 'plus':
            case 'minus': { action = changeValue; break; }
            case 'reset': { action = props.resetValue; break; }
            case 'settings': { action = props.openSettings; classForSettingsIcon='settings-icon'; break; }
            default: break;
        }
        return (
            <button disabled={props.modeChangingInProcess} key={item.id} id={item.id}
                className={`${classForSettingsIcon} ${classForDisabledButton}`}
                onClick={action}>{item.id !== 'settings' && item.value}</button>
        )
    })

    return (
        <footer className='counter-footer'>
            <div>
                {buttonsElements[0]}
                {buttonsElements[1]}
            </div>
            <div>
                {buttonsElements[2]}
            </div>
            <div>
                {buttonsElements[3]}
            </div>
        </footer>
    )
}