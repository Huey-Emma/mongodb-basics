const nth = (pst) => (ctx) => ctx[pst];
const and = (a, b) => (a && b ? true : false);
const when = (predFn, isTrueFn) => (x, y) => {
  if (predFn(x, y)) return isTrueFn();
};

module.exports = {
  nth,
  and,
  when,
};
