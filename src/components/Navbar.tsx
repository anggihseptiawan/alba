const Navbar = () => (
  <nav className="flex justify-between w-full">
    <a href="/">
      <img src="/logo.svg" className="w-14" alt="logo" />
    </a>
    <ul className="sm:flex justify-between hidden">
      <li>
        <a href="/">Service</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Portfolio</a>
      </li>
      <li>
        <a href="/">Blog</a>
      </li>
      <li>
        <a href="/">Career</a>
      </li>
      <li>
        <a href="/">Contact Us</a>
      </li>
    </ul>
  </nav>
)

export default Navbar
