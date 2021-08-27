import Link from 'next/link';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

const Navbar = () => {
  return (
    <nav className="relative bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
              />
            </a>
          </div>
            <div>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </div>
            <div>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Network Status
              </a>
            </div>
            <div>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                FAQs
              </a>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="http://localhost:3000/dashboard/landing" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Dashboard
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
          </div>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;
