'use client'
import { UpdateModal } from "@/components/UpdateModal";
import { authClient, useSession } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
const ProfilePage = () => {
    const userData=authClient.useSession();
    //const data=useData.data?.user
    return (
        <div>
            <Card className="max-w-96 mx-auto rounded">
                <Avatar className="h-20 w-20 flex flex-col items-center">
                        <Avatar.Image alt="John Doe" src="{userData.data?.user.image}" referrerPolicy="no-referrer" />
                        <Avatar.Fallback className="text-2xl items-stretch flex">{userData.data?.user.name.toUpperCase().charAt(0)}</Avatar.Fallback>
                      </Avatar>    
                      <h2 className="text-xl font-bold">{userData.data?.user.name}</h2>
                      <p>{userData.data?.user.email}</p>
                      <UpdateModal></UpdateModal>
            </Card>            
        </div>
    );
};

export default ProfilePage;