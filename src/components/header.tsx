import Link from "next/link"

export const Header: React.FC = () => {
    return (
        <header className="navbar">
            <div className="navbar-start px-3">
                <Link href="/">
                    LOGO
                </Link>
            </div>


            <div className="navbar-end">
                <div className="px-3">
                    <Link href="/Blog">
                        Blog
                    </Link>
                </div>
                <div className="px-3">Concept</div>
                <div className="px-3">Connexion</div>
            </div>

        </header>
    )
}