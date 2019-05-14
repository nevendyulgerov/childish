import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { type, value, name, id, placeholder, title, autoFocus, autoComplete, disabled, required, onChange, onClick, onKeyDown, onFocus, onBlur } = props;
    let inputProps = {};

    if (name !== '') {
        inputProps.name = name;
    }

    if (id !== '') {
        inputProps.id = id;
    }

    if (autoComplete !== '') {
        inputProps.autoComplete = autoComplete;
    }

    const change = (event) => {
        onChange(event.target.value, event);
    };

    const click = (event) => {
        onClick(event.target.value, event);
    };

    const keyDown = (event) => {
        onKeyDown(event.target.value, event);
    };

    return (
        <input
            {...inputProps}
            type={type}
            value={value}
            title={title}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            autoFocus={autoFocus}
            onChange={change}
            onClick={click}
            onKeyDown={keyDown}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
};

Input.propTypes = {
    type: PropTypes.oneOf([
        'text',
        'number',
        'email',
        'password',
        'search',
        'date',
        'tel',
        'checkbox',
        'radio',
        'file'
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    title: PropTypes.string,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    active: PropTypes.bool,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};

Input.defaultProps = {
    type: 'text',
    name: '',
    id: '',
    placeholder: '',
    title: '',
    autoComplete: '',
    autoFocus: false,
    active: false,
    readonly: false,
    disabled: false,
    required: false,
    onChange: () => {},
    onClick: () => {},
    onKeyDown: () => {},
    onFocus: () => {},
    onBlur: () => {}
};

export default Input;
