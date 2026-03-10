import { body, validationResult } from "express-validator";

const validate = (res, req, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  res.status(400).json({
    errors: errors.array(),
  });
};

export const registerValidation = [
  body("username").isString().withMessage("username must be a string"),
  body("email").isEmail().withMessage("email should be valid email address"),
  body("password").isLength({ min: 6 }).withMessage("password must be at least 6 characters"),
  validate
];
