import React from 'react';

const MainB: React.FC = () => {
  const artworks = [1, 2, 3, 4, 5];

  return (
    <section className="text-center py-20 px-4">
      <h2 className="text-3xl font-heading font-semibold">In my free time I enjoy drawing</h2>
      <div className="w-full flex flex-row flex-nowrap justify-center px-4 py-10">
        {artworks.map((i) => (
          <div key={i} className="p-1 mr-4 last:mr-0">
            <div className="relative w-[190px] h-[190px] rounded-md overflow-hidden">
              <img
                src={`/img/Home/Art-${i}.JPG`}
                alt={`Artwork ${i}`}
                className="object-cover w-full h-full transition duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainB;

