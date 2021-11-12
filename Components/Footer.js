import Link from "next/link";
import FooterContact from "./FooterContact";
import FooterRight from "./FooterRight";

export default function Footer() {
  return (
    <footer>
      <div className="content">
      <FooterRight />
      <FooterContact />
      </div>
    </footer>
  );
}
