import { useForm } from "react-hook-form";
import { logInUser } from "../../redux/features/user/userSlice";
import { useAppDispatch } from "../../redux/hook";

interface SignInFormInputs {
  email: string;
  password: string;
}

export default function SignInForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormInputs>();

  const onSubmit = (data: SignInFormInputs) => {
    dispatch(logInUser(data));
    reset();
  };

  return (
    <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="form_error">{errors.email.message}</p>}
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p className="form_error">{errors.password.message}</p>
        )}
      </div>
      <div className="mt-3">
        <button className="btn w-full btn-sm btn-primary">Sign In</button>
      </div>
    </form>
  );
}
