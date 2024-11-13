import React from 'react';

const Versions = () => {
  const versions = [
    {
      name: "Alpha",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
      description: "Electronic beats with urban vibes"
    },
    {
      name: "Beta",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80",
      description: "Smooth jazz and soul rhythms"
    },
    {
      name: "Gamma",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
      description: "Modern pop and dance fusion"
    }
  ];

  return (
    <div className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Choose Your Style</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {versions.map((version, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={version.image}
                alt={version.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{version.name}</h3>
                  <p className="text-gray-300">{version.description}</p>
                  <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors">
                    Try Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Versions;