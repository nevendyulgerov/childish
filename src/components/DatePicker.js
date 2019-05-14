import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uid from 'uid';
import * as flatpickrApi from 'flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import classNames from 'classnames';
import Input from './Input';

const flatpickr = flatpickrApi.default;

class DatePicker extends Component {
    componentDidMount() {
        const { config } = this.props;
        const input = document.getElementById(this.componentId);

        this.pickerInstance = flatpickr(input, {
            ...config,
            onChange: this.onChange
        });
    }

    componentWillReceiveProps({ value, disabled }) {
        if (value === '') {
            this.pickerInstance.clear();
        }

        if (!disabled) {
            this.pickerInstance._input.removeAttribute('disabled')
        }
    }

    componentId = uid();

    pickerInstance;

    onChange = (selectedDates, dateStr) => {
        const { value, onChange } = this.props;

        if (value !== '') {
            onChange(selectedDates, dateStr);
        }
    };

    render() {
        const datePickerClassNames = classNames({
            'date-picker': true
        });

        const customProps = {
            ...this.props,
            type: 'date'
        };

        return (
            <Input
                id={this.componentId}
                className={datePickerClassNames}
                {...customProps}
            />
        );
    }
}

DatePicker.propTypes = {
    value: PropTypes.string.isRequired,
    config: PropTypes.shape({
        mode: PropTypes.string
    }),
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};

DatePicker.defaultProps = {
    config: {},
    disabled: false
};

export default DatePicker;
