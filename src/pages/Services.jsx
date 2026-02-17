import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaRegNewspaper,
  FaLaptopCode,
  FaChartLine,
  FaFutbol,
  FaHeartbeat,
  FaGlobeAsia,
  FaFilm,
  FaUniversity,
  FaFlask,
} from "react-icons/fa";

const servicesData = [
  {
    title: "General News",
    icon: <FaRegNewspaper />,
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  },
  {
    title: "Technology",
    icon: <FaLaptopCode />,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Business & Finance",
    icon: <FaChartLine />,
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
  },
  {
    title: "Sports",
    icon: <FaFutbol />,
    image:
      "https://images.unsplash.com/photo-1505842465776-3d90f616310d",
  },
  {
    title: "Health",
    icon: <FaHeartbeat />,
    image:
      "https://images.unsplash.com/photo-1580281657521-7a0b8e4d16d7",
  },
  {
    title: "World News",
    icon: <FaGlobeAsia />,
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764b8a",
  },
  {
    title: "Entertainment",
    icon: <FaFilm />,
    image:
      "https://images.unsplash.com/photo-1497032205916-ac775f0649ae",
  },
  {
    title: "Politics",
    icon: <FaUniversity />,
    image:
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe",
  },
  {
    title: "Science",
    icon: <FaFlask />,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="py-20 px-4 md:px-20 bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">
          DG News Categories
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative h-72 rounded-xl overflow-hidden group shadow-lg"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
                <div className="text-4xl text-orange-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm opacity-90">
                  Latest updates in {service.title}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
