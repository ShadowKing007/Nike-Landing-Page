import { headerLogo } from '../assets/images';
import { navLinks } from '../constants';


const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full dark:text-white dark:bg-neutral-900'>
      <nav className='flex justify-between items-center max-container  dark:text-white dark:bg-neutral-900'>
        <a href="/">
          <img
            src={headerLogo}
            alt='headerlogo'
            width={130}
            height={30}
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden  dark:text-white dark:bg-neutral-900'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font montserrat leading-normal text-lg text-slate-900 text-semibold rounded-lg px-3 py-2 font-medium hover:bg-red-500 dark:hover:bg-red-500 dark:text-white dark:bg-neutral-900'
              >
                {item.label}
              </a>

            </li>
          ))}

        </ul>
        
      </nav>
    </header>
  )
}

export default Nav