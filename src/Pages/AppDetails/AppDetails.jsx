import { Link, useLoaderData, useParams } from "react-router";
import Star from '../../assets/icon-ratings.png';
import Download from '../../assets/icon-downloads.png';
import Like from '../../assets/icon-review.png';
import AppError from '../../assets/App-Error.png';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function AppDetails() {
  const data = useLoaderData();
  const { id } = useParams();
  const app = data.find(app => app.id === parseInt(id));

  
  if (!app) {
    return (
      <div className="bg-gray-100 p-10">
        <div>
          <img className="w-[400px] mx-auto" src={AppError} alt="App Not Found" />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-4xl font-bold">OPPS!! APP NOT FOUND</h1>
          <p className="text-[#627382]">
            The App you are requesting is not found on our system. Please try another app.
          </p>
          <Link to={'/Apps'}>
            <button className="btn btn-primary bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-2">
              Go Back!
            </button>
          </Link>
        </div>
      </div>
    );
  }


  useEffect(() => {
    localStorage.setItem("allAppsData", JSON.stringify(data));
  }, [data]);

  
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installedApps.includes(app.id)) {
      setInstalled(true);
    }
  }, [app.id]);

  const handleInstall = () => {
    toast.success(`${app.title} Installed Successfully!`);
    setInstalled(true);

    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }
  };

  
  const sortedRatings = [...app.ratings].sort((a, b) => {
    const numA = parseInt(a.name);
    const numB = parseInt(b.name);
    return numB - numA; 
  });

  return (
    <div className="bg-gray-100">
      <Toaster position="top-right" />

      <div className="md:p-20 p-10 md:flex items-center gap-10">
        <div className="w-[300px] h-[300px] bg-white flex justify-center items-center">
          <img className="w-[220px] h-[220px]" src={app.image} alt={app.title} />
        </div>

        <div>
          <div className="mb-5">
            <h1 className="text-4xl font-bold">{app.title}</h1>
            <p>
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {app.companyName}
              </span>
            </p>
          </div>

          <div className="flex gap-10 mb-5">
            <div>
              <img src={Download} alt="" />
              <p>Downloads</p>
              <h1 className="text-4xl font-bold">{app.downloads}</h1>
            </div>
            <div>
              <img src={Star} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-4xl font-bold">{app.ratingAvg}</h1>
            </div>
            <div>
              <img src={Like} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-4xl font-bold">{app.reviews}</h1>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn mt-5 md:mt-0 text-white ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:bg-[#06ba7e]"
            }`}
          >
            {installed ? "Installed" : `Install Now - ${app.size} MB`}
          </button>
        </div>
      </div>

      <div className="md:p-10 p-5 rounded-2xl shadow-md md:mx-20 mb-10 bg-white">
        <h2 className="text-2xl font-semibold mb-5">Ratings</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={sortedRatings}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FF8811" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="md:px-20 px-10 pb-5">
        <h1 className="text-2xl font-bold pb-4">Description :</h1>
        <p>{app.description}</p>
      </div>
    </div>
  );
}

export default AppDetails;
