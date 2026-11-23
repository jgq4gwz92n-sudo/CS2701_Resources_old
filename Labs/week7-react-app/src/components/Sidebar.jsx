export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>

      <nav aria-label="Sidebar navigation">
        <ul>
          <li><a href="#register">Register</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
}