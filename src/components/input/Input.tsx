"use client";

import type {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
} from "react";

interface InputProps {
  type?: HTMLInputTypeAttribute;
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  name: string;
  textarea?: boolean;
  id: string;
  placeholder?: string;
  big?: boolean;
}

export default function Input({
  type,
  value,
  onChange,
  name,
  textarea,
  id,
  placeholder,
  big,
}: InputProps) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className={`form-control py-2 mt-3 mb-3 form-control:hover form-control:focus  ${
        textarea ? "w-700px h-500px" : "w-full"
      } ${big ? "w-[400px] pb-[6rem]" : ""}`}
    />
  );
}
