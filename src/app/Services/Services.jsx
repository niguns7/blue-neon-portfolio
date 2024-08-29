import React from 'react'
import { MdCamera, MdCameraAlt, } from "react-icons/md";


const Services = () => {

    const services = [
        {
            id: 1,
            title: "photography",
            icon: < MdCamera size={40} color="white" />,
            content: "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
        },
        {
            id: 2,
            title: "Videography",
            icon: < MdCameraAlt size={40} color="white" />,
            content: "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
        },
        {
            id: 3,
            title: "Video Editing",
            icon: < MdCameraAlt size={40} color="white" />,
            content: "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
        },
        {
            id: 4,
            title: "Motion Graphics",
            icon: < MdCamera size={40} color="white" />,
            content: "Whether you’re halfway through the editing process, or you haven’t even started, our post production services can put the finishing touches."
        },
    ]
    return (
        <div className="relative h-max w-full bg-primary flex justify-center ">
            <div className="flex justify-start gap-20 mt-28 mb-28 w-3/4">

                <div className="flex flex-col gap-1 w-1/3">
                    <div className="flex flex-col">
                        <label className='text-xl font-bold text-white mb-4 font-play'>Our Services</label>
                        <h1 className="text-5xl font-bold text-white mb-4 font-sans">
                            What we do?
                        </h1>
                        <span className='border border-b-4 rounded-md border-secondary w-1/4 mt-2 mb-5 '></span>
                    </div>
                    <label className='w-full text-gray-200'>If you hire a videographer of our team you will get a video professional to make a custom video for your business and, once the project is over.</label>
                    <button className="w-3/4 primary-btn inline-block font-bold text-white uppercase tracking-widest relative z-10 px-8 py-3 transition-all duration-700 mt-7">
                        View all services
                    </button>
                </div>


                <div className="w-2/3 grid grid-cols-2 gap-20 h-fit	">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col h-min">
                            <i className='services__item__icon inline-block '> {service.icon}</i>
                            <label className='text-xl font-bold text-white mt-4 mb-4 font-play'>{service.title}</label>
                            <label className='text-gray-200 font-josefin'>{service.content}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services


