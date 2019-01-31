/* eslint-disable guard-for-in */
import validator from 'validator';
import responseController from '../controller/responseController';
/**
 * validate custom user input
 */
class validate {
  /**
	 * validate address:
	 * @description the isAddress methods will pass only
	 * if the string contains alphabets, numbers, spaces, period, comma, and dash
	 * @param {string} address
	 * @returns boolean
	 */
  static isAddress(address) {
    return (/^[a-zAZ0-9,.-\s]+$/i.test(address));
  }

  /**
	 * @description allow only alphabets and spaces
	 * @param {string} name
	 * @returns boolean
	 */
  static isName(name) {
    return (/^[A-Za-z\s]+$/.test(name));
  }

  /**
	 * @description check if string is digit
	 * @param {string} string
	 * @returns boolean
	 */
  static isInt(string) {
    return (/^[0-9]+$/i.test(string));
  }

  /**
   * @description check if party exist
   * @param {string} name
   * @returns boolean
   */
  static itExist(data, name) {
    const found = data.find(element => element.name === name);
    if (found) return true;
    return false;
  }

  /**
	 *
	 * @param {string/number} id
	 * @param {object} response
	 * @returns object
	 */
  static isValidID(id, response) {
    if (!validator.isInt(id) || !id) {
      return responseController.response({
        status: 422,
        message: 'invalid credential for id.'
      }, null, response);
    }
  }

  /**
   *  @example options = {
   *  find: replaceWith
   * }
   * @param {object} options
   * @param {string} data
   * @returns object
   */
  static ireplace(options, data) {
    // eslint-disable-next-line no-restricted-syntax
    for (const values in options) {
      data = data.replace(new RegExp(values, 'gi'), options[values]);
    }
    return data;
  }

  /**
   *
   * @param {object} options
   * @param {object} response
   * @returns boolean
   */
  static userProfile(options, response) {
    const { name, email, phone, role } = options;
    if (!validator.isEmail(email || '<>') || !validator.isNumeric(phone || '<>') || !validate.isName(name || '<>') || !validator.isAlpha(role || 'user')) {
      return responseController.response({
        status: 422,
        message: 'invalid credentials'
      }, null, response);
    }
    return false;
  }


  /**
   *
   * @param {*} string
   * @returns string
   */
  static toString(string) {
    return (`${string}`);
  }
}
module.exports = validate;
