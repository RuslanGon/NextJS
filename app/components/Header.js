import Link from "next/link.js";

const Header = () => {
  return (
    <header>
      <strong>itProgect</strong>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
