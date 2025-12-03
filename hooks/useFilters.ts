import { useState } from "react";

export function useFilters() {
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [search, setSearch] = useState("");

  return { category, priceRange, search, setCategory, setPriceRange, setSearch };
}