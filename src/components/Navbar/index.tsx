import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import Logo from "../../assets/logo.png";
import * as S from "./styles";

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <S.Header>
      <nav>
        <S.LogoLink href="/">
          <img src={Logo} alt="Logo" />
          Build<span>PC</span>
        </S.LogoLink>

        <S.BuildPages>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#recipes">Build</a>
          </li>
          {/* <li>
            <a href="/#recipes">Favorites</a>
          </li> */}
        </S.BuildPages>

        <S.ButtonSign>
          <span>Sign in</span>
        </S.ButtonSign>

        <S.IconSign onClick={() => setOpen((prev) => !prev)}>
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </S.IconSign>
      </nav>
      <S.OptionsRoute open={open}>
        <a href="/" onClick={() => setOpen((prev) => !prev)}>
          Home
        </a>
        <a href="/#recipes" onClick={() => setOpen((prev) => !prev)}>
          Build
        </a>
      </S.OptionsRoute>
    </S.Header>
  );
};

export default NavBar;
