import { FileInput, Label } from "flowbite-react";
import * as React from "react";
import { useForm } from "react-hook-form";

interface IProps {}

const OpmlForm = (props: IProps) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  async function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="max-w-md" id="fileUpload">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload file" />
          </div>
          <FileInput
            helperText="A profile picture is useful to confirm your are logged into your account"
            id="file"
            accept="text/x-opml"
            onChange={(e) => {
              console.log(e.target.files[0]);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default OpmlForm;
