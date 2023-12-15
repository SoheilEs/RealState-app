import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyAdsPage from "@/templates/MyAdsPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function MyAds() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "adsmodels",
        localField: "_id",
        foreignField: "userId",
        as: "Ads",
      },
    },
  ]);
  return <MyAdsPage data={user.Ads} />;
}

export default MyAds;
