import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="footerLinks">
      <h4>دسترسی سریع</h4>
      <ul>
        <li>
          <a href="#">آکادمی فراموج</a>
        </li>
        <li>
          <Link href="/">وبلاگ</Link>
        </li>
        <li>
          <Link href="/">سوالات متداول</Link>
        </li>
        <li>
          <Link href="/">درباره ما</Link>
        </li>
        <li>
          <Link href="/">تماس با ما</Link>
        </li>
      </ul>
    </div>
  );
}
