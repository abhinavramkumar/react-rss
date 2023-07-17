import Dock from "./Dock";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const PageWithDock = ({ children }: IProps) => {
  return (
    <>
      {children}
      <Dock></Dock>
    </>
  );
};

export default PageWithDock;
