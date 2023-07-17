import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import { HTMLAttributes } from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorText: string | undefined;
  register: any;
  error: FieldError | undefined;
}

const TextInput = ({
  label,
  errorText,
  register,
  error,
  name,
  className = "",
  ...rest
}: IProps) => {
  return (
    <div className="form-control w-full">
      <label className="label text-black">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        name={name}
        placeholder="Type here"
        className={classNames(
          "input input-bordered w-full",
          error && "input-error",
          className
        )}
        {...register}
        {...rest}
      />
      <label className="label">
        <span className="label-text-alt">{errorText}</span>
      </label>
    </div>
  );
};

export default TextInput;
