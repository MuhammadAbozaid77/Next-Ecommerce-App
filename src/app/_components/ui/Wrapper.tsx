type propsType = {
  children: React.ReactNode;
  classesName?: string;
};

export default function Wrapper({ children, classesName }: propsType) {
  return (
    <>
      <div
        className={`2xl:px-64 xl:px-32 lg:px-16 md:px-8 px-4 ${classesName}`}
      >
        {children}
      </div>
    </>
  );
}
