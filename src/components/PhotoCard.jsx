import {ArrowDownToSquare, HeartFill} from '@gravity-ui/icons';
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { Separator } from '@heroui/react';
import Link from 'next/link';
const PhotoCard = ({photo}) => {
    console.log(photo.imageUrl);
    return (
        <div>
            <Card className="border rounded-xl">
                <div className='relative w-full aspect-square'>
                    <Image 
                    src={photo.imageUrl} 
                    className='object-cover rounded-xl' 
                    alt="Photo.title" 
                    fill 
                    sizes='(max-width: 768px) 100w, (max-width: 1200px) 50vw, 33vw'
                    />
                    <Chip className='absolute right-2 top-2' size='sm'>{photo.category}</Chip>
                </div>
                <div>
                    <h2 className="font-medium">{photo.title}</h2>
                </div>
                <div className='flex gap-5'>
                    <div className='flex items-center gap-2'>
                    <p><HeartFill /></p>
                    <p>{photo.likes}</p>
                </div>
                <Separator orientation='vertical'></Separator>
                <div className='flex items-center gap-2'>
                    <p><ArrowDownToSquare /></p>
                    <p>{photo.downloads}</p>
                </div>
                </div>
                <Link href={`/all-photos/${photo.id}`}><Button className={'w-full'} variant='outline'>View</Button></Link>
            </Card>
        </div>
    );
};

export default PhotoCard;