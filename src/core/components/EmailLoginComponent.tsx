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
    if (e?.target?.className === "modal") {
      closeEmailLogin(false);
    }
  };

  //   const navigateToLoginModal = (value: boolean) => {
  //     navigateToLoginModal(value);
  //   };

  return (
    <div className="modal" onClick={(e) => backdropClick(e)}>
      <div className="modal-email-login-content">
        <div className="d-flex align-items-center justify-content-between mt-16">
          <span className="title-email-login">Login</span>
          <button
            className="icon-close"
            onClick={() => closeEmailLoginModal(false)}
          />
        </div>
        <div className="d-flex">
          <span className="icon-email-envelop"></span>
        </div>
        <form
          className="d-flex email-login-form-container"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <input
            type="text"
            className="input-email-login"
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
          <button className="btn-otp">Send One Time Password</button>
          <div className="d-flex align-items-center mt-6 mb-12">
            <div className="hr"></div>
          </div>
        </form>
        <p className="text-email-login">
          Already have an account?&nbsp;
          <span
            className="link-email-login"
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
