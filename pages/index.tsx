export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-red-200 p-10">
      <div className="w-full h-full bg-gradient-to-tl from-yellow-100 to-red-200 p-10">
        <div className="relative w-full h-full bg-yellow-50">
          <div className="absolute w-full h-full flex flex-col justify-between">
            <h1 className="font-extrabold font-serif transform relative z-20 text-red-200" style={{ fontSize: '10rem', transform: 'scaleY(-1)', bottom: '3.3rem', right: '0.3rem' }}>Brasserie</h1>
            <h1 className="font-extrabold font-serif transform text-right z-20 relative text-yellow-100" style={{ fontSize: '10rem', top: '3.3rem', left: '0.3rem' }}>L'Improbable</h1>
          </div>
          <div className="w-full h-full grid grid-cols-3 relative">
            <div className="h-full relative group cursor-pointer" style={{ backgroundColor: '#eeeedc' }}>
              <div className="absolute top-0 left-0 h-full w-full transition-opacity group-hover:opacity-50 opacity-0 duration-500" style={{ backgroundImage: 'url(images/patterns/flowers4.jpg)' }}></div>
              <div className="h-full w-full flex flex-col justify-center items-center relative group-hover:scale-105 transform duration-300">
                <h3 className="text-3xl font-barlow text-gray-600">Découvrez</h3>
                <h1 className="text-5xl font-serif text-green-700 font-extrabold">Nos Bières</h1>
                <div className="relative group h-72 mt-10">
                  <div className="relative">
                    <img src="/images/beer.png" className="w-20 relative z-20" />
                    <img src="/images/beer.png" className="w-12 absolute bottom-0 left-4 transform origin-bottom -translate-y-2 group-hover:-translate-x-10 group-hover:-rotate-45 transition-all duration-500" />
                    <img src="/images/beer.png" className="w-12 absolute bottom-0 left-4 transform origin-bottom -translate-y-2 group-hover:translate-x-10 group-hover:rotate-45 transition-all duration-500" />
                    <img src="/images/beer.png" className="w-16 absolute bottom-0 left-2 transform origin-bottom group-hover:-translate-x-8 group-hover:-rotate-12 transition-all duration-300" />
                    <img src="/images/beer.png" className="w-16 absolute bottom-0 left-2 transform origin-bottom group-hover:translate-x-8 group-hover:rotate-12 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative group cursor-pointer"  style={{ backgroundColor: '#f9efe1' }}>
              <div className="absolute top-0 left-0 h-full w-full transition-opacity group-hover:opacity-50 opacity-0 duration-500" style={{ backgroundImage: 'url(images/patterns/flowers3.jpg)' }}></div>
              <div className="h-full w-full flex flex-col justify-center items-center relative group-hover:scale-105 transform duration-300">
                <h3 className="text-3xl font-barlow text-gray-600">Plongez dans</h3>
                <h1 className="text-5xl font-serif text-yellow-800 font-extrabold">La Brasserie</h1>
                <div className="h-72 w-full mt-10 relative">
                  <div className="h-full flex justify-center">
                    <img src="/images/cuve.png" className="w-28" />
                  </div>
                  <div className="absolute top-0 w-full h-full overflow-hidden">
                    <img src="/images/chope.png" className="absolute -left-52 transform w-44 -scale-x-1 group-hover:-left-16 group-hover:rotate-45 duration-500" />
                    <img src="/images/chope.png" className="absolute -right-52 transform w-44 group-hover:-right-16 group-hover:-rotate-45 duration-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full relative group cursor-pointer"  style={{ backgroundColor: '#f9ebe4' }}>
              <div className="absolute top-0 left-0 h-full w-full transition-opacity group-hover:opacity-50 opacity-0 duration-500" style={{ backgroundImage: 'url(images/patterns/flowers1.jpg)' }}></div>
              <div className="absolute w-full h-full overflow-hidden">
                <img src="/images/mountains.png" className="absolute transform bottom-0 translate-y-20 group-hover:scale-150 group-hover:-translate-y-20 duration-500 saturate-0" />
                <img src="/images/lausanne.png" className="absolute bottom-0 transform scale-150 translate-y-10 origin-left group-hover:scale-100 group-hover:translate-y-0 duration-300 filter saturate-0" />
              </div>
              <div className="h-full w-full flex flex-col justify-center items-center relative group-hover:scale-105 transform duration-300">
                <h3 className="text-3xl font-barlow text-gray-600">Savoir où</h3>
                <h1 className="text-5xl font-serif text-red-800 font-extrabold opacity-75">Nous Trouver</h1>
                <div className="h-72 w-full mt-10 relative">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
