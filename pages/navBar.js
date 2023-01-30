import Link from "next/link";

const NavBar = () => {

  return (
    <div className="nav-bar">
      <Link href="#who-i-am" className="nav-item">Quem sou eu?</Link>
      <Link href="#make-tatoo" className="nav-item">Agende sua tatu</Link>
      <Link href="/" className="nav-item">Follow me</Link>
    </div>
  )
}

export default NavBar;