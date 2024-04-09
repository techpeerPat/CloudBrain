/** @format */

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";

const TabsGoogle = ({ categories, content, url }) => (
  <Tabs.Root
    defaultValue="all"
    className=" w-full flex flex-col lg:items-start lg:flex-row gap-8"
  >
    <Tabs.List
      className="flex lg:sticky lg:top-6 flex-col p-4 lg:w-2/5 border-light-gray border rounded-lg gap-4 text-body-base"
      aria-label="Manage your account"
    >
      <Tabs.Trigger
        value="all"
        className=" text-body-base px-3 py-[8.5px] text-left rounded-md data-[state=active]:border data-[state=active]:font-bold data-[state=active]:border-blue data-[state=active]:bg-[#02bef70f] data-[state=active]:shadow-sm "
      >
        View all
      </Tabs.Trigger>
      {categories.map((category) => (
        <Tabs.Trigger
          value={category.title}
          className="text-body-base px-3 py-[8.5px] text-left rounded-md data-[state=active]:border data-[state=active]:font-bold data-[state=active]:border-blue data-[state=active]:bg-[#02bef70f] data-[state=active]:shadow-sm"
        >
          {category.title}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    <div className=" flex flex-col gap-6 lg:w-3/5">
      {content.map((item) => (
        <Tabs.Content value="all">
          <div className=" bg-white group hover:cursor-pointer hover:bg-offwhite border border-light-gray rounded-lg p-6 relative">
            <a
              className="absolute w-full h-full top-0 left-0"
              href={`${url}${item.slug.current}`}
            ></a>
            <div className=" flex  flex-col-reverse md:flex-row md:items-center justify-between gap-2 mb-6">
              <div className=" flex flex-row flex-wrap gap-2">
                {item.category.map((item) => (
                  <div className=" bg-offwhite text-body-xs text-black px-2.5 border border-black rounded-full ">
                    {item.title}
                  </div>
                ))}
              </div>
              <div
                className=" w-[142px] flex flex-row justify-end items-center gap-1.5 text-dark-blue font-display text-display-btn font-medium"
                href={`${url}${item.slug.current}`}
              >
                Full Outline{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className=" rotate-45 group-hover:rotate-0"
                >
                  <path
                    d="M5.8335 14.1666L14.1668 5.83331M14.1668 5.83331H5.8335M14.1668 5.83331V14.1666"
                    stroke="#008EEF"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <p className=" text-body-lg font-semibold mb-4">{item.title}</p>
            <p className=" text-body-base font-semibold text-dark-gray mb-4">
              {item.shortDescription}
            </p>
            {item.length && (
              <div className=" flex flex-row gap-2 text-body-xs font-semibold text-dark-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_35_37720)">
                    <path
                      d="M9.99984 4.99996V9.99996L13.3332 11.6666M18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996Z"
                      stroke="#424A54"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_37720">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {item.length}
              </div>
            )}
          </div>
        </Tabs.Content>
      ))}{" "}
      {content.map((item) =>
        item.category.map((multiple) => (
          <Tabs.Content value={multiple.title}>
            <div className=" relative bg-white group hover:cursor-pointer hover:bg-offwhite border border-light-gray rounded-lg p-6">
              <a
                className="absolute w-full h-full top-0 left-0"
                href={`${url}${item.slug.current}`}
              ></a>
              <div className=" flex  flex-col-reverse md:flex-row md:items-center justify-between gap-2 mb-6">
                <div className=" flex flex-row flex-wrap gap-2">
                  {item.category.map((item) => (
                    <div className=" bg-offwhite text-body-xs text-black px-2.5 border border-black rounded-full ">
                      {item.title}
                    </div>
                  ))}
                </div>
                <div
                  className=" w-[142px] flex flex-row items-center gap-1.5 justify-end text-dark-blue font-display text-display-btn font-medium"
                  href={`${url}${item.slug.current}`}
                >
                  Full Outline{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className=" rotate-45 group-hover:rotate-0"
                  >
                    <path
                      d="M5.8335 14.1666L14.1668 5.83331M14.1668 5.83331H5.8335M14.1668 5.83331V14.1666"
                      stroke="#008EEF"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <p className=" text-body-lg font-semibold mb-4">{item.title}</p>
              <p className=" text-body-base font-semibold text-dark-gray mb-4">
                {item.shortDescription}
              </p>
              {item.length && (
                <div className=" flex flex-row gap-2 text-body-xs font-semibold text-dark-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_35_37720)">
                      <path
                        d="M9.99984 4.99996V9.99996L13.3332 11.6666M18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996Z"
                        stroke="#424A54"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_37720">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  {item.length}
                </div>
              )}
            </div>
          </Tabs.Content>
        ))
      )}
    </div>
  </Tabs.Root>
);
const TabsAws = ({ categories, content, url }) => (
  <Tabs.Root
    defaultValue="all"
    className=" w-full flex flex-col lg:items-start lg:flex-row gap-8"
  >
    <Tabs.List
      className="flex lg:sticky lg:top-6 flex-col p-4 lg:w-2/5 border-light-gray border rounded-lg gap-4 text-body-base"
      aria-label="Manage your account"
    >
      <Tabs.Trigger
        value="all"
        className=" text-body-base px-3 py-[8.5px] text-left rounded-md data-[state=active]:border data-[state=active]:font-bold data-[state=active]:border-blue data-[state=active]:bg-[#02bef70f] data-[state=active]:shadow-sm "
      >
        View all
      </Tabs.Trigger>
      {categories.map((category) => (
        <Tabs.Trigger
          value={category.title}
          className="text-body-base px-3 py-[8.5px] text-left rounded-md data-[state=active]:border data-[state=active]:font-bold data-[state=active]:border-blue data-[state=active]:bg-[#02bef70f] data-[state=active]:shadow-sm"
        >
          {category.title}
        </Tabs.Trigger>
      ))}
    </Tabs.List>
    <div className=" flex flex-col gap-6 lg:w-3/5">
      {content.map((item) => (
        <Tabs.Content value="all">
          <div className=" bg-white group hover:cursor-pointer hover:bg-offwhite border border-light-gray rounded-lg p-6 relative">
            <a
              className="absolute w-full h-full top-0 left-0"
              href={`${url}${item.slug.current}`}
            ></a>
            <div className=" flex  flex-col-reverse md:flex-row md:items-center justify-between gap-2 mb-6">
              <div className=" flex flex-row flex-wrap gap-2">
                {item.category.map((item) => (
                  <div className=" bg-offwhite text-body-xs text-black px-2.5 border border-black rounded-full ">
                    {item.title}
                  </div>
                ))}
              </div>
              <div
                className=" w-[142px] flex flex-row justify-end items-center gap-1.5 text-dark-blue font-display text-display-btn font-medium"
                href={`${url}${item.slug.current}`}
              >
                Full Outline{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className=" rotate-45 group-hover:rotate-0"
                >
                  <path
                    d="M5.8335 14.1666L14.1668 5.83331M14.1668 5.83331H5.8335M14.1668 5.83331V14.1666"
                    stroke="#008EEF"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <p className=" text-body-lg font-semibold mb-4">{item.title}</p>
            <p className=" text-body-base font-semibold text-dark-gray mb-4">
              {item.shortDescription}
            </p>
            {item.length && (
              <div className=" flex flex-row gap-2 text-body-xs font-semibold text-dark-gray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_35_37720)">
                    <path
                      d="M9.99984 4.99996V9.99996L13.3332 11.6666M18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996Z"
                      stroke="#424A54"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_35_37720">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                {item.length}
              </div>
            )}
          </div>
        </Tabs.Content>
      ))}{" "}
      {content.map((item) =>
        item.category.map((multiple) => (
          <Tabs.Content value={multiple.title}>
            <div className=" relative bg-white group hover:cursor-pointer hover:bg-offwhite border border-light-gray rounded-lg p-6">
              <a
                className="absolute w-full h-full top-0 left-0"
                href={`${url}${item.slug.current}`}
              ></a>
              <div className=" flex  flex-col-reverse md:flex-row md:items-center justify-between gap-2 mb-6">
                <div className=" flex flex-row flex-wrap gap-2">
                  {item.category.map((item) => (
                    <div className=" bg-offwhite text-body-xs text-black px-2.5 border border-black rounded-full ">
                      {item.title}
                    </div>
                  ))}
                </div>
                <div
                  className=" w-[142px] flex flex-row items-center gap-1.5 justify-end text-dark-blue font-display text-display-btn font-medium"
                  href={`${url}${item.slug.current}`}
                >
                  Full Outline{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className=" rotate-45 group-hover:rotate-0"
                  >
                    <path
                      d="M5.8335 14.1666L14.1668 5.83331M14.1668 5.83331H5.8335M14.1668 5.83331V14.1666"
                      stroke="#008EEF"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <p className=" text-body-lg font-semibold mb-4">{item.title}</p>
              <p className=" text-body-base font-semibold text-dark-gray mb-4">
                {item.shortDescription}
              </p>
              {item.length && (
                <div className=" flex flex-row gap-2 text-body-xs font-semibold text-dark-gray">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_35_37720)">
                      <path
                        d="M9.99984 4.99996V9.99996L13.3332 11.6666M18.3332 9.99996C18.3332 14.6023 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6023 1.6665 9.99996C1.6665 5.39759 5.39746 1.66663 9.99984 1.66663C14.6022 1.66663 18.3332 5.39759 18.3332 9.99996Z"
                        stroke="#424A54"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_37720">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  {item.length}
                </div>
              )}
            </div>
          </Tabs.Content>
        ))
      )}
    </div>
  </Tabs.Root>
);

export { TabsGoogle, TabsAws };
