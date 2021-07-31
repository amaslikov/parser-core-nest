import { ObjectSchema } from 'joi';
import { BadRequestException, HttpStatus } from '@nestjs/common';

export const ValidateMethod = (schema: ObjectSchema) => {
  return function (
    target: unknown,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor,
  ) {
    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (params: any) {
      const { error } = schema.validate(params, { abortEarly: false });
      if (error) {
        const err = {
          statusCode: HttpStatus.BAD_REQUEST,
          message: error.details,
          propertyName,
          error: 'Bad Request',
        };
        throw new BadRequestException(err);
      }
      return method.apply(this, [params]);
    };
  };
};
