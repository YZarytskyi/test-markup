"use client";

import Link from "next/link";
import data from "./data.json";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type TreeItem = {
  createdAt: string;
  updatedAt: string;
  children: TreeItem[] | null;
  id: number;
  name: string;
};

type ExpandedItems = {
  [key: number]: boolean;
};

const MultiSelect = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});

  const handleSelectItem = (id: number) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id],
    );
  };

  const handleExpandItem = (id: number) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [id]: !prevExpandedItems[id],
    }));
  };

  const renderTree = (items: TreeItem[]): JSX.Element[] =>
    items.map((item) => (
      <div key={item.id} className="border-b border-gray-200 pl-4">
        <div className="flex items-center border-b border-gray-200 py-2">
          <input
            type="checkbox"
            className="form-checkbox mr-2 h-4 w-4 text-blue-600"
            checked={selectedItems.includes(item.id)}
            onChange={() => handleSelectItem(item.id)}
          />
          <span className="flex-grow text-gray-700">{item.name}</span>
          {item.children && (
            <button
              onClick={() => handleExpandItem(item.id)}
              className={twMerge(
                "h-5 w-5 rotate-0 text-gray-500 transition-transform hover:text-gray-700 focus:outline-none",
                expandedItems[item.id] && "rotate-180",
              )}
            >
              <img src="/icons/chevron.svg" alt="Chevron" />
            </button>
          )}
        </div>
        {expandedItems[item.id] && item.children && (
          <div className="ml-4 mt-1">{renderTree(item.children)}</div>
        )}
      </div>
    ));

  return (
    <main>
      <Link
        href="/"
        className="block w-full py-10 text-center text-3xl underline transition-colors hover:text-accent"
      >
        Landing
      </Link>
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="py-2 text-center text-2xl">MultiSelect</h1>
        <div className="overflow-hidden rounded-md bg-white pr-5 shadow">
          {renderTree(data)}
        </div>
      </div>
    </main>
  );
};

export default MultiSelect;
