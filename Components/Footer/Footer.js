import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterRight from "./FooterRight";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <FooterLogo />
        <FooterRight />
        <FooterLinks />
        <FooterContact />
      </div>
    </footer>
  );
}
