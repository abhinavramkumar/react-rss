import * as React from "react";
import DefaultModal from "./DefaultModal";
import OpmlForm from "./OpmlForm";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
}

const OpmlFormModal = ({ open, setOpen }: IProps) => {
  return (
    <DefaultModal
      open={open}
      setOpen={setOpen}
      header={"Upload your .opml file"}
      body={<OpmlForm />}
      footer={
        <>
          <button className="btn" onClick={() => setOpen}>
            Cancel
          </button>
          <button className="btn" type="submit">
            Upload
          </button>
        </>
      }
    ></DefaultModal>
  );
};

export default OpmlFormModal;
