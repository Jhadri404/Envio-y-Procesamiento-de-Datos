export function autenticarSesion(req, res, next) {
    if(!req.session || !req.session.usuario) {
        returnres.status(401).json({
            mensaje: "debe iniciar sesion para acceder a este recurso"
        });
    }

    req.usuario = req.session.usuario;

    next();
}