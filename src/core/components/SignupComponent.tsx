import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
/**********************************************************************/
import { SignupForm } from "../models/common.model";
import { useState } from "react";
import { log } from "console";

type Props = {
  closeSignup: (value: boolean) => void;
  openLogin: (value: boolean) => void;
};

const SignupComponent: React.FC<Props> = ({ closeSignup, openLogin }) => {
  const [namePlaceholder, setNamePlaceholder] = useState<boolean>(false);
  const [emailPlaceholder, setEmailPlaceholder] = useState<boolean>(false);

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
    if (e?.target?.className === "signup-modal") {
      closeSignup(false);
    }
  };

  const onNameInputBlur = (value: boolean) => {
    control?._formValues?.username !== ""
      ? setNamePlaceholder(true)
      : setNamePlaceholder(value);
  };

  const onNameInputClick = (value: boolean) => {
    setNamePlaceholder(value);
  };

  const onEmailInputBlur = (value: boolean) => {
    control?._formValues?.email !== ""
      ? setEmailPlaceholder(true)
      : setEmailPlaceholder(value);
  };

  const onEmailInputClick = (value: boolean) => {
    setEmailPlaceholder(value);
  };

  return (
    <div className="signup-modal" onClick={(e) => backdropClick(e)}>
      <div className="signup-modal-content">
        <div className="signup-modal-header">
          <h2 className="signup-header-title">Signup</h2>
          <button
            className="icon-close-icon"
            onClick={() => closeSignupModal(false)}
          />
        </div>
        <div className="signup-form">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-control">
              <label
                htmlFor="username"
                className={
                  namePlaceholder
                    ? "form-control-label-top"
                    : "form-control-label"
                }
              >
                Full Name
              </label>
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
                onClick={() => onNameInputClick(true)}
                onBlur={() => onNameInputBlur(false)}
              />
              <p className="text-error">{errors.username?.message}</p>
            </div>
            <div className="form-control">
              <label
                htmlFor="email"
                className={
                  emailPlaceholder
                    ? "form-control-label-top"
                    : "form-control-label"
                }
              >
                Email
              </label>
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
                onClick={() => onEmailInputClick(true)}
                onBlur={() => onEmailInputBlur(false)}
              />
              <p className="text-error">{errors.email?.message}</p>
            </div>
            <div className="consent">
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
            <button className="create-account-button">Create Account</button>
          </form>

          <div className="horizontal-line-text">
            <hr className="hr" />
            <span className="or">or</span>
          </div>
          <button className="google-button">
            <span className="icon-google">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
              <span className="path5"></span>
            </span>
            <span className="google-text">Continue with Google</span>
          </button>
          <div className="horizontal-line">
            <hr className="hr" />
          </div>
          <p className="login-text">
            Already have an account?
            <span
              className="login-account-link"
              onClick={() => navigateToLogin(true)}
            >
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
