const PhotoDetailsPage = async({params}) => {
    const {id}=await params;
    const res=await fetch('https://pixgen-neon.vercel.app/data.json');
    const photos=await res.json();
    const photo=photos.find(photo=>photo.id==id);
    console.log(photo)
    return (
        <div>
            <h1 className="text-3xl text-center text-blue-400">{photo.title}</h1>
        </div>
    );
};

export default PhotoDetailsPage;