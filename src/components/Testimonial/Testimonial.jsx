import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';  

const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
         <Swiper modules={[Pagination]} spaceBetween={30} slidePerView={1} pagination={{clickable:true}}
        breakpoints={{
            640:{
                slidePerView:1,
                spaceBetween:0,
            },
            768:{
                slidePerView:2,
                spaceBetween:20,
            },

            1024:{
                slidePerView:3,
                spaceBetween:30,
            },


            
        }}
        >
             <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt=""/>
                    <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Muhibar Rahman</h4>
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div>
                    </div>
                    </div>
                
                    <p className="text-[16px]  leading-7 mt-4 tetx-textColor font-[400]">I have taken hbchebrhbvhhhhhhhhhhhhhhhhe</p>
                </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt=""/>
                    <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Muhibar Rahman</h4>
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div>
                    </div>
                    </div>
                
                    <p className="text-[16px]  leading-7 mt-4 tetx-textColor font-[400]">I am very glad that i am out of my depression by taking Therapist sessions with high qualified doctors</p>
                </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt=""/>
                    <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Muhibar Rahman</h4>
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div>
                    </div>
                    </div>
                
                    <p className="text-[16px]  leading-7 mt-4 tetx-textColor font-[400]">I am very glad that i am out of my depression by taking Therapist sessions with high qualified doctors</p>
                </div>
            
        </SwiperSlide>

        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt=""/>
                    <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Muhibar Rahman</h4>
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div>
                    </div>
                    </div>
                
                    <p className="text-[16px]  leading-7 mt-4 tetx-textColor font-[400]">I am very glad that i am out of my depression by taking Therapist sessions with high qualified doctors</p>
                </div>
            
        </SwiperSlide>
        <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
                <div className="flex items-center gap-[13px]">
                    <img src={patientAvatar} alt=""/>
                    <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Muhibar Rahman</h4>
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        <HiStar className="text-yellowColor w-[18px] h-5"/>
                        </div>
                    </div>
                    </div>
                
                    <p className="text-[16px]  leading-7 mt-4 tetx-textColor font-[400]">I am very glad that i am out of my depression by taking Therapist sessions with high qualified doctors</p>
                </div>
            
        </SwiperSlide>




        </Swiper>

    </div>
  );
};

export default Testimonial;
