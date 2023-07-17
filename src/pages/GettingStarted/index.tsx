import DefaultCard from "../../components/DefaultCard";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { useNavigate } from "react-router-dom";

interface IProps {}

const GettingStarted = ({}: IProps) => {
  const navigate = useNavigate();

  return (
    <Flowbite>
      <DarkThemeToggle />
      <div>
        <div className="grid grid-cols-3 gap-5">
          <DefaultCard
            title="Url"
            body="Add a feed using its URL"
            onClick={() => {
              navigate("/add-rss-url");
            }}
          ></DefaultCard>
          <DefaultCard
            title="OPML"
            body="Import you feeds with a .opml file"
            onClick={() => {
              navigate("/add-opml-file");
            }}
          ></DefaultCard>
        </div>
      </div>
    </Flowbite>
  );
};

export default GettingStarted;
