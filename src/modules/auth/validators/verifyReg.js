import { celebrate, Joi, Segments } from "celebrate";

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
    fullName: Joi.string().required(),
    phoneNumber: Joi.string().required().min(10),
  }),
});
