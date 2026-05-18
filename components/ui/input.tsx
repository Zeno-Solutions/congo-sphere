import React from "react";

type inputProps = {
  name?: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  className?: string;
  accept?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: inputProps) {
  return (
    <input
      className={`w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20`}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      required={props.required ? true : false}
      accept={props.accept ? props.accept : undefined}
      value={props.value}
      onChange={props.onChange ? props.onChange : undefined}
    />
  );
}
