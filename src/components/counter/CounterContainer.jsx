import { connect } from 'react-redux';
import { Counter } from './Counter';
import { changeValue, resetValue, openSettings, closeSettings, disableButtons } from './../../redux/counterReducer';

let mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
        flags: state.counter.flags
    }
}

export const CounterContainer = connect(mapStateToProps, {
    changeValue,
    resetValue,
    openSettings,
    closeSettings,
    disableButtons
}) (Counter);