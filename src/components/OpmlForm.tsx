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
          <label className="label" htmlFor="file">
            <span className="label-text">Upload File</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
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
