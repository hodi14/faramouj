import Link from "next/link";
import Image from "next/image";
import logo from '../public/assets/images/logoWhite.png';

export default function HeaderLogo() {
  return (
    <div className="headerLogo">
      <Link href="/" passHref>
        <Image loading="eager" src={logo} layout='fill' alt='FARAMOUJ'  />
      </Link>
    </div>
  );
}
