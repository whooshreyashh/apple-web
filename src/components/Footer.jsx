import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Connect with me: {' '}
            <span className="underline text-blue">
            <a href='https://www.linkedin.com/in/shreyash-joshi-911525224/'> Linkedin {' '} </a>
            </span>
            or {' '}
            <span className="underline text-blue">
            <a href='https://github.com/whooshreyashh'> Github {' '} </a>
            </span>{' '}
            or {' '}
            <span className="underline text-blue">
            <a href='mailto:shreyashjhld2017@gmail.com'> Email {' '} </a>
            </span>{' '}
          </p>
          <p className="font-semibold text-gray text-xs">
          <span className="underline text-blue">
            <a href='https://www.buymeacoffee.com/shreyashjoshi'> Buy me a coffee {' '} </a>
            </span>{' '}
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Shreyash Joshi. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer