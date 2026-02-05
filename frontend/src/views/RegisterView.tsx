import { Link } from "react-router-dom"

export default function RegisterView() {
    return (
        <>
            <h1 className="text-4xl font-bold">Crear Cuenta</h1>
            
            <nav className="mt-10">
                <Link 
                    className="text-center text-lg block"
                    to="/auth/login">
                    Ya tienes cuenta? Inicia Sesion
                </Link>
            </nav>
        </>
    )
}