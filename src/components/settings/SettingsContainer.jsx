import { connect } from 'react-redux';
import { Settings } from './Settings';
import { closeSettings, enableButtons, setMaxMinValues } from './../../redux/counterReducer';

let mapStateToProps = (state) => {
    return {
        settings: state.counter.settings,
        flags: state.counter.flags
    }
}

export const SettingsContainer = connect(mapStateToProps, {
    closeSettings, enableButtons, setMaxMinValues
}) (Settings);