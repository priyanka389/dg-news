import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <section className="py-20 px-4 md:px-20 bg-gray-100 text-gray-800">
        
        <h2 className="text-4xl font-bold text-center mb-8">
          About DGNews
        </h2>

        <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
          DGNews is your trusted source for the latest news, insights,
          and stories from around the world. We aim to provide accurate,
          timely, and unbiased information to keep you informed and empowered.
        </p>

      </section>

      <Footer />
    </div>
  );
};

export default About;
