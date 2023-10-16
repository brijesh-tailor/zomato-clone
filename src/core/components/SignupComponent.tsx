import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
/**********************************************************************/
import { SignupForm } from "../models/common.model";

const SignupComponent = () => {
  const form = useForm<SignupForm>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: SignupForm) => {
    console.log(data);
  };
  return (
    <div className="signup-modal">
      <div className="signup-modal-content">
        <div className="signup-modal-header">
          <h2 className="signup-header-title">Signup</h2>
          <button
            className="close-icon"
            // onClick={() => closeSignupModal(false)}
          />
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                id="username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                })}
              />
              <p>{errors.username?.message}</p>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                    message: "Enter Valid Email",
                  },
                })}
              />
              <p>{errors.email?.message}</p>
            </div>
            <button>Create Account</button>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
