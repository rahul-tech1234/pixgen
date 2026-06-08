import PhotoCard from "@/components/PhotoCard";

const AllPhotosPage = async() => {
    const res=await fetch('https://pixgen-neon.vercel.app/data.json');
    const photos=await res.json();
    //console.log(photos) 
    
    return (
        <div>
            <h1 className="text-4xl text-center font-bold text-green-400 my-4">All Photos</h1>
            <div className="grid md:grid-cols-4 gap-5">
                {
                    photos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
           
        </div>
    );
};

export default AllPhotosPage;