import React, { useState } from "react";

interface Props {
  onSearch: (searchTerm: string) => void;
  onReset: () => void;
  placeholder?: string;
}

const SearchInput: React.FC<Props> = ({ onSearch, onReset, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const resetSearch = () => {
    setSearchTerm("");
    onReset();
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm) onSearch(searchTerm);
    else resetSearch();
  };

  return (
    <div>
      <div>
        <label
          htmlFor="search"
          className="block text-xl font-medium leading-6 text-gray-900"
        >
          Look for your favourite tracks
        </label>
        <div className="relative mt-2 flex items-center">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            id="default-search"
            placeholder={placeholder ? placeholder : "Search..."}
            className="block w-full text-xl leading-6 p-4 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200"
          />
          <div className="absolute inset-y-0 right-0 flex p-4">
            <div>
              <svg
                onClick={resetSearch}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
