import BuyResidentialsPage from '@/templates/BuyResidentialsPage'
import connectDB from "@/utils/connectDB";
import AdsModel from "@/models/AdsModel";

async function BuyResidential({searchParams}) {
  await connectDB();
  const allAds = await AdsModel.find({published:true}).select("-userId")
  if(!allAds) return <h3>مشکلی پیش آمده است</h3>
  let filterData = allAds
  if(searchParams.category){
     filterData =  allAds.filter(item => item.category === searchParams.category)
  }
  return <BuyResidentialsPage data={filterData} />
}

export default BuyResidential