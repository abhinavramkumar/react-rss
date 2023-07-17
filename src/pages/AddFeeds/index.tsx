import DefaultCard from "../../components/DefaultCard";

interface IProps {}

const AddFeeds = ({}: IProps) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <DefaultCard
          title="Url"
          body="Add a feed using its URL"
          onClick={() => {
            addRssUrl();
          }}
        ></DefaultCard>
        <DefaultCard
          title="OPML"
          body="Import you feeds with a .opml file"
          onClick={() => {
            addOpmlFile();
          }}
        ></DefaultCard>
      </div>
    </div>
  );
};

export default AddFeeds;
