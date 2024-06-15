const logger = (store) => (next) => (action) => {
  next(action);
};

export default logger;
