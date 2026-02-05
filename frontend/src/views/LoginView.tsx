import { Link } from "react-router-dom"

export default function LoginView() {
    return (
        <>
        <h1 className="text-4xl font-bold">Iniciar Secion</h1>
        <nav className="mt-10">
                <Link 
                    className="text-center text-lg block"
                    to="/auth/register">
                    No tienes cuenta? Registrate
                </Link>
            </nav>
        </>
    )
}