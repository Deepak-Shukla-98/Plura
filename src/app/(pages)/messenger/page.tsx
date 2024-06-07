import { Bird, Rabbit, Turtle } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
      <div className="col-span-4">
        <div className="flex flex-col bg-white flex-shrink-0">
          <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 p-4">
            <div className="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">
              <header className="pt-6 pb-4 px-5 border-b border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <a className="inline-flex items-start mr-3" href="#0">
                      <img
                        className="rounded-full"
                        src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-48-01_nugblk.jpg"
                        width="48"
                        height="48"
                        alt="Lauren Marsano"
                      />
                    </a>
                    <div className="pr-1">
                      <a
                        className="inline-flex text-gray-800 hover:text-gray-900"
                        href="#0"
                      >
                        <h2 className="text-xl leading-snug font-bold">
                          Lauren Marsano
                        </h2>
                      </a>
                      <a
                        className="block text-sm font-medium hover:text-indigo-500"
                        href="#0"
                      >
                        @lauren.mars
                      </a>
                    </div>
                  </div>

                  <div className="relative inline-flex flex-shrink-0">
                    <button className="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                      <span className="sr-only">Settings</span>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                        <path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 fill-current flex-shrink-0 text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                    </svg>
                    <span className="text-sm whitespace-nowrap ml-2">
                      Milan, IT
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 fill-current flex-shrink-0 text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                    </svg>
                    <a
                      className="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2"
                      href="#0"
                    >
                      carolinmcneail.com
                    </a>
                  </div>
                </div>
              </header>

              <div className="py-3 px-5">
                <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">
                  Chats
                </h3>

                <div className="divide-y divide-gray-200">
                  <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                    <div className="flex items-center">
                      <img
                        className="rounded-full items-start flex-shrink-0 mr-3"
                        src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
                        width="32"
                        height="32"
                        alt="Marie Zulfikar"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          Marie Zulfikar
                        </h4>
                        <div className="text-[13px]">
                          The video chat ended · 2hrs
                        </div>
                      </div>
                    </div>
                  </button>

                  <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                    <div className="flex items-center">
                      <img
                        className="rounded-full items-start flex-shrink-0 mr-3"
                        src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg"
                        width="32"
                        height="32"
                        alt="Nhu Cassel"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          Nhu Cassel
                        </h4>
                        <div className="text-[13px]">
                          Hello Lauren 👋, · 24 Mar
                        </div>
                      </div>
                    </div>
                  </button>

                  <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                    <div className="flex items-center">
                      <img
                        className="rounded-full items-start flex-shrink-0 mr-3"
                        src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-03_uzwykl.jpg"
                        width="32"
                        height="32"
                        alt="Patrick Friedman"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          Patrick Friedman
                        </h4>
                        <div className="text-[13px]">
                          Yes, you’re right but… · 14 Mar
                        </div>
                      </div>
                    </div>
                  </button>

                  <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                    <div className="flex items-center">
                      <img
                        className="rounded-full items-start flex-shrink-0 mr-3"
                        src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-04_ttlftd.jpg"
                        width="32"
                        height="32"
                        alt="Byrne McKenzie"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          Byrne McKenzie
                        </h4>
                        <div className="text-[13px]">
                          Hey Lauren ✨, first of all… · 14 Mar
                        </div>
                      </div>
                    </div>
                  </button>

                  <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                    <div className="flex items-center">
                      <img
                        className="rounded-full items-start flex-shrink-0 mr-3"
                        src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-05_bktgmb.jpg"
                        width="32"
                        height="32"
                        alt="Scott Micheal"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                          Scott Micheal
                        </h4>
                        <div className="text-[13px]">No way 🤙! · 11 Mar</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="col-span-4 lg:col-span-8">
        <div className="w-full bg-white shadow-xl">
          <div className="px-2 overflow-y-scroll" style={{ height: "78vh" }}>
            <div
              className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center bg-white"
              style={{ position: "sticky", top: "0" }}
            >
              <div className="flex items-center">
                <div>
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-grey-darkest">New Movie! Expendables 4</p>
                  <p className="text-grey-darker text-xs mt-1">
                    Andrés, Tom, Harrison, Arnold, Sylvester
                  </p>
                </div>
              </div>

              {/* <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#263238"
                    fill-opacity=".5"
                    d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
                  ></path>
                </svg>
              </div>
              <div className="ml-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#263238"
                    fill-opacity=".5"
                    d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
                  ></path>
                </svg>
              </div>
              <div className="ml-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#263238"
                    fill-opacity=".6"
                    d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                  ></path>
                </svg>
              </div>
            </div> */}
            </div>
            <div className="flex w-full mt-2 space-x-3 max-w-xs">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100"></div>
              <div>
                <div className="bg-gray-100 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100"></div>
            </div>
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100"></div>
            </div>
            <div className="flex w-full mt-2 space-x-3 max-w-xs">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100"></div>
              <div>
                <div className="bg-gray-100 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100"></div>
            </div>
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100"></div>
            </div>
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100"></div>
            </div>
            <div className="flex w-full mt-2 space-x-3 max-w-xs">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100"></div>
              <div>
                <div className="bg-gray-100 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">Lorem ipsum dolor sit.</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100"></div>
            </div>
          </div>
          <div className="antialiased bg-gray-50 p-2">
            <input
              className="flex items-center h-10 w-full rounded px-3 text-sm"
              type="text"
              placeholder="Type your message…"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
