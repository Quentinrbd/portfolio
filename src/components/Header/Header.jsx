import "./Header.css"

export default function Header() {
  return (
    <header className="header">
      <span>Quentin Ribardière</span>
      <nav>
        <ul>
          <a href="#">Home</a>
          <a href="#">Qui suis-je ?</a>
          <a href="#">Projets</a>
          <a href="#">Contact</a>
        </ul>
      </nav>
    </header>
  )
}
