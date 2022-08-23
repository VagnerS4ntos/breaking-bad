import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GlobalContext } from '../Storage/GlobalStorage';

export default function Home({ characters }) {
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    if (global.filterData == '') {
      global.setAllData(characters);
      global.setFilterData(characters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 px-2 justify-items-stretch gap-4 w-60 sm:w-full my-5">
      {global.filterData.length > 0 ? (
        global.filterData.map((character) => (
          <div
            key={character.char_id}
            className="relative grid place-items-center"
          >
            <Link href={`/character/${character.char_id}`}>
              <a className="w-60 h-96">
                <Image src={character.img} alt={character.name} layout="fill" />
              </a>
            </Link>

            <h2 className="text-white text-center bg-black absolute inset-x-0 bottom-0">
              {character.name}
            </h2>
          </div>
        ))
      ) : (
        <h1>No character found</h1>
      )}
    </main>
  );
}

export const getStaticProps = async () => {
  const response = await fetch('https://www.breakingbadapi.com/api/characters');
  const data = await response.json();

  return {
    props: {
      characters: data,
    },
  };
};
