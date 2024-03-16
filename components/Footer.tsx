import * as React from "react";
import { Separator } from "./ui/separator";
// import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="flow pt-12 text-center">
      <Separator />
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:justify-between">
        <p>
          Copyright &copy; 2024{" "}
          <a
            className="underline"
            href="https://ryanfurrer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ryan Furrer
          </a>
        </p>
        <nav>
          <ul className="flex justify-center gap-4">
            <li>
              <a
                href="https://twitter.com/ryandotfurrer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-fit"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none">
                    <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="currentColor"
                      d="M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16Z"
                    />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ryandotfurrer/rf-reader-v2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-fit"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M216 104v8a56.06 56.06 0 0 1-48.44 55.47A39.8 39.8 0 0 1 176 192v40a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-16H72a40 40 0 0 1-40-40a24 24 0 0 0-24-24a8 8 0 0 1 0-16a40 40 0 0 1 40 40a24 24 0 0 0 24 24h24v-8a39.8 39.8 0 0 1 8.44-24.53A56.06 56.06 0 0 1 56 112v-8a58.14 58.14 0 0 1 7.69-28.32A59.78 59.78 0 0 1 69.07 28A8 8 0 0 1 76 24a59.75 59.75 0 0 1 48 24h24a59.75 59.75 0 0 1 48-24a8 8 0 0 1 6.93 4a59.74 59.74 0 0 1 5.37 47.68A58 58 0 0 1 216 104"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:ryandotfurrer@gmail.com">
                <svg
                  className="w-6 h-fit"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="m228.44 89.34l-96-64a8 8 0 0 0-8.88 0l-96 64A8 8 0 0 0 24 96v104a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V96a8 8 0 0 0-3.56-6.66M96.72 152L40 192v-80.47Zm16.37 8h29.82l56.63 40H56.46Zm46.19-8L216 111.53V192Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
