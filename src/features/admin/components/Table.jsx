import { useAdminContactContext, useChurayeHuePalContext, useHappyStroyContext } from '@/AdminContext';
import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa';
import { LiaEdit } from 'react-icons/lia';
import { LuEye } from 'react-icons/lu';
import AddStory from './AddStory';
import { Link } from 'react-router-dom';

function Table(props) {
    const { DeleteVideo } = useChurayeHuePalContext();
    const { DeleteQuery } = useAdminContactContext();
    const { DeleteHappyStory } = useHappyStroyContext();
    const [editStory, setEditStory] = useState(false);


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };


    return (
        <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <React.Fragment>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.id}
                                    </th>
                                    {
                                        props?.identifier === "members" &&
                                        <>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.profileImage}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.memeberName}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.memberId}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.detail}
                                            </th>
                                        </>
                                    }
                                    {
                                        props?.identifier === "bookProgram" && <>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.profile}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.memeberName}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.memberId}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.Membership}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.price}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.email}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.phone}
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                                {props?.dateTime}
                                            </th>
                                        </>
                                    }

                                    {props?.identifier === "register" && <>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.amount}
                                        </th>

                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.actions}
                                        </th>
                                    </>
                                    }

                                    {props?.link && <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.link}
                                    </th>
                                    }
                                    {props?.identifier === "video" && <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                        {props?.action}
                                    </th>
                                    }
                                    {props?.identifier === "happyStoryData" && <>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.memeberName}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.partnerName}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.postTime}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.actions}
                                        </th>
                                    </>}
                                    {props?.identifier === "contact" && <>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.name}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.email}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.phone}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.message}
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-RedTheme text-left text-xs font-semibold text-white uppercase tracking-wider">
                                            {props?.action}
                                        </th>
                                    </>}
                                </tr>
                            </React.Fragment>
                        </thead>
                        <tbody>
                            {props?.data && props?.data?.map((item, i) => (
                                <React.Fragment key={i}>
                                    <tr>
                                        <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{i + 1}</p>
                                        </td>
                                        {props?.identifier === "members" &&
                                            <>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <img className='w-14 h-14 rounded-full object-cover' src={item?.profileImage?.ImageURL || item?.gender === "male"
                                                        ? "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=170667a&w=0&k=20&c=ZUf0DE14mBsbtgTvNdhDB1uzey9CK2BJlhhMhfFftB8="
                                                        : item?.gender === "female"
                                                            ? "https://png.pngitem.com/pimgs/s/618-6183618_transparent-unknown-person-png-transparent-background-female-user.png"
                                                            : "https://example.com/default-image.png"} alt="" />
                                                </td>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 text-sm capitalize whitespace-no-wrap"> {item?.firstName}</p>
                                                </td>
                                                <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                        {item?.MemberID}
                                                    </p>
                                                </td>
                                            </>
                                        }

                                        {props?.identifier === "video" && <> <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.VideoURL}
                                            </p>
                                        </td>
                                            <td className="px-5 py-2 border-b flex gap-1 border-gray-200 bg-white text-sm">
                                                <button onClick={() => DeleteVideo(item?._id)}
                                                    className="relative cursor-pointer bg-RedTheme rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                    <FaTrash />
                                                </button>

                                            </td>
                                        </>}
                                        {props?.identifier === "contact" && <> <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.name}
                                            </p>
                                        </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.email}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.phone}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.message}
                                                </p>
                                            </td>
                                            <td className="px-5 py-2 border-b flex gap-1 border-gray-200 bg-white text-sm">
                                                <button onClick={() => DeleteQuery(item?._id)}
                                                    className="relative cursor-pointer bg-RedTheme rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                    <FaTrash />
                                                </button>

                                            </td>
                                        </>}
                                        {props?.identifier === "bookProgram" && item?.users && item?.users?.map((user, i) => <React.Fragment key={i}> <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                            <img src={user?.profileImage?.ImageURL} alt="" />
                                        </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {user?.firstName}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {user?.firstName}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {user?.RegisterPackage}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.amount}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {user?.email}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {user?.phone}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {user?.phone}
                                                </p>
                                            </td>

                                        </React.Fragment>)}
                                        {props?.identifier === "happystory" && <> <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.Groom}
                                            </p>
                                        </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.Bride}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.Content}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    <label className="inline-flex items-center cursor-pointer">
                                                        <input type="checkbox" value="" className="sr-only peer" />
                                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-green-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-red-600"></div>
                                                    </label>
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className="relative bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                    <LiaEdit />
                                                </span>
                                                <span
                                                    className="relative bg-green-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                    <LuEye />
                                                </span>
                                            </td>

                                        </>}

                                        {props?.identifier === "happyStoryData" && <> <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                {item?.Groom}
                                            </p>
                                        </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.Bride}
                                                </p>
                                            </td>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {formatDate(item?.createdAt)}
                                                </p>
                                            </td>

                                            <td className="px-5  py-2 border-b border-gray-200 flex gap-2 bg-white text-sm">

                                                <span type='button' onClick={() => DeleteHappyStory(item?._id)}
                                                    className="relative bg-RedTheme rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white cursor-pointer">
                                                    <FaTrash />
                                                </span>
                                            </td>
                                        </>}

                                        {props?.identifier === "register" && <>
                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900  text-sm whitespace-no-wrap">
                                                    {item?.amount}651
                                                </p>
                                            </td>

                                            <td className="px-5  py-2 border-b border-gray-200 bg-white text-sm flex gap-2">
                                                <span
                                                    className="relative cursor-pointer bg-blue-400 rounded-full w-10 h-10 flex items-center px-3 py-1 font-semibold text-white">
                                                    <LiaEdit />
                                                </span>
                                            </td>
                                        </>}

                                        {/* {
                                            props?.identifier === 'members' &&  <Link to={`/view-details/${item?._id}`}> <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className=" bg-RedTheme rounded-full   px-3 py-1 text-sm text-white">
                                                    View Details
                                                </span>
                                            </td></Link>
                                        } */}


                                        {
                                            props?.identifier === 'members' &&
                                            <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                                                <span
                                                    className=" bg-RedTheme rounded-full   px-3 py-1 text-sm text-white">
                                                    <Link to={`/view-details/${item?._id}`}>View Details</Link>
                                                </span>
                                            </td>
                                        }

                                    </tr>
                                </React.Fragment>
                            ))}
                        </tbody>
                        {editStory ? <AddStory onClose={() => setEditStory(false)} /> : ""}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;   