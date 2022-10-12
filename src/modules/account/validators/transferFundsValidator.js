import { celebrate, Joi, Segments } from "celebrate";

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    amount: Joi.string().required(),
    accountNumber: Joi.string().min(11).required(),
    pin: Joi.string().min(4).required(),
  }),
});
