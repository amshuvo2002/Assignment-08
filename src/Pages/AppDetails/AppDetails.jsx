import { useLoaderData, useParams } from "react-router";
import Star from '../../assets/icon-ratings.png'
import Download from '../../assets/icon-downloads.png'
import Like from '../../assets/icon-ratings.png'

function AppDetails() {
  const data = useLoaderData();   // JSON data
  const { id } = useParams();

  const app = data.find(app => app.id === parseInt(id));

  if (!app) {
    return <h2 className="text-center text-red-500 mt-10">App not found 😢</h2>;
  }

  return (
    <div className="bg-gray-100">
        <div className="p-20">
            <div className="w-[300px] h-[300px] bg-white flex justify-center items-center"><img className="w-[220px] h-[220px]" src={app.image} alt="" /></div>
            <div>
                <div>
                    <h1>{app.title}</h1>
                    <p>Developed by <span>{app.companyName}</span></p>
                </div>
                <div>
                    <div>
                        <img src={Download} alt="" />
                        <p>Downloads</p>
                        <h1>{app.downloads}</h1>
                        </div>
                    <div>
                        <img src={Star} alt="" />
                        <p>Average Ratings</p>
                        <h1>{app.ratingAvg}</h1>
                    </div>
                    <div>
                        <img src={Like} alt="" />
                        <p>Total Reviews</p>
                        <h1>{app.reviews}</h1>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    
    </div>
  );
}

export default AppDetails;

