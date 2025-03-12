import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/productManagement', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-white">
              <Bars3Icon className="block size-6" aria-hidden="true" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Sithamu Hela Rasa" className="h-10 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:block w-64">
            <form className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary" placeholder="Search..." required />
              <button type="submit" className="text-white absolute end-2 bottom-1 bg-primary hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-3 py-1">Search</button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:block">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-beige' : 'hover:text-beige',
                    'px-3 py-2 text-lg font-medium'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 rounded-full bg-primary-dark hover:text-beige focus:ring-2 focus:ring-white">
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-primary-dark text-white' : 'text-white hover:bg-primary-dark',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}