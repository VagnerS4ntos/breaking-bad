import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GlobalContext } from './../Storage/GlobalStorage';

function Header() {
  const global = React.useContext(GlobalContext);
  const [search, setSearch] = React.useState('');

  function handleSearch(event) {
    event.preventDefault();
    const filter = global.allData.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.nickname.toLowerCase().includes(search.toLowerCase()),
    );
    global.setFilterData(filter);
  }

  return (
    <header className="container mx-auto grid grid-cols-1 sm:grid-cols-2 sm:items-center sm:justify-between place-items-center sm:place-items-stretch px-2 py-5">
      <Link href="/">
        <a className="w-fit">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </a>
      </Link>
      <form
        className="sm:text-right flex justify-center sm:justify-end gap-2 mt-2 sm:mt-0"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="border-2 rounded-full px-2"
          placeholder="Search..."
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <button className="bg-black text-white rounded-full p-1">Go</button>
      </form>
    </header>
  );
}

export default Header;
