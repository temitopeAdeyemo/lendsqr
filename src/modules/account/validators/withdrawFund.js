import { celebrate, Joi, Segments } from "celebrate";

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    amount: Joi.string().required(),
  }),
});
