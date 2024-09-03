type propsType = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: propsType) {
  return (
    <>
      <div className="2xl:px-64  xl:px-32 lg:px-16 md:px-8 px-4 bg-green-500 h-20">
        {children}
      </div>
    </>
  );
}
