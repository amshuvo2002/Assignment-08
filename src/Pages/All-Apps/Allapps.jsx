import React, { useEffect, useState } from "react";
import Star from '../../assets/icon-ratings.png';
import Download from '../../assets/icon-downloads.png';
import { Link } from "react-router"; 
import Spin from '../../assets/logo.png'; // তোমার logo ঘুরবে

const Allapps = () => {
  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // সব অ্যাপ লোড করা
  useEffect(() => {
    fetch("/AllAppsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setFilteredApps(data);
        setLoading(false);
      });
  }, []);

  // সার্চ করলে ডেটা ফিল্টার + লোডিং দেখানো
  useEffect(() => {
    setLoading(true);

    // filter simulate korte small delay (data load er simulation)
    const delay = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredApps(apps);
      } else {
        const result = apps.filter((app) =>
          app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredApps(result);
      }
      setLoading(false);
    }, 300); // 0.3s delay just smoother experience

    return () => clearTimeout(delay);
  }, [searchTerm, apps]);

  return (
    <div className="bg-gray-100">
      <div className="p-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#001931]">Our All Applications</h1>
          <p className="text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="md:flex justify-between">
          <h1 className="text-2xl font-bold text-[#001931] mb-6 md:mb-0">
            ({filteredApps.length}) Apps Found
          </h1>

          <label className="input flex items-center gap-2 border rounded-lg px-3 py-2 bg-white">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search apps..."
              className="outline-none w-full"
            />
          </label>
        </div>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <img src={Spin} alt="Loading..." className="w-20 h-20 animate-spin" />
        </div>
      ) : (
        <div className="md:grid grid-cols-4 gap-10 p-10 mx-auto">
          {filteredApps.length > 0 ? (
            filteredApps.map((app) => (
              <Link key={app.id} to={`/Apps/${app.id}`}>
                <div className="card bg-base-100 md:w-75 mb-5 md:mb-0 shadow-sm pt-5 hover:shadow-md transition-all duration-200">
                  <figure>
                    <img className="w-2/3" src={app.image} alt={app.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-[#010313]">{app.title}</h2>
                    <div className="card-actions justify-between items-end">
                      <div className="flex justify-between gap-2 p-2 rounded-sm text-[#00D390] bg-[#F1F5E8]">
                        <img className="w-[20px]" src={Download} alt="" />
                        {app.downloads}
                      </div>
                      <div className="flex justify-between gap-2 p-2 rounded-sm text-[#FF8811] bg-[#FFF0E1]">
                        <img className="w-[20px]" src={Star} alt="" />
                        {app.ratingAvg}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center font-bold col-span-4 text-gray-500 text-4xl">
              OPPS!! APP NOT FOUND
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Allapps;
