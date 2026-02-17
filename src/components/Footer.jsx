import { FaRegNewspaper } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#666666] text-gray-200 py-32">
      
      <div className="max-w-6xl mx-auto px-12">

        {/* Top Section */}
        <div className="flex justify-between">
          
          {/* Left Links */}
          <div className="space-y-8 text-xl">
            <p className="cursor-pointer hover:text-white transition">
              Contact Us
            </p>
            <p className="cursor-pointer hover:text-white transition">
              Terms & Conditions
            </p>
            <p className="cursor-pointer hover:text-white transition">
              Privacy Policy
            </p>
          </div>

          {/* Right Links */}
          <div className="space-y-8 text-xl text-right">
            <p className="cursor-pointer hover:text-white transition">
              Facebook
            </p>
            <p className="cursor-pointer hover:text-white transition">
              Twitter
            </p>
            <p className="cursor-pointer hover:text-white transition">
              Email
            </p>
          </div>

        </div>

        {/* Bottom Logo Section */}
        <div className="mt-24">
          
          <div className="flex items-center gap-6">
            
            <div className="bg-red-500 w-14 h-14 flex items-center justify-center rounded-xl">
              <FaRegNewspaper className="text-white text-3xl" />
            </div>

            <h2 className="text-6xl font-semibold text-white">
              DG <span className="font-light">News</span>
            </h2>

          </div>

          <div className="mt-8 text-gray-300 text-lg">
            <p>DG News Pte. Ltd</p>
            <p>© COPYRIGHT {new Date().getFullYear()}</p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
