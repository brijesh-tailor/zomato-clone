import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
/**********************************************************************/
import { SignupForm } from "../models/common.model";

type Props = {
  closeSignup: (value: boolean) => void;
  openLogin: (value: boolean) => void;
};

const SignupComponent: React.FC<Props> = ({ closeSignup, openLogin }) => {
  const form = useForm<SignupForm>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: SignupForm) => {
    console.log(data);
  };
  const navigateToLogin = (value: boolean) => {
    closeSignup(false);
    openLogin(value);
  };

  const closeSignupModal = (value: boolean) => {
    closeSignup(value);
  };

  const backdropClick = (e: any) => {
    if (e?.target?.className === "modal") {
      closeSignup(false);
    }
  };

  return (
    <div className="modal" onClick={(e) => backdropClick(e)}>
      <div className="modal-signup-content">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="title-signup">Signup</h2>
          <button
            className="icon-close"
            onClick={() => closeSignupModal(false)}
          />
        </div>
        <div className="signup-form-container">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="d-flex form-control">
              <input
                type="text"
                id="username"
                className="form-control-input"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                })}
              />
              <label htmlFor="username" className="form-control-label">
                Full Name
              </label>
              <p className="text-error">{errors.username?.message}</p>
            </div>
            <div className="d-flex form-control">
              <input
                className="form-control-input"
                type="email"
                id="email"
                // {...register("email", {
                //   pattern: {
                //     value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                //     message: "Enter Valid Email",
                //   },
                // })}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
              />
              <label htmlFor="email" className="form-control-label">
                Email
              </label>
              <p className="text-error">{errors.email?.message}</p>
            </div>
            <div className="d-flex consent-signup">
              <input type="checkbox" className="checkbox" />
              <span className="links">
                I agree to Zomato's&nbsp;
                <a target="_blank" href="https://www.zomato.com/conditions">
                  Terms of Service,&nbsp;
                </a>
                <a target="_blank" href="https://www.zomato.com/privacy">
                  Privacy Policy&nbsp;
                </a>
                and&nbsp;
                <a target="_blank" href="https://www.zomato.com/policies">
                  Content Policy
                </a>
              </span>
            </div>
            <button className="btn-create-account">Create Account</button>
          </form>
          <div className="d-flex align-items-center mt-6 mb-12">
            <div className="hr"></div>
            <span className="hr-text">or</span>
            <div className="hr"></div>
          </div>
          <button className="btn-signup d-flex justify-content-center align-items-center mb-28">
            <span className="icon-google">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
              <span className="path5"></span>
            </span>
            <span className="text">Continue with Google</span>
          </button>
          <div className="d-flex align-items-center mt-6 mb-12">
            <div className="hr"></div>
          </div>
          <p className="text-login">
            Already have an account?
            <span className="link-login" onClick={() => navigateToLogin(true)}>
              Login
            </span>
          </p>
          <DevTool control={control} />
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
