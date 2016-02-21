/**
 * Querier
 *  .append({ as: 'a', from: Promise.resolve(10) })
 *  .append({ as: 'b', from: Promise.resolve(20), where: [() => "Cannot be twenty", v => v != 20] })
 *  .select(({ a, b }) => a + b);
 *
 * Promise.prototype.select = function(apply) {
 *  return this.then(apply);
 * }
 *
 * Promise.prototype.selectMany = function(apply) {
 *  return this.then(v => apply(v).then(x => x));
 * }
 *
 * Promise.prorotype.where = function([fail, predicate]) {
 *  return new Promise((resolve, reject) => {
 *    this.then(v => predicate(v) ? resolve(v) : reject(fail())).catch(reject);
 *  });
 * }
 *
 * where: [
 *  [() => "Item was smaller than 9" , x => x >= 9],
 *  [() => "Item was bigger than 11", x => x <= 11]
 * ]
 *
 * return Querier
 *  .append({ as: 'single', from: boundPromisedCallback('findOne', query), where: [() => "item was null", i => !!i]})
 *  .select( ({single}) => single);
 * 
 */