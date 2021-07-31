export const Validate = () => {
  return function (
    target: unknown,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor,
  ) {
    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {
      // invoke greet() and get its return value
      const result = method.apply(this, args);

      console.log('Validate', { method, result });

      // return the result of invoking the method
      return result;
    };
  };
};
