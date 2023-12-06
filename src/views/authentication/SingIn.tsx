import InputField from "../../componentes/InputField";
import backImage from "../../assets/Vector.png";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const SingIn = () => {
  const navigate = useNavigate();
  const signIn = () => {
    navigate("/user");
  };

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
        <h1 className="mb-6 text-2xl text-[#333] font-semibold">
          Connectez-vous
        </h1>
        <InputField label="Adresse éléctronique " className="mb-4" />
        <InputField label="Mot de passe" className="mb-4" />
        <button
          className="signin-btn w-full mb-8 text-white font-medium transition-all duration-300"
          onClick={signIn}
        >
          Se Connecter
        </button>
        <p className="text-center text-[#333]">
          Veuillez vous connecter à votre compte pour accéder à toutes les
          fonctionnalités et gérer votre événement.
        </p>
      </div>
    </div>
  );
};

export default SingIn;
