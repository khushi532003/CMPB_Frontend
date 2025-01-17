import React, { useEffect } from 'react';
import ListCards from "@admin/components/ListCards";
import { useAdminMemberContext } from '@/AdminContext';
import { useAuthContext } from '@/context';

const Home = () => {
    const { countFreeMember, countPremiumMember, freeMembers, premiumMembers, TotalMembers, totalEventUser, TotalEventBookedUser } = useAdminMemberContext()
    const { userData } = useAuthContext()


    useEffect(() => {
        if (userData?.token) {
            freeMembers();
            premiumMembers();
            TotalEventBookedUser();
        }
    }, [userData?.token])

    return (
        <div>
            <div className='grid grid-cols-2 gap-10 h-96' >
                <ListCards title={"Total Members"} member={TotalMembers} className={"bg-total_user text-white"} />
                <ListCards title={"Premium Members"} member={countPremiumMember} className={"bg-total_user1 text-white"} />
                <ListCards title={"Free Members"} member={countFreeMember} className={"bg-total_user2 text-white"} />
                <ListCards title={"Programs Bookings"} member={totalEventUser} className={"bg-total_user3 text-white"} />
            </div>
        </div>
    )
}

export default Home;