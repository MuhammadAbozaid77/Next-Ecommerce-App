"use client";

type propsType = {
  children: React.ReactNode;
  classesName?: string;
};
export default function Button({ children, classesName }: propsType) {
  return (
    <>
      <button
        className={`uppercase rounded-md bg-black text-white py-3 px-4 ${classesName}`}
      >
        {children}
      </button>
    </>
  );
}
