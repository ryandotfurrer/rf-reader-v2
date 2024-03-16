import * as React from "react";
// import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav>
      <ul id="navlist" className="flex gap-4 items-center">
        <li className="mr-auto">
          <a href="/">
            <svg
              className="w-16 h-auto"
              width="256"
              height="256"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m-51.77 145.22a8 8 0 0 0-8.48 0L72 209.57v-29.14l56-35l56 35v29.14Z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:underline"
            href="https://github.com/ryandotfurrer/rf-reader-v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a className="hover:underline" href="mailto:ryandotfurrer@gmail.com">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
