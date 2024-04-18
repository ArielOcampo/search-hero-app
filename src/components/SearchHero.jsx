import { useState, useEffect } from "react";
import { getCharacterByName } from "../functions/functions";
import { CardsWithHoverEffect } from "./ui/card-hover-effect";
import { cn } from "../utils/cn";

import groot from "../assets";

export const SearchHero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charactersData = await getCharacterByName(searchTerm);
        setCharacters(charactersData.data?.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.trim() === "") {
      setCharacters([]);
    }
  };

  return (
    <>
      <div className=" mx-auto p-4">
        <h1 className="relative z-10  text-[60px]   bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Search My Marvel Hero
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Find Marvel superheroes quickly by name. Our app streamlines the
          search process, providing instant access to superhero profiles. Dive
          into the Marvel universe!
        </p>
        <input
          type="text"
          placeholder="Search my Marvel Hero"
          className="rounded-lg border  py-2 px-2 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-2/4 relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>

      {characters.length === 0 && searchTerm !== "" && (
        <div className={cn("py-10 flex justify-end items-center")}>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
            "Looks like Loki's been up to mischief again! Couldn't find the hero
            you're looking for. Keep searching!"
          </p>
          <img
            src={groot}
            alt="Groot triste"
            className="groot-image z-50 w-2/5"
          />
        </div>
      )}

      {characters.length > 0 && (
        <CardsWithHoverEffect characters={characters} />
      )}
    </>
  );
};
