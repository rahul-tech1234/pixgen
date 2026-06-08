import PhotoCard from "./PhotoCard";

const TopGenaration = async() => {
    const res=await fetch('https://pixgen-neon.vercel.app/data.json');
    const photos=await res.json();
    const TopPhotos=photos.slice(0,8);
    //console.log(TopPhotos);
    return (
        <div>
            <h1 className="text-3xl text-purple-500 font-bold my-5 text-center">Top Genaration</h1>
            <div className="grid md:grid-cols-4 gap-5">
                {
                    TopPhotos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
                                
            </div>
        </div>
    );
};

export default TopGenaration;