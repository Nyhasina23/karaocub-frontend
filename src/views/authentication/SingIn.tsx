import React from "react";
import InputField from "../../componentes/InputField";
import backImage from "../../assets/Vector.png";
import logo from "../../assets/Logo.png";

const SingIn = () => {
  return (
    <div className="relative flex w-full h-screen items-center justify-center bg-[#010827]">
      <img
        className="fixed top-0 left-0 w-full h-[65rem]"
        src={backImage}
        alt="bgImg"
      />
      <div className="relative p-8 flex flex-col justify-center rounded-2xl bg-white w-[28rem] h-[30rem] z-10">
        <img
          className="absolute -top-[10rem] left-[6rem]"
          src={logo}
          alt="logo"
        />
        <h1 className="mb-6 text-2xl text-[#333] font-semibold">Sign in</h1>
        <InputField label="Email" className="mb-4" />
        <InputField label="Password" className="mb-4" />
        <button className="signin-btn w-full mb-8 text-white font-medium transition-all duration-300">
          Sign in
        </button>
        <p className="text-center text-[#333]">
          Please sign in to your account to access all features and manage your
          event.
        </p>
      </div>
    </div>
  );
};

export default SingIn;
