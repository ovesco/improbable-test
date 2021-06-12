import Link from 'next/link';

function Menu() {

  const routes = [
    { title: 'Accueil', path: '/', color: 'bg-blue-200' },
    { title: 'Nos Bières', path: '/nos-bieres', color: 'bg-red-200' },
    { title: 'La Brasserie', path: '/brasserie', color: 'bg-green-200' },
    { title: 'Points de Vente', path: '/points-de-vente', color: 'bg-indigo-200' },
    { title: 'Actualités', path: '/actualites', color: 'bg-pink-200' },
    { title: 'Contact', path: '/contact', color: 'bg-yellow-200' },
  ];

  return (
    <div>
      {routes.map(it => (
        <div key={it.path} className="mb-5">
          <Link href={it.path}>
            <div className="relative group cursor-pointer flex flex-col items-center">
              <span className="relative font-barlow text-4xl">
                <span className={`absolute w-full h-3 left-0 top-5 scale-x-0 transform group-hover:scale-x-100 transition-all duration-200 origin-left ${it.color}`}></span>
                <span className="relative text-gray-800">{it.title}</span>
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;