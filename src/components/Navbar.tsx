import { useState } from 'react'
import { Button } from './Button'
import { IconMenu } from './IconMenu'

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  return (
    <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
      <a href="/">
        <img src="/logo.svg" className="w-14" alt="logo" />
      </a>
      <ul
        className={
          isNavbarOpen
            ? 'bg-yellow-500 w-full absolute top-12 left-0 p-4'
            : 'sm:flex sm:gap-6 md:gap-10 lg:gap-24 justify-between items-center hidden'
        }
      >
        <li>
          <a href="/" className="font-semibold">
            Service
          </a>
        </li>
        <li>
          <a href="/" className="font-semibold">
            About
          </a>
        </li>
        <li>
          <a href="/" className="font-semibold">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/" className="font-semibold">
            Blog
          </a>
        </li>
        <li>
          <a href="/" className="font-semibold">
            Career
          </a>
        </li>
        <li>
          <Button text="Contact Us" />
        </li>
      </ul>

      <div className="sm:hidden">
        <IconMenu handleClick={() => setIsNavbarOpen(!isNavbarOpen)} />
      </div>
    </nav>
  )
}
