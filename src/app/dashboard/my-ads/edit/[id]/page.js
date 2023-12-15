import AdsModel from "@/models/AdsModel"
import AddAddsPage from "@/templates/AddAddsPage";
import connectDB from "@/utils/connectDB"

async function AdsEdit({params:{id}}) {
    await connectDB()
    const ads = await AdsModel.findById(id)
    if(!ads) return <h3>مشکلی پیش آمده است لطفا دباره امتحان کنید.</h3>
  return <AddAddsPage adsData={JSON.parse(JSON.stringify(ads))} />
}

export default AdsEdit