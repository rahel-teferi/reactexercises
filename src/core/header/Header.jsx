import { Menu } from "./Menu";
import { Logo } from "./Logo";
import { IconNav } from "./IconNav";
import "./TopMenu.css";
export const Header = () => {
  return (
    <div className="headerHcs">
      <Logo />
      <Menu />
      <IconNav />
    </div>
  );
};
