"use client";
import { useState, useRef } from "react";

function FunSelect({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const buttonRef = useRef(null);

  const optionsWithLabels = options.map((option) => ({
    value: option,
    label: option.replace(option.charAt(0), option.charAt(0).toUpperCase()),
  }));

  const selectedOption = optionsWithLabels.find((opt) => opt.value === value);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) =>
            prev < options.length - 1 ? prev + 1 : prev,
          );
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (isOpen && focusedIndex >= 0) {
          onChange(options[focusedIndex].value);
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
        break;
      case "Escape":
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
    }
  };

  return (
    <article className="terminal-gradient-background scanlines relative">
      {/* Button with ARIA attributes */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="category-label"
        className={`${isOpen ? "rounded-b-none border-b-[0px]" : ""} w-full rounded border px-3 py-2 text-left`}
      >
        {selectedOption?.label || "Select..."}
      </button>

      {/* Dropdown with ARIA attributes */}
      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby="category-label"
          tabIndex={-1}
          className="terminal-gradient-background scanlines blur-pane absolute z-10 max-h-60 w-full overflow-auto rounded-md rounded-t-none border border-t-[0px] py-1"
        >
          {optionsWithLabels.map((option, index) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
                buttonRef.current?.focus();
              }}
              onMouseEnter={() => setFocusedIndex(index)}
              className={`cursor-pointer px-4 py-2 ${
                option.value === value
                  ? "bg-blue-600 text-white"
                  : focusedIndex === index
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

{
  /* <div>
  <label id="category-label" className="mb-2 block text-white">
    Category
  </label>
  <CustomSelect
    value={category}
    onChange={setCategory}
    options={[
      { value: "produce", label: "Produce" },
      { value: "dairy", label: "Dairy" },
      { value: "bakery", label: "Bakery" },
    ]}
  />
</div>; */
}

export default FunSelect;
