import React from 'react';

export class Settings extends React.Component {
    state = {
        maxTempValue: 0,
        minTempValue: 0,
        isError: false
    }

    componentDidMount() {
        this.setState({
            maxTempValue: this.props.settings.maxValue,
            minTempValue: this.props.settings.minValue
        });

        setTimeout(() => {
            this.props.enableButtons();
        }, 350);
    }

    setMaxTempValue = (event) => {
        let newMaxTempValue = event.currentTarget.value;

        if (newMaxTempValue > this.state.minTempValue && newMaxTempValue <= 15) {
            this.setState({ maxTempValue: +newMaxTempValue, isError: false });
        } else {
            this.setState({ isError: true });
        }
    }

    setMinTempValue = (event) => {
        let newMinTempValue = event.currentTarget.value;

        if (newMinTempValue < this.state.maxTempValue && newMinTempValue >= 0) {
            this.setState({ minTempValue: +newMinTempValue, isError: false });
        } else {
            this.setState({ isError: true });
        }
    }

    setMaxMinValues = () => {
        this.props.closeSettings();
        this.props.setMaxMinValues(this.state.maxTempValue, this.state.minTempValue);

        this.setState({ isError: false });

        setTimeout(() => {
            this.props.enableButtons();
        }, 350);
    }

    closeSettingsWindow = () => {
        this.props.closeSettings();
        
        setTimeout(() => {
            this.props.enableButtons();
        }, 350);
    }

    render() {
        let classForError = this.state.isError ? 'error' : '';

        return (
            <div className='settings'>
                <div className='settings-body'>
                    <div>
                        <label htmlFor={1}>Maximum value: </label>
                        <input id={1} onChange={this.setMaxTempValue} value={this.state.maxTempValue}
                            className={classForError} type='number' placeholder='max value' />
                    </div>
                    <div>
                        <label htmlFor={2}>Minimum value: </label>
                        <input id={2} onChange={this.setMinTempValue} value={this.state.minTempValue}
                            className={classForError} type='number' placeholder='min value' />
                    </div>
                </div>
                <div className='settings-footer'>
                    <button disabled={this.props.flags.modeChangingInProcess} onClick={this.setMaxMinValues}>Set</button>
                    <button disabled={this.props.flags.modeChangingInProcess} onClick={this.closeSettingsWindow}>Close</button>
                </div>
            </div>
        )
    }
}