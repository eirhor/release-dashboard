"use client";

import { FormEvent } from "react";
import { updateUrlParameter } from "../utils/update-url-parameter";

export const Search = () => {
  const SearchParameterKey = "package";
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    updateUrlParameter(SearchParameterKey, event.currentTarget.value);
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
