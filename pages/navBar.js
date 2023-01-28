import Link from "next/link";

const NavBar = () => {

  return (
    <div className="nav-bar">
      <Link href="/" className="nav-item">Quem sou eu?</Link>
      <Link href="/" className="nav-item">Agende sua tatu</Link>
      <Link href="/" className="nav-item">Follow me</Link>
    </div>
  )
}

export default NavBar;