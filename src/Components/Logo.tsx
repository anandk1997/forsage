import { NavLink } from "react-router-dom";

export const Logo = ({ src }: { src: string }) => {
  return (
    <NavLink to="/">
      <img src={src} className="mr-3" height={"10px"} width="40px" />
    </NavLink>
  );
};
