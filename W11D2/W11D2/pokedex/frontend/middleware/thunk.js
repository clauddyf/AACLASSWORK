export const myThunk = (store) => (next) => (action) => {
  // debugger
  if (typeof action === 'function') {
    return action(store.dispatch);
  } else {
    return next(action);
  }
};
