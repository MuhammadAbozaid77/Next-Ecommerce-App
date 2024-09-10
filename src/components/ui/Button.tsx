"use client";

type propsType = {
  children: React.ReactNode;
  classesName?: string;
  type?: string;
  disabled?: boolean;
};
export default function Button({
  children,
  classesName,
  type,
  disabled,
}: propsType) {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        className={`uppercase rounded-md bg-black text-white py-3 px-4 ${classesName}`}
      >
        {children}
      </button>
    </>
  );
}
