import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/evento.webp" alt="EVENTO logo" width={53} height={12} />
    </Link>
  );
};

export default Logo;
