import headerStyles from "./header.module.css";
import Logo from "../../images/logo34.jpg";
import Image from "next/image";
import Hamburger from "./hamburger";

export default function Header() {
  return (
    <>
      <div className={headerStyles.outerContainer}>
        <div className={headerStyles.logoContainer}>
          <Image src={Logo} alt="Picture of the Logo" className={headerStyles.headerImage}/>
        </div>

        <div className={headerStyles.servicesContainer}>
          <div className={headerStyles.tile}>About Us</div>
          <div className={headerStyles.tile}>Contact</div>
        </div>
        <Hamburger />
      </div>
    </>
  );
}
