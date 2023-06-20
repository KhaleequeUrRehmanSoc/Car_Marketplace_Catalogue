"use client"

import Image from 'next/image'
import React from 'react'
import IconCard from '../IconCard'
import CustomButton from '../CustomButton'
import { calculateCarRent } from '@/utils'

// const Card = ({title,price,duration,src,seats,type,cyclinders}) => {
const Card = (car) => {
    const { city_mpg, year, make, model, transmission, drive } = car;
    const src='carpic.svg'
    const carRent = calculateCarRent(city_mpg, year);

  return (
    <>
            {/* <div className='bg-cardcontainerbgclr rounded-[1.15rem]'>
                <div className='bg-cardbgclr rounded-[1.916rem]'>
                    <div className='pt-8 px-5 '>
                        <h1 className="text-primary text-[1.054rem] font-bold mb-3 capitalize">{title && title}</h1>
                        <h3 className="text-primary text-[1.533rem] font-extrabold"><span className='text-[0.671rem] font-semibold align-text-top'>$ </span>{price && price}<span className='text-[0.575rem] font-medium opacity-80 align-baseline'>/{duration && duration}</span></h3>
                    </div>
                    <div className='px-2 w-full'>
                        <Image src={`/assets/images/${src && src}`} alt="carpic" width={100} height={100} className="w-full h-auto" />
                    </div>
                    <div className='px-5 pb-8 mt-1 flex justify-evenly items-center'>
                        <IconCard 
                        src={"steeringIcon.svg"}
                        title={type && type}
                        />
                        <IconCard 
                        src={"seatIcon.svg"}
                        title={`${seats && seats} Seats`}
                        />
                        <IconCard 
                        src={"gasStationIcon.svg"}
                        title={`${cyclinders && cyclinders} MPG`}
                        />
                    </div>
                </div>
            </div> */}
            <div className='bg-cardcontainerbgclr rounded-[1.15rem]'>
                <div className='bg-cardbgclr rounded-[1.916rem]'>
                    <div className='pt-8 px-5 '>
                        <h1 className="text-primary text-[1.054rem] font-bold mb-3 capitalize">
                            {/* {title && title} */}
                            {make && make} {model && model}
                        </h1>
                        <h3 className="text-primary text-[1.533rem] font-extrabold"><span className='text-[0.671rem] font-semibold align-text-top'>$ </span>
                        {/* {price && price} */}
                        {carRent && carRent}
                        <span className='text-[0.575rem] font-medium opacity-80 align-baseline'>/day
                        {/* {duration && duration} */}
                        </span></h3>
                    </div>
                    <div className='px-2 w-full'>
                        <Image src={`/assets/images/${src && src}`} alt="carpic" width={100} height={100} className="w-full h-auto" />
                        {/* <Image src={generateCarImageUrl(car)} alt="car model" width={100} height={100} className="w-full h-auto" /> */}
                    </div>
                    {/* <div className='relative w-full mt-2'>
                        <div className='px-5 pb-8 mt-1 flex justify-evenly items-center'>
                            <IconCard 
                            src={"steeringIcon.svg"}
                            title={transmission === "a" ? "Automatic" : "Manual"}
                            />
                            <IconCard 
                            src={"seatIcon.svg"}
                            title={`${drive && drive.toUpperCase()}} Seats`}
                            />
                            <IconCard 
                            src={"gasStationIcon.svg"}
                            title={`${city_mpg && city_mpg} MPG`}
                            />
                        </div>
                        <div className="w-full flex justify-between text-grey">
                            <CustomButton
                                title='View More'
                                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                                textStyles='text-white text-[14px] leading-[17px] font-bold'
                                rightIcon='/assets/images/right-arrow.svg'
                                handleClick={() => console.log('clicked')}
                            />
                        </div>
                    </div> */}

                    <div className='px-5 pb-8 mt-1 flex justify-evenly items-center'>
                        <IconCard 
                        src={"steeringIcon.svg"}
                        // title={type && type}
                        title={transmission === "a" ? "Automatic" : "Manual"}
                        />
                        <IconCard 
                        src={"seatIcon.svg"}
                        // title={`${seats && seats} Seats`}
                        title={`${drive && drive.toUpperCase()}} Seats`}
                        />
                        <IconCard 
                        src={"gasStationIcon.svg"}
                        // title={`${cyclinders && cyclinders} MPG`}
                        title={`${city_mpg && city_mpg} MPG`}
                        />
                    </div>

                    {/* <div className="car-card__btn-container"> */}
                    <div className="w-full flex justify-between text-grey">
                        <CustomButton
                            title='View More'
                            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                            textStyles='text-white text-[14px] leading-[17px] font-bold'
                            rightIcon='/assets/images/right-arrow.svg'
                            handleClick={() => console.log('clicked')}
                        />
                    </div>

                    {/* <div className='relative flex w-full mt-2'>
                        <div className='flex group-hover:invisible w-full justify-between text-grey'>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                            <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                            </p>
                        </div>
                        <div className="car-card__icon">
                            <Image src="/tire.svg" width={20} height={20} alt="seat" />
                            <p className="car-card__icon-text">{drive?.toUpperCase()}</p>
                        </div>
                        <div className="car-card__icon">
                            <Image src="/gas.svg" width={20} height={20} alt="seat" />
                            <p className="car-card__icon-text">{city_mpg} MPG</p>
                        </div>
                        </div>

                        <div className="car-card__btn-container">
                            <CustomButton
                                title='View More'
                                containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                                textStyles='text-white text-[14px] leading-[17px] font-bold'
                                rightIcon='/assets/images/right-arrow.svg'
                                handleClick={() => console.log('clicked')}
                            />
                        </div>
                    </div> */}
                </div>
            </div>
    </>
  )
}

export default Card