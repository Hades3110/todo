import { body } from 'express-validator';

export const createTodoDto = [
    body('email')
        .isString()
        .withMessage('Not valid heading'),
    body('username')
        .isString()
        .notEmpty()
        .withMessage('Not valid content'),
    body('content')
        .isString()
        .notEmpty()
        .withMessage('Not valid content'),
];

export const updateTodoDto = [
    body('email')
        .isString()
        .optional()
        .withMessage('Not valid heading'),
    body('username')
        .isString()
        .optional()
        .notEmpty()
        .withMessage('Not valid content'),
    body('content')
        .isString()
        .optional()
        .notEmpty()
        .withMessage('Not valid content'),
];
