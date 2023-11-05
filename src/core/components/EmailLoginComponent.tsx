import React from "react";
import { useForm } from "react-hook-form";
import { EmailLogin } from "../models/common.model";

type Props = {
  closeEmailLogin: (value: boolean) => void;
  //   navigateToLoginModal: (value: boolean) => void;
};

const EmailLoginComponent: React.FC<Props> = ({ closeEmailLogin }) => {
  const form = useForm<EmailLogin>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: EmailLogin) => {
    console.log(data, errors, "qqwq");
  };

  const closeEmailLoginModal = (value: boolean) => {
    closeEmailLogin(value);
  };

  const backdropClick = (e: any) => {
    if (e?.target?.className === "email-login-modal") {
      closeEmailLogin(false);
    }
  };

  //   const navigateToLoginModal = (value: boolean) => {
  //     navigateToLoginModal(value);
  //   };

  return (
    <div className="email-login-modal" onClick={(e) => backdropClick(e)}>
      <div className="email-login-modal-content">
        <div className="email-login-modal-header">
          <span className="email-login-header-title">Login</span>
          <button
            className="icon-close-icon"
            onClick={() => closeEmailLoginModal(false)}
          />
        </div>
        <div className="email-envelop">
          <span className="icon-email-envelop"></span>
        </div>
        <form
          className="email-login-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <input
            type="text"
            className="email-login-form-input"
            placeholder="Email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
          />
          <p className="text-error">{errors.email?.message}</p>
          <button className="email-login-form-otp-button">
            Send One Time Password
          </button>
          <div className="hr"></div>
        </form>

        {/* <div className="email-login-horizontal-line">
          <span className="email-login-hr"></span>
        </div> */}
        <p className="email-login-text">
          Already have an account?&nbsp;
          <span
            className="email-login-link"
            onClick={() => closeEmailLoginModal(false)}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default EmailLoginComponent;
