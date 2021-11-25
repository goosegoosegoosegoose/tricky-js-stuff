function curriedAdd(a) {
  if (!a) return 0;
  return function next(b) {
    if (!b) return a;
    a += b;
    return next;
  }
}
// didn't name second function so couldn't return it. Should've known since this is recursion. Hope to remember.

module.exports = { curriedAdd };
