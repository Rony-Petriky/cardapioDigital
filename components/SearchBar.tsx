"use client";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

export default function SearchBar() {
  const [value, setValue] = useState("");
  useDebounce(value, 400);

  return (
    <input
      type="text"
      placeholder="Buscar produtos..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full border p-3 rounded-lg shadow-sm"
    />
  );
}