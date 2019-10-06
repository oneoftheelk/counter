import React from 'react';
import { CounterHeader } from './CounterHeader/CounterHeader';
import { CounterBody } from './CounterBody/CounterBody';
import { CounterFooter } from './CounterFooter/CounterFooter';
import { SettingsContainer } from '../settings/SettingsContainer';

export const Counter = (props) => {
    return (
        <div>
            <CounterHeader />
            <CounterBody
                currentValue={props.counter.currentValue}
                isValueWrong={props.counter.isValueWrong} />
            { props.flags.counterMode && <CounterFooter
                modeChangingInProcess={props.flags.modeChangingInProcess}
                changeValue={props.changeValue}
                resetValue={props.resetValue}
                openSettings={props.openSettings}
                closeSettings={props.closeSettings}
                disableButtons={props.disableButtons}
                enableButtons={props.disableButtons}
            /> }
            { props.flags.settingsMode && <SettingsContainer /> }
        </div>
    )
}