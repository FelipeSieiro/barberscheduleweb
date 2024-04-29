import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "servicos" | "perfil"
}

export default function NavBar(props: NavBarProps) {
    const active = props.active
    const activeClass = "border-b-4 pb-4 border-sky-500"

    return (
        <nav className="flex bg-sky-700 w-full justify-between items-center px-6 py-4">
            <h1 className="text-3xl font-bold">Finanças Pro</h1>
            <ul className="flex gap-6">
                <li className={active == "dashboard" ? activeClass : ""} >
                    <Link href="/">dashboard</Link>
                </li>
                <li className={active == "servicos" ? activeClass : ""} >
                    <Link href="/servicos">servico</Link>
                </li>
                <li className={active == "perfil" ? activeClass : ""}>
                    <Link href="/perfil">perfil</Link>
                </li>
            </ul>
            <div className="w-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}