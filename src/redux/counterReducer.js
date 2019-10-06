const CHANGE_VALUE = 'CHANGE_VALUE';
const RESET_VALUE = 'RESET_VALUE';
const OPEN_SETTINGS = 'OPEN_SETTINGS';
const CLOSE_SETTINGS = 'CLOSE_SETTINGS';
const DISABLE_BUTTONS = 'DISABLE_BUTTONS';
const ENABLE_BUTTONS = 'ENABLE_BUTTONS';
const SET_MAX_MIN_VALUES = 'SET_MAX_MIN_VALUES';

let initialState = {
    counter: {
        currentValue: 0,
        isValueWrong: false
    },
    settings: {
        maxValue: 5,
        minValue: 0
    },
    flags: {
        settingsMode: false,
        counterMode: true,
        modeChangingInProcess: false
    }
}

export let counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE: {
            let newCounter;
            if ((action.target === 'plus' && state.counter.currentValue >= state.settings.maxValue)
                || (action.target === 'minus' && state.counter.currentValue <= state.settings.minValue)) {
                    return {
                        ...state,
                        counter: {
                            ...state.counter,
                            isValueWrong: true
                        }
                    };
            } else {
                newCounter = action.target === 'plus' ? state.counter.currentValue + 1 : state.counter.currentValue - 1;
                return {
                    ...state,
                    counter: {
                        ...state.counter,
                        currentValue: newCounter,
                        isValueWrong: false
                    }
                };
            };
        }
        case RESET_VALUE: {
            return {
                ...state,
                counter: {
                    ...state.counter,
                    currentValue: state.settings.minValue,
                    isValueWrong: false
                }
            };
        }
        case OPEN_SETTINGS: {
            return {
                ...state,
                flags: {
                    ...state.flags,
                    settingsMode: true,
                    counterMode: false,
                    modeChangingInProcess: true
                }
            };
        }
        case CLOSE_SETTINGS: {
            return {
                ...state,
                flags: {
                    ...state.flags,
                    settingsMode: false,
                    counterMode: true,
                    modeChangingInProcess: true
                }
            };
        }
        case ENABLE_BUTTONS: {
            return {
                ...state,
                flags: {
                    ...state.flags,
                    modeChangingInProcess: false
                }
            };
        }
        case SET_MAX_MIN_VALUES: {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    maxValue: action.newMaxValue,
                    minValue: action.newMinValue
                },
                counter: {
                    ...state.counter,
                    currentValue: action.newMinValue
                }
            };
        }
        default: return state;
    }
}

export const changeValue = (target) => ({ type: CHANGE_VALUE, target });
export const resetValue = () => ({ type: RESET_VALUE });
export const openSettings = () => ({ type: OPEN_SETTINGS });
export const closeSettings = () => ({ type: CLOSE_SETTINGS });
export const disableButtons = () => ({ type: DISABLE_BUTTONS });
export const enableButtons = () => ({ type: ENABLE_BUTTONS });
export const setMaxMinValues = (newMaxValue, newMinValue) => ({ type: SET_MAX_MIN_VALUES, newMaxValue, newMinValue });