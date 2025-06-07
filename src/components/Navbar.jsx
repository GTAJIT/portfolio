import React from 'react'
import {Logo, Container} from "./component"
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "About",
      slug: "/about",
      active: true
    },
    {
      name: "Projects",
      slug: "/projects",
      active: true
    },
    {
      name: "Contact",
      slug: "/contact",
      active: true
    }
  ]
  return (
    <>
      <div>
        <Container>
          <nav className="flex justify-between ml-[10rem] mr-[5rem] mt-5">
            <Link to="/">
              <Logo/>
            </Link>
            <ul className='flex ml-auto gap-5'>
              {navItems.map((item)=> item.active ? (
                <li key={item.name}>
                  <button onClick={()=>navigate(item.slug)} className='cursor-pointer'>{item.name}</button>
                </li>
                ):null
              )}
            </ul>
          </nav>
        </Container>
      </div>
    </>
  )
}
