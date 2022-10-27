"use client";

import { FormEvent } from "react";
import { updateUrlParameter } from "../utils/update-url-params";

export const Search = () => {
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
      updateUrlParameter("search", event.currentTarget.value);
  };

  return (
      <input
      type="text"
      placeholder="🔎 Find package..."
      className="w-full border border-white bg-inherit p-2"
      onChange={handleChange}
      />
  );
};
