import React from 'react'

const TeamMemberCard = ({ profilePic, name, job }) => {
    return (
        <div className=" w-full max-w-[22rem] h-[30rem] my-10 flex flex-col">
            <div className='h-full'>
                <img src={profilePic} alt="" className="w-full h-full aspect-square object-cover" />
            </div>
            <div className="flex flex-col items-center space-y-2 mt-3">
                <h4 className="text-white font-bold text-center text-[2rem]">{name}</h4>
                <p className="bg-white px-2 font-medium text-[0.9rem]">{job}</p>
            </div>
        </div>
    )
}

export default TeamMemberCard