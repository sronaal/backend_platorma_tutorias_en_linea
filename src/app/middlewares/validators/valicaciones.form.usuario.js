import { body, validationResult } from "express-validator";

export const validacionFormularioUsuarioLogin = [
    
    body('email').isEmail().withMessage("El correo electrónico es inválido")
    .trim().escape().normalizeEmail(),
    
    body('password').isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
    .trim().escape()
];

export const validacionFormularioUsuarioRegistroEstudiante = [

    body('nombre').notEmpty().withMessage("El nombre es requerido"),
    
    body('apellido').notEmpty().withMessage('El apellido es requerido')
    .trim().escape(),

    body('email').isEmail().withMessage("El correo electrónico es inválido")
    .trim().escape().normalizeEmail(),

    body('password').isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
    .trim().escape(),

    body('rol').notEmpty().withMessage("El rol es requerido")
    .isIn([3]).withMessage("Valor ingresado invalido")
    .isInt().withMessage("El valor debe ser un numero").trim(),

    body('telefono').notEmpty().withMessage("El telefono es obligatorio").trim(),
    body('fecha_nacimiento').isDate({format:"string"}),
    body('ubicacion').trim().escape()
    
    
]


export const validacionFormularioUsuarioRegistroTutor = [


    body('nombre').notEmpty().withMessage("El nombre es requerido"),
    
    body('apellido').notEmpty().withMessage('El apellido es requerido')
    .trim().escape(),

    body('email').isEmail().withMessage("El correo electrónico es inválido")
    .trim().escape().normalizeEmail(),

    body('password').isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
    .trim().escape(),

    body('rol').notEmpty().withMessage("El rol es requerido")
    .isIn([3]).withMessage("Valor ingresado invalido")
    .isInt().withMessage("El valor debe ser un numero").trim(),

    body('telefono').notEmpty().withMessage("El telefono es obligatorio").trim(),
    body('fecha_nacimiento').isDate({format:"string"}),

    body('ubicacion').trim().escape()

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
