import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => {
    const { type, value, name, id, placeholder, title, className, autoFocus, active, readonly, valid, validated, loading, autoComplete, disabled, required, onChange, onClick, onKeyDown, onFocus, onBlur } = props;
    let inputProps = {};

    const inputClass = classNames({
        'form-control__input': true,
        'form-control--active': active,
        'form-control__input--readonly': readonly,
        'form-control__input--valid': validated && valid,
        'form-control__input--invalid': validated && !valid,
        'form-control__input--loading': loading,
        [className]: className !== ''
    });

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
            className={inputClass}
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
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    placeholder: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.oneOf([
        'sm',
        'md',
        'lg'
    ]),
    className: PropTypes.string,
    controlClassName: PropTypes.string,
    groupClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    icon: PropTypes.string,
    customProps: PropTypes.shape({
        [PropTypes.string]: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }),
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    active: PropTypes.bool,
    readonly: PropTypes.bool,
    validated: PropTypes.bool,
    valid: PropTypes.bool,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    prependIcon: PropTypes.bool,
    inline: PropTypes.bool,
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
    label: '',
    placeholder: '',
    title: '',
    size: 'md',
    className: '',
    controlClassName: '',
    groupClassName: '',
    labelClassName: '',
    icon: '',
    customProps: {},
    autoComplete: '',
    autoFocus: false,
    active: false,
    readonly: false,
    validated: false,
    valid: true,
    loading: false,
    disabled: false,
    required: false,
    prependIcon: true,
    inline: true,
    onChange: () => {},
    onClick: () => {},
    onKeyDown: () => {},
    onFocus: () => {},
    onBlur: () => {}
};

export default Input;
