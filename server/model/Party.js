import Database from './Database';

/**
 * @description Party Modal
 */
export default class Party {
  /**
   * s
   */
  constructor() {
    this.table = 'parties';
  }

  /**
   * init table
   * @returns promise
   */
  static init() {
    Database.create(new Party().table, [
      { name: 'partyid', key: 'primary', type: 'number' },
      { name: 'name', key: 'unique', type: 'string' },
      { name: 'hqAddress', type: 'string' },
      { name: 'logoUrl', type: 'string' }
    ])
      .then((res) => { console.log(res.command); })
      .catch((error) => { console.log(error.message); });
  }

  /**
   * add Party to database
   * @param {object} option
   * @returns promise
   */
  static async create(option) {
    return Database.insert(new Party().table, option);
  }

  /**
   * view all Partys in database
   * @returns promise
   */
  static async viewAll() {
    return Database.select(new Party().table);
  }

  /**
   * view specific Party in database
   * @param {object} partyid
   * @returns promise
   */
  static async get(partyid) {
    return Database.find(new Party().table, { partyid });
  }

  /**
   * view edit specific Party in database
   * @param {object} name
   * @param {object} partyid
   * @returns promise
   */
  static async edit(name, partyid) {
    return Database.update(new Party().table, { name }, { partyid });
  }
}
Party.init();
