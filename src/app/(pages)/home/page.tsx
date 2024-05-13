import React from "react";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function BaseUserFeedNested() {
  return (
    <>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-8 md:col-span-12">
            <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Paperclip className="size-4" />
                      <span className="sr-only">Attach file</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Attach File</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Mic className="size-4" />
                      <span className="sr-only">Use Microphone</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Use Microphone</TooltipContent>
                </Tooltip>
                <Button type="submit" size="sm" className="ml-auto gap-1.5">
                  Send Message
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
            <ul
              aria-label="Nested user feed"
              role="feed"
              className="relative flex flex-col gap-12 p-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
            >
              <li role="article" className="relative pl-6 ">
                <div className="flex flex-col flex-1 gap-2">
                  <a
                    href="#"
                    className="absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white"
                  >
                    <img
                      src="https://i.pravatar.cc/48?img=1"
                      alt="user name"
                      title="user name"
                      width="48"
                      height="48"
                      className="max-w-full rounded-full"
                    />
                  </a>
                  <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                    <span className="flex-1">
                      Mary Jane
                      <span className="text-sm font-normal text-slate-500">
                        {" "}
                        created a new thread
                      </span>
                    </span>
                    <span className="text-xs font-normal text-slate-400">
                      {" "}
                      3 hours ago
                    </span>
                  </h4>
                  <p className="text-sm text-slate-500">
                    We just released windUI v1.5, which includes a brand new
                    component. An activity feed is a chronological record of
                    system events or user actions. Have a look at the feed page
                    and let me know what you think. Feedback is highly
                    appreciated.{" "}
                  </p>
                </div>
              </li>
              <li role="article" className="relative pl-6 ">
                <div className="flex flex-col flex-1 gap-2">
                  <a
                    href="#"
                    className="absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white"
                  >
                    <img
                      src="https://i.pravatar.cc/48?img=12"
                      alt="user name"
                      title="user name"
                      width="48"
                      height="48"
                      className="max-w-full rounded-full"
                    />
                  </a>
                  <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                    <span className="flex-1">
                      John langan{" "}
                      <span className="text-sm font-normal text-slate-500">
                        {" "}
                        💚 liked the thread{" "}
                      </span>
                    </span>
                    <span className="text-xs font-normal text-slate-400">
                      {" "}
                      2 hours ago
                    </span>
                  </h4>
                </div>
                <ul
                  role="group"
                  className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-6 before:left-6 before:bottom-6 before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-12 after:left-6 after:bottom-12 after:-translate-x-1/2 after:border after:border-slate-200"
                >
                  <li role="article" className="relative pl-6 ">
                    <div className="flex flex-col flex-1 gap-2">
                      <a
                        href="#"
                        className="absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white"
                      >
                        <img
                          src="https://i.pravatar.cc/48?img=1"
                          alt="user name"
                          title="user name"
                          width="48"
                          height="48"
                          className="max-w-full rounded-full"
                        />
                      </a>
                      <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                        <span className="flex-1">
                          Mary Jane{" "}
                          <span className="text-sm font-normal text-slate-500">
                            {" "}
                            replied{" "}
                          </span>
                        </span>
                        <span className="text-xs font-normal text-slate-400">
                          {" "}
                          2 hours ago
                        </span>
                      </h4>
                      <p className="text-sm text-slate-500">
                        Hey john! Did you had a look at the new component?{" "}
                      </p>
                    </div>
                  </li>
                  <li role="article" className="relative pl-6 ">
                    <div className="flex flex-col flex-1 gap-2">
                      <a
                        href="#"
                        className="absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white"
                      >
                        <img
                          src="https://i.pravatar.cc/48?img=12"
                          alt="user name"
                          title="user name"
                          width="48"
                          height="48"
                          className="max-w-full rounded-full"
                        />
                      </a>
                      <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                        <span className="flex-1">
                          John langan{" "}
                          <span className="text-sm font-normal text-slate-500">
                            {" "}
                            replied{" "}
                          </span>
                        </span>
                        <span className="text-xs font-normal text-slate-400">
                          {" "}
                          2 hours ago
                        </span>
                      </h4>
                      <p className="text-sm text-slate-500">
                        It looks awesome! Good one! The only thing that I would
                        tweak is the spacing in smaller screens. Other than that
                        it looks superb! Really loved the color as well.{" "}
                      </p>
                    </div>
                  </li>
                  <li role="article" className="relative pl-6 ">
                    <div className="flex flex-col flex-1 gap-2">
                      <a
                        href="#"
                        className="absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white"
                      >
                        <img
                          src="https://i.pravatar.cc/48?img=1"
                          alt="user name"
                          title="user name"
                          width="48"
                          height="48"
                          className="max-w-full rounded-full"
                        />
                      </a>
                      <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                        <span className="flex-1">
                          Mary Jane{" "}
                          <span className="text-sm font-normal text-slate-500">
                            {" "}
                            replied{" "}
                          </span>
                        </span>
                        <span className="text-xs font-normal text-slate-400">
                          {" "}
                          3 hours ago
                        </span>
                      </h4>
                      <p className="text-sm text-slate-500">
                        Thanks so much 🙏. Your feedback is highly appreciated.
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li role="article" className="relative pl-6 ">
                <div className="flex flex-col flex-1 gap-2">
                  <a
                    href="#"
                    className="absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white"
                  >
                    <img
                      src="https://i.pravatar.cc/48?img=13"
                      alt="user name"
                      title="user name"
                      width="48"
                      height="48"
                      className="max-w-full rounded-full"
                    />
                  </a>
                  <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                    <span className="flex-1">
                      Manos Gaitanakis
                      <span className="text-sm font-normal text-slate-500">
                        {" "}
                        commented
                      </span>
                    </span>
                    <span className="text-xs font-normal text-slate-400">
                      {" "}
                      3 hours ago
                    </span>
                  </h4>
                  <p className="text-sm text-slate-500">
                    Love it! I really like how the nested feeds are working as
                    well. Is that going to be multi-nested? Or maybe stay in
                    just one level. Also any ides on how I can remove the time
                    stamp from the feeds?
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <ul className="divide-y divide-slate-100">
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="shrink-0 self-start">
                  <a
                    href="#"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full text-white"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=1"
                      alt="user name"
                      title="user name"
                      width="40"
                      height="40"
                      className="max-w-full rounded-full"
                    />
                    <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
                      <span className="sr-only"> offline </span>
                    </span>
                  </a>
                </div>
                <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0">
                  <h4 className="w-full truncate text-base text-slate-700">
                    Ellen Ripley
                  </h4>
                  <p className="w-full text-sm text-slate-500">
                    A tough, resourceful space officer and survivor.
                  </p>
                </div>

                <span className="inline-flex items-center justify-center gap-1 rounded-full bg-pink-500 px-1.5 text-sm text-white">
                  4<span className="sr-only"> new emails</span>
                </span>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="shrink-0 self-start">
                  <a
                    href="#"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full text-white"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=3"
                      alt="user name"
                      title="user name"
                      width="40"
                      height="40"
                      className="max-w-full rounded-full"
                    />
                    <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
                      <span className="sr-only"> online </span>
                    </span>
                  </a>
                </div>
                <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0">
                  <h4 className="w-full truncate text-base text-slate-700">
                    Thomas Anderson
                  </h4>
                  <p className="w-full text-sm text-slate-500">
                    The chosen one, a hacker who can bend the rules.
                  </p>
                </div>
                <span className="inline-flex items-center justify-center gap-1 rounded-full bg-pink-500 px-1.5 text-sm text-white">
                  2<span className="sr-only"> new emails</span>
                </span>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="shrink-0 self-start">
                  <a
                    href="#"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full text-white"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=7"
                      alt="user name"
                      title="user name"
                      width="40"
                      height="40"
                      className="max-w-full rounded-full"
                    />
                    <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
                      <span className="sr-only"> online </span>
                    </span>
                  </a>
                </div>
                <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0">
                  <h4 className="w-full truncate text-base text-slate-700">
                    Luke Skywalker
                  </h4>
                  <p className="w-full text-sm text-slate-500">
                    A Jedi warrior who fights against the dark side.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="shrink-0 self-start">
                  <a
                    href="#"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full text-white"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=5"
                      alt="user name"
                      title="user name"
                      width="40"
                      height="40"
                      className="max-w-full rounded-full"
                    />
                    <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
                      <span className="sr-only"> online </span>
                    </span>
                  </a>
                </div>
                <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0">
                  <h4 className="w-full truncate text-base text-slate-700">
                    Sarah Connor
                  </h4>
                  <p className="w-full text-sm text-slate-500">
                    A fierce resistance leader who fights against machines.
                  </p>
                </div>
                <span className="inline-flex items-center justify-center gap-1 rounded-full bg-pink-500 px-1.5 text-sm text-white">
                  1<span className="sr-only"> new emails</span>
                </span>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <div className="shrink-0 self-start">
                  <a
                    href="#"
                    className="relative flex h-10 w-10 items-center justify-center rounded-full text-white"
                  >
                    <img
                      src="https://i.pravatar.cc/40?img=11"
                      alt="user name"
                      title="user name"
                      width="40"
                      height="40"
                      className="max-w-full rounded-full"
                    />
                    <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
                      <span className="sr-only"> offline </span>
                    </span>
                  </a>
                </div>
                <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0">
                  <h4 className="w-full truncate text-base text-slate-700">
                    Captain James T. Kirk
                  </h4>
                  <p className="w-full text-sm text-slate-500">
                    A charismatic and adventurous captain.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
