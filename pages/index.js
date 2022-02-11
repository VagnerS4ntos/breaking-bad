import Image from 'next/image';
import Link from 'next/link';

export default function Home({ characters }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 place-items-center my-10">
      {characters.map((character) => (
        <div key={character.char_id} className="relative">
          <Link href={`/character/${character.char_id}`}>
            <a>
              <Image
                src={character.img}
                alt={character.name}
                width={200}
                height={275}
              />
            </a>
          </Link>

          <h2 className="text-white text-center bg-black absolute inset-x-0 bottom-0">
            {character.name}
          </h2>
        </div>
      ))}
    </div>
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
