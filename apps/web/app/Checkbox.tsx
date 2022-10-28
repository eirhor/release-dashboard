"use client";

import { FormEvent } from "react";
import { updateUrlParameter } from "../utils/update-url-parameter";

export const CheckBox = ({ name, label }: { name: string; label: string }) => {
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    updateUrlParameter(name, event.currentTarget.checked ? "true" : "");
  };

  return (
    <label className="flex cursor-pointer gap-2">
      <input type="checkbox" name={name} onChange={handleChange} />
      {label}
    </label>
  );
};
