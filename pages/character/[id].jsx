import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Member({ character }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container mx-auto flex flex-col items-center sm:flex-row sm:items-start gap-5 my-10 px-2">
      <div>
        <Image
          src={character[0].img}
          alt={character[0].img}
          width={400}
          height={550}
        />
      </div>
      <div>
        <ul className="text-xl my-5">
          <li>
            <span className="font-semibold">Name</span>: {character[0].name}
          </li>
          <li>
            <span className="font-semibold">Nickname</span>:{' '}
            {character[0].nickname}
          </li>
          <li>
            <span className="font-semibold">Birthday</span>:{' '}
            {character[0].birthday}
          </li>
          <li>
            <span className="font-semibold">Occupation</span>:{' '}
            <ol>
              {character[0].occupation.map((item) => (
                <li key={item} className="list-disc ml-10">
                  {item}
                </li>
              ))}
            </ol>
          </li>
          <li>
            <span className="font-semibold">Status</span>: {character[0].status}
          </li>
          <li>
            <span className="font-semibold">Portrayed</span>:{' '}
            {character[0].portrayed}
          </li>
        </ul>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch(`https://www.breakingbadapi.com/api/characters`);
  const data = await response.json();

  const paths = data.map((character, index) => {
    return { params: { id: character.char_id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(
    `https://www.breakingbadapi.com/api/characters/${id}`,
  );
  const data = await response.json();

  return {
    props: {
      character: data,
    },
  };
};
