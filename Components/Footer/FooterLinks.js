import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="footerLinks">
      <h4>دسترسی سریع</h4>
      <ul>
        <li>
          <a href="https://faramouj.academy/">آکادمی فراموج</a>
        </li>
        <li>
          <Link href="/">وبلاگ</Link>
        </li>
        <li>
          <Link href="/about">درباره ما</Link>
        </li>
        <li>
          <Link href="/contact">تماس با ما</Link>
        </li>
      </ul>
    </div>
  );
}
