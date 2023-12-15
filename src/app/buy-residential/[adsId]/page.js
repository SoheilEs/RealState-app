import AdsModel from "@/models/AdsModel";
import AdsDetailPage from "@/templates/AdsDetailPage";
import connectDB from "@/utils/connectDB";

async function AdsDetail({ params: { adsId } }) {
  await connectDB();
  const ads = await AdsModel.findById({ _id: adsId });
  if (!ads) return <h3>مشکلی پیش آمده است</h3>;
  return <AdsDetailPage data={ads} />;
}

export default AdsDetail;

export const generateMetadata = async ({ params: { adsId } }) => {
  await connectDB();
  const ads = await AdsModel.findById({ _id: adsId });
  return { 
    title: ads.title, 
    description: ads.description,
    authors:{name:ads.realState},
    other:{myTag:"Soheil",realState:"Isazade"}
   };
};
