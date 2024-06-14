import { body, validationResult } from "express-validator";

export const validacionFormularioUsuarioLogin = [
    
    body('email').isEmail().withMessage("El correo electrónico es inválido")
    .trim().escape().normalizeEmail(),
    
    body('password').isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
    .trim().escape()
];

export const validacionFormularioUsuarioRegistro = [

    body('nombre').isEmpty().withMessage("El mensaje es requerido")
    .trim().escape(),
    
    body('apellido').isEmpty().withMessage('El apellido es requerido')
    .trim().escape(),

    body('email').isEmail().withMessage("El correo electrónico es inválido")
    .trim().escape().normalizeEmail(),

    body('password').isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
    .trim().escape(),

    body('rol')
]


export const validaciones = (req, res, next) => {
    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        const extraerErrores = errores.array().map(err => ({
            [err.path]: err.msg
        }));

        return res.status(422).json({
            errores: extraerErrores
        });
    }

    next();
};
