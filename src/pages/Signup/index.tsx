import { useForm } from "react-hook-form";
import TextInput from "../../components/TextInput";
import ApiService from "../../services/Api";
import { GetNotficationContext } from "../../contexts/Notification";

interface IProps {}

type FormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = (props: IProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();
  const { notify } = GetNotficationContext();

  async function onSubmit({ email, password }: FormInputs) {
    const response = await ApiService.login<{ message: string }>({
      email,
      password,
    });

    if (response.status == 200) {
      console.log("User logged in");
    } else {
      notify({
        text: response.data.message,
        type: "error",
      });
    }
  }

  return (
    <div className="py-10">
      <h1 className="text-center text-2xl font-bold mb-2">Sign Up</h1>
      <p className="text-center text-base mb-4">
        Enter you email to login to the FeedSurfer App
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          register={register("email")}
          name="email"
          label="Email"
          errorText={errors.email?.message}
          error={errors.email}
          className="w-full"
        ></TextInput>

        <TextInput
          register={register("password")}
          name="password"
          label="Password"
          errorText={errors.password?.message}
          error={errors.password}
          className="w-full"
        ></TextInput>

        <TextInput
          register={register("confirmPassword")}
          name="confirmPassword"
          label="Confirm Password"
          errorText={errors.password?.message}
          error={errors.password}
          className="w-full"
        ></TextInput>

        <button className="btn w-full bg-black text-white shadow-lg">
          Sign Up
        </button>

        <div className="divider text-gray-400">OR</div>

        <button className="btn w-full bg-black text-white shadow-lg">
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
