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
    <article className="terminal-gradient-background scanlines blur-pane rounded-md border">
      {/* Button with ARIA attributes */}
      {/* TODO Gotta get this keyDown working */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="category-label"
        className={`${isOpen ? "rounded-b-none border-b border-current" : ""} w-full cursor-pointer border-none bg-transparent px-3 py-2 text-left outline-none`}
      >
        {selectedOption?.label || "Select..."}
      </button>

      {/* Dropdown with ARIA attributes */}
      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby="category-label"
          tabIndex={-1}
          className="max-h-60 overflow-auto border-t border-current py-1"
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
                  ? "bg-exhilarate text-vesper"
                  : focusedIndex === index
                    ? "rounded-md hover:border-3"
                    : "hover:alpha-shudder hover:border-3"
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

export default FunSelect;
