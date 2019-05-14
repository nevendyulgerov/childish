import events from './events';

/**
 * @description Api base url
 * @type {string}
 */
export const apiBaseUrl = process.env.REACT_APP_API;

/**
 * @description Api url
 * @type {string}
 */
export const apiUrl = `${apiBaseUrl}`;

export default {
    events
};
