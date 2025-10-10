import React, { useEffect, useState } from "react";
import Star from '../../assets/icon-ratings.png';
import Download from '../../assets/icon-downloads.png';
import toast, { Toaster } from "react-hot-toast";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [allApps, setAllApps] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("allAppsData")) || [];
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    const filtered = all.filter(app => installed.includes(app.id));
    setAllApps(filtered);
    setInstalledApps(installed);
  }, []);

  const handleUninstall = (id, title) => {
    const updatedInstalled = installedApps.filter(appId => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedInstalled))
    const updatedAll = allApps.filter(app => app.id !== id);
    setInstalledApps(updatedInstalled);
    setAllApps(updatedAll)
    toast.error(`${title} Uninstalled Successfully!`);
  };

  return (
    <div className="bg-gray-100 pb-10 min-h-screen">
      <Toaster position="top-right" />
      <div className="text-center py-10 px-5 md:px-20">
        <h1 className="text-4xl font-bold text-[#001931]">Your Installed Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between items-center mt-10">
          <div className="text-2xl font-bold text-[#001931]">
            {allApps.length} Apps Found
          </div>
          <div>
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort By Size ⬇️
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a
                    onClick={() =>
                      setAllApps([...allApps].sort((a, b) => b.size - a.size))
                    }
                  >
                    High-Low
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      setAllApps([...allApps].sort((a, b) => a.size - b.size))
                    }
                  >
                    Low-High
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="md:px-20 px-5">
        {allApps.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-500">No Installed Apps Found!</h2>
          </div>
        ) : (
          allApps.map((app) => (
            <div
              key={app.id}
              className="md:flex justify-between items-center shadow-xl gap-5 bg-white p-5 rounded-sm mb-10"
            >
              <div className="md:flex gap-5">
                <div>
                  <img className="w-[100px]" src={app.image} alt={app.title} />
                </div>
                <div>
                  <h1 className="text-xl font-bold">{app.title}</h1>
                  <div className="flex justify-around mt-5">
                    {/* Downloads */}
                    <div className="flex justify-between gap-2 p-2 rounded-sm text-[#00D390] bg-[#F1F5E8]">
                      <img className="w-[20px]" src={Download} alt="Downloads" />
                      {app.downloads}
                    </div>
                    {/* Ratings */}
                    <div className="flex justify-between gap-2 p-2 rounded-sm text-[#FF8811] bg-[#FFF0E1]">
                      <img className="w-[20px]" src={Star} alt="Ratings" />
                      {app.ratingAvg}
                    </div>
                    {/* Size */}
                    <div className="flex justify-center items-center">
                      <p className="font-semibold text-gray-400">
                        {app.size} MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleUninstall(app.id, app.title)}
                  className="btn btn-accent mt-5 text-white md:mt-0 bg-[#00D390] hover:bg-[#06ba7e]"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
