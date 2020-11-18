const debounce = (func: Function, duration: number) => {
  let timeout: number;
  const debouncedFunction = (...args: any) => {
    const effect = () => {
      clearTimeout(timeout);
      return func.apply(debouncedFunction, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
  return debouncedFunction;
};

export default debounce;
