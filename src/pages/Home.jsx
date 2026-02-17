// src/pages/Home.jsx
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { 
  FaRegNewspaper, FaLaptopCode, FaChartLine, FaFutbol, 
  FaHeartbeat, FaGlobe, FaUniversity, FaFilm, 
  FaFacebookF, FaTwitter, FaEnvelope, FaInstagram, FaYoutube,
  FaBullseye, FaEye, FaHandshake, FaTimes, FaMicrochip,
  FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaThLarge
} from "react-icons/fa";

const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString('en-US', options));
  }, []);

  const newsData = [
    { id: 1, img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800", title: "Global Economic Shifts in 2026", cat: "Business", desc: "Sasaram and surrounding areas are seeing a shift in economic trends as digital trade increases. Experts suggest that 2026 will be a milestone year for local entrepreneurs." },
    { id: 2, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", title: "New Tech Innovations Unveiled", cat: "Tech", desc: "Latest technology tools are being introduced to help Bihar's farming community. These innovations aim to increase crop yield using AI and smart monitoring." },
    { id: 3, img: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=800", title: "Nature Conservation Milestones", cat: "World", desc: "Forest covers near the Rohtas plateau are being protected under new environmental laws." },
    { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79RT4LqteDdiAQ1Ad95QnBMNo4Kt7BVZX2g&s", title: "Sports Championship Finals Tonight", cat: "Sports", desc: "The big final is here! Local teams are competing for the prestigious trophy tonight." },
    { id: 5, img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800", title: "Market Trends Analysis", cat: "Finance", desc: "Real estate and gold prices in Bihar show a steady trend this week." },
    { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoK34IMmR7cq0BmgB5129_W0ERplNjTID2ig&s", title: "Digital Security Updates", cat: "Security", desc: "Stay safe online. New security protocols are mandatory for digital banking users." },
  ];

  const categories = [
    { name: "Business", icon: <FaChartLine />, color: "bg-green-500" },
    { name: "Tech", icon: <FaMicrochip />, color: "bg-purple-500" },
    { name: "Sports", icon: <FaFutbol />, color: "bg-orange-500" },
    { name: "World", icon: <FaGlobe />, color: "bg-sky-500" },
    { name: "Finance", icon: <FaChartLine />, color: "bg-emerald-600" },
    { name: "Politics", icon: <FaRegNewspaper />, color: "bg-blue-500" },
    { name: "Health", icon: <FaHeartbeat />, color: "bg-red-500" },
    { name: "Entertainment", icon: <FaFilm />, color: "bg-pink-500" },
  ];

  const filteredNews = activeCategory === "All" 
    ? newsData 
    : newsData.filter(news => news.cat === activeCategory);

  const visibleNews = showAll ? filteredNews : filteredNews.slice(0, 3);

  // Scroll logic updated: No offset because header is not sticky anymore
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleCategoryClick = (catName) => {
    setActiveCategory(catName);
    scrollToSection('news');
  };

  return (
    <div className="bg-[#f1f5f9] font-sans text-slate-900 relative">
      
      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b border-slate-200 py-2 px-4 md:px-20 hidden md:flex justify-between items-center text-xs font-medium text-slate-500">
        <div>{currentDate}</div>
        <div className="flex gap-4 items-center">
          <span onClick={() => scrollToSection('categories')} className="hover:text-orange-500 cursor-pointer transition">Categories</span>
          <span onClick={() => scrollToSection('about')} className="hover:text-orange-500 cursor-pointer transition">About</span>
          <span onClick={() => scrollToSection('contact')} className="hover:text-orange-500 cursor-pointer transition">Contact</span>
          <div className="flex gap-3 ml-4 border-l pl-4">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer transition" />
            <FaTwitter className="hover:text-sky-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaYoutube className="hover:text-red-600 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* ================= HEADER & TICKER (Normal Flow - No Sticky) ================= */}
      <header className="bg-white shadow-sm">
        <Navbar />
        <div className="bg-[#cc0000] text-white py-1.5 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee font-bold text-xs uppercase tracking-wide">
            <span className="mx-10">Breaking: Welcome to DG News  Digital News Portal</span>
            <span className="mx-10">Update: Stay tuned for real-time updates from Bihar and beyond</span>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto py-8 px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative h-[400px] md:h-[550px] rounded-lg overflow-hidden group shadow-lg cursor-pointer" onClick={() => setSelectedNews(newsData[0])}>
            <img src={newsData[0].img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Main News" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 p-6 md:p-10 text-white">
              <span className="bg-[#cc0000] px-3 py-1 text-xs font-bold uppercase mb-3 inline-block">Headline</span>
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4 uppercase">{newsData[0].title}</h1>
              <button className="bg-white text-black px-5 py-2 rounded font-bold text-sm hover:bg-orange-500 hover:text-white transition uppercase">Read Full Story</button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold border-b-2 border-[#cc0000] inline-block pb-1 mb-2 uppercase tracking-tighter">Trending Now</h3>
            {newsData.slice(1, 5).map((news) => (
              <div key={news.id} onClick={() => setSelectedNews(news)} className="flex gap-4 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer group">
                <div className="w-24 h-20 overflow-hidden rounded shrink-0">
                  <img src={news.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" alt="thumb" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-orange-600 uppercase">{news.cat}</span>
                  <h4 className="text-sm font-bold leading-tight line-clamp-2 group-hover:text-[#cc0000] transition uppercase">{news.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section id="categories" className="py-12 bg-slate-100 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">Explore Categories</h2>
              <div className="w-16 h-1 bg-orange-500 mt-1"></div>
            </div>
            {activeCategory !== "All" && (
              <button 
                onClick={() => setActiveCategory("All")}
                className="text-xs font-bold text-[#cc0000] border border-[#cc0000] px-3 py-1 rounded hover:bg-[#cc0000] hover:text-white transition"
              >
                Reset Filter
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((item, index) => (
              <div 
                key={index} 
                onClick={() => handleCategoryClick(item.name)}
                className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-sm transition-all cursor-pointer group border ${activeCategory === item.name ? 'bg-white border-[#cc0000] ring-2 ring-[#cc0000]/10' : 'bg-white border-slate-200 hover:-translate-y-1'}`}
              >
                <div className={`${item.color} text-white p-4 rounded-full text-xl mb-3 group-hover:scale-110 transition`}>
                  {item.icon}
                </div>
                <span className={`text-[11px] font-black uppercase tracking-wider ${activeCategory === item.name ? 'text-[#cc0000]' : 'text-slate-700'}`}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LATEST STORIES ================= */}
      <section id="news" className="py-12 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 border-b border-slate-300 pb-2">
          <div>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">
              {activeCategory === "All" ? "Latest Updates" : `${activeCategory} News`}
            </h2>
            <div className="w-16 h-1 bg-[#cc0000] mt-1"></div>
          </div>
          <button onClick={() => setShowAll(!showAll)} className="text-xs font-bold uppercase py-1 px-3 border border-slate-800 hover:bg-slate-800 hover:text-white transition">
            {showAll ? "Close" : "View All"}
          </button>
        </div>
        
        {visibleNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleNews.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 overflow-hidden group hover:border-orange-500 transition-all shadow-sm">
                <div className="h-52 overflow-hidden relative">
                  <img src={item.img} alt="news" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <span className="absolute top-2 left-2 bg-orange-600 text-white text-[10px] font-bold px-2 py-1 uppercase">{item.cat}</span>
                </div>
                <div className="p-5">
                  <h3 onClick={() => setSelectedNews(item)} className="font-bold text-lg text-slate-900 mb-2 leading-tight hover:text-[#cc0000] cursor-pointer uppercase transition">{item.title}</h3>
                  <p className="text-slate-500 text-xs mb-4 line-clamp-2 leading-relaxed">Latest coverage on the events shaping Bihar today.</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{currentDate}</span>
                    <span onClick={() => setSelectedNews(item)} className="text-[10px] text-[#cc0000] font-black cursor-pointer hover:underline uppercase">Read More +</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-slate-200">
            <FaRegNewspaper className="mx-auto text-slate-300 mb-4" size={50} />
            <p className="text-slate-500 font-bold uppercase text-sm tracking-widest">No news found in this category.</p>
            <button onClick={() => setActiveCategory("All")} className="mt-4 text-[#cc0000] font-bold uppercase text-xs hover:underline">Show all news</button>
          </div>
        )}
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">About <span className="text-[#cc0000]">DG News</span></h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">DG News is a premier digital news destination. We are committed to truth, transparency, and timely reporting.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3"><FaBullseye className="text-orange-600" /><span className="text-[10px] font-bold uppercase tracking-widest">Accuracy</span></div>
                <div className="flex items-center gap-3"><FaEye className="text-red-600" /><span className="text-[10px] font-bold uppercase tracking-widest">Vision</span></div>
                <div className="flex items-center gap-3"><FaHandshake className="text-blue-600" /><span className="text-[10px] font-bold uppercase tracking-widest">Trust</span></div>
              </div>
            </div>
            <div className="flex-1 bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center">
              <h4 className="font-bold mb-4 italic text-slate-700 tracking-tight">"Voice of the People, Vision of the Nation"</h4>
              <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em]">Dedicated to Truth</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT US SECTION ================= */}
      <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Get In Touch</h2>
            <div className="w-20 h-1.5 bg-[#cc0000] mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl flex items-start gap-4 shadow-sm border border-slate-100 transition hover:shadow-md">
                <div className="bg-[#cc0000] text-white p-3 rounded-lg"><FaMapMarkerAlt size={20} /></div>
                <div><h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight">Office</h4><p className="text-xs text-slate-500 mt-1">For queries, news tips, or feedback, feel free to reach out to our digital team.</p></div>
              </div>
              <div className="bg-white p-6 rounded-2xl flex items-start gap-4 shadow-sm border border-slate-100 transition hover:shadow-md">
                <div className="bg-orange-500 text-white p-3 rounded-lg"><FaPhoneAlt size={20} /></div>
                <div><h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight">Call</h4><p className="text-xs text-slate-500 mt-1">+91 98765 43210</p></div>
              </div>
              <div className="bg-white p-6 rounded-2xl flex items-start gap-4 shadow-sm border border-slate-100 transition hover:shadow-md">
                <div className="bg-blue-600 text-white p-3 rounded-lg"><FaEnvelope size={20} /></div>
                <div><h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight">Email</h4><p className="text-xs text-slate-500 mt-1">info@dgnews.com</p></div>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 ring-[#cc0000]/20 outline-none transition" />
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 ring-[#cc0000]/20 outline-none transition" />
                <textarea rows="4" placeholder="Your Message" className="w-full md:col-span-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 ring-[#cc0000]/20 outline-none transition"></textarea>
                <button type="submit" className="md:col-span-2 bg-[#cc0000] text-white font-bold uppercase py-4 rounded-lg hover:bg-slate-900 transition flex items-center justify-center gap-2 text-xs tracking-widest">
                  <FaPaperPlane size={14} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#111] text-slate-500 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">DG<span className="text-orange-500">.</span>NEWS</div>
            <p className="max-w-sm mb-6 text-sm leading-relaxed">Your daily dose of news from Bihar and the world. Stay updated, stay informed with DG News Sasaram.</p>
            <div className="flex gap-4 text-xl">
              <FaFacebookF className="hover:text-white cursor-pointer transition" />
              <FaTwitter className="hover:text-white cursor-pointer transition" />
              <FaInstagram className="hover:text-white cursor-pointer transition" />
              <FaYoutube className="hover:text-white cursor-pointer transition" />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li onClick={() => scrollToSection('categories')} className="hover:text-orange-500 cursor-pointer transition uppercase text-xs font-bold tracking-tighter">Categories</li>
              <li onClick={() => scrollToSection('about')} className="hover:text-orange-500 cursor-pointer transition uppercase text-xs font-bold tracking-tighter">About Us</li>
              <li onClick={() => scrollToSection('contact')} className="hover:text-orange-500 cursor-pointer transition uppercase text-xs font-bold tracking-tighter">Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em]">Newsletter</h4>
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Email Address" className="bg-[#1a1a1a] border-none px-4 py-3 w-full text-white text-sm rounded focus:ring-1 ring-orange-500 outline-none" />
              <button className="bg-orange-600 text-white px-4 py-3 text-xs font-bold uppercase rounded hover:bg-orange-700 transition tracking-widest">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-white/5 text-[9px] uppercase tracking-[0.4em] text-slate-700">© {new Date().getFullYear()} DG News Sasaram. All Rights Reserved.</div>
      </footer>

      {/* ================= MODAL ================= */}
      {selectedNews && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl relative animate-in zoom-in duration-300">
            <button onClick={() => setSelectedNews(null)} className="absolute top-4 right-4 bg-white/90 text-red-600 p-2 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition z-10"><FaTimes size={20} /></button>
            <img src={selectedNews.img} className="w-full h-64 object-cover" alt="News" />
            <div className="p-8">
              <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">{selectedNews.cat}</span>
              <h2 className="text-2xl font-black text-slate-900 my-4 uppercase tracking-tight">{selectedNews.title}</h2>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">{selectedNews.desc || "News details are being updated. Stay tuned."}</p>
              <div className="flex justify-end border-t pt-6"><button onClick={() => setSelectedNews(null)} className="bg-slate-900 text-white px-6 py-2 rounded font-bold hover:bg-[#cc0000] transition uppercase text-xs tracking-widest">Close News</button></div>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 25s linear infinite; }
          html { scroll-behavior: smooth; }
          .animate-in { animation: zoomIn 0.3s ease-out; }
          @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        `}
      </style>
    </div>
  );
};

export default Home;