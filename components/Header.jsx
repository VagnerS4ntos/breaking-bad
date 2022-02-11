import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [search, setSearch] = React.useState('');
  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <header className="grid grid-cols-1 sm:grid-cols-2 sm:items-center sm:justify-between text-center sm:text-left">
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </a>
      </Link>
      <form className="sm:text-right" onSubmit={handleSearch}>
        <input
          type="text"
          className="border-2 rounded-full px-2"
          placeholder="Search..."
        />
      </form>
    </header>
  );
}

export default Header;
