"use client";
import React, { useEffect, useState } from "react";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getPosts, postComments, postPosts } from "@/components/services/axios";
import { FaPaperPlane } from "react-icons/fa";

export default function BaseUserFeedNested() {
  const [comment, setComment] = useState("");
  const [data, setData] = useState("");
  const [posts, setPosts] = useState([
    {
      id: "",
      author_name: "",
      body: "",
      comments: [{ name: "", comment: "" }],
    },
  ]);
  const getData = async () => {
    let res = await getPosts({});
    if (!!res) setPosts(res);
  };
  const handleComment = async (id: String) => {
    await postComments(comment, id);
    setComment("");
    getData();
  };
  const handleSubmit = async (e: any) => {
    await postPosts(data);
    setData("");
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 lg:col-span-8 md:col-span-12">
            <div className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                value={data}
                onChange={(e) => setData(e.target.value)}
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
                <Button
                  type="button"
                  size="sm"
                  className="ml-auto gap-1.5"
                  onClick={handleSubmit}
                >
                  Add Post
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </div>
            <ul
              aria-label="Nested user feed"
              role="feed"
              className="relative flex flex-col gap-12 p-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 "
            >
              <li role="article" className="relative pl-6 ">
                {posts.map((d, i) => (
                  <>
                    <div className="flex flex-col flex-1 gap-2 py-4">
                      <a
                        href="#"
                        className="absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white"
                      >
                        <img
                          src={`https://i.pravatar.cc/48?img=${i}`}
                          alt="user name"
                          title="user name"
                          width="48"
                          height="48"
                          className="max-w-full rounded-full"
                        />
                      </a>
                      <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                        <span className="flex-1">
                          {d.author_name}
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
                      <p className="text-sm text-slate-500">{d.body}</p>
                    </div>
                    <ul
                      role="group"
                      className="relative flex flex-col gap-2 pl-6 mb-2 before:absolute before:top-6 before:left-6 before:bottom-6 before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-12 after:left-6 after:bottom-12 after:-translate-x-1/2 after:border after:border-slate-200"
                    >
                      {d.comments.map((c, index) => (
                        <li role="article" className="relative pl-6 ">
                          <div className="flex flex-col flex-1 gap-2">
                            <a
                              href="#"
                              className="absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white"
                            >
                              <img
                                src={`https://i.pravatar.cc/48?img=${index}`}
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                              />
                            </a>
                            <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                              <span className="flex-1">
                                {c.name}
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
                              {c.comment}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <section>
                      <div className="container px-6 m-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                          <div className="col-span-4 lg:col-span-10">
                            <div className="relative py-1">
                              <input
                                id="id-b03"
                                type="text"
                                name="id-b03"
                                placeholder="your name"
                                value={comment}
                                className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                onChange={(e) => setComment(e.target.value)}
                              />
                              <label
                                htmlFor="id-b03"
                                className="absolute left-2 -top-1 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-1 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-1 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                              >
                                Comment
                              </label>
                            </div>
                          </div>
                          <div className="col-span-4 lg:col-span-2">
                            <button
                              className="inline-flex mt-1 h-10 items-center justify-center gap-2 self-center justify-self-center whitespace-nowrap rounded-full bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none"
                              type="button"
                              onClick={() => handleComment(d.id)}
                            >
                              <span className="relative only:-mx-5">
                                <span className="sr-only">Add Comment</span>
                                <FaPaperPlane size={18} />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  </>
                ))}
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
