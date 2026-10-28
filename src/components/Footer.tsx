import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <span>Independent notes from the street and the market.</span>
      <nav aria-label="Legal">
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/terms-of-service">Terms</Link>
      </nav>
    </footer>
  );
};

export default Footer;
