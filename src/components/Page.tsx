interface IProps {
  children: JSX.Element | JSX.Element[];
}

const Page = ({ children }: IProps) => {
  return (
    <main className="h-screen w-screen md:max-w-[90%] md:mx-auto lg:max-w-[80%] border border-red-500 px-5 md:px-8">
      {children}
    </main>
  );
};

export default Page;
