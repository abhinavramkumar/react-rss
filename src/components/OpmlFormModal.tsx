import * as React from "react";
import { Button } from "flowbite-react";
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
          <Button onClick={() => setOpen}>Cancel</Button>
          <Button type="submit">Upload</Button>
        </>
      }
    ></DefaultModal>
  );
};

export default OpmlFormModal;
