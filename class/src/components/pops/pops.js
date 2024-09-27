import React from 'react';
import Slider from 'react-slick'; // Slider 컴포넌트를 import
import styled from "@emotion/styled";

const SlideLink = styled.a`
    display: inline-block;
    text-decoration: none;
    color:#000;

        img{
            width:105px;
            height:80px;
            background:#000
        }
        h5{
            font-size:12px;
            margin: 5px 0 -7px;
            color:#ff4a87;
            @media (max-width: 375px) {
                font-size: 10px; 
            }
        }
        span{
            font-size:10px;
            @media (max-width: 375px) {
                white-space: nowrap;
            }
        }
        p{
            font-size:11px;
            margin-top:-2px;
        }
`;

export default function PopsComponent({slides}){

    const popsSettings = {
        className: "center",
        centerMode: false,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        autoplay: true, // 자동 재생 활성화
        autoplaySpeed: 2000, // 2초마다 이동
        pauseOnHover: true, // 마우스 오버 시 자동 재생 일시 정지
        arrows: false // 내비게이션 버튼 제거
      };
      
    return(
        <>
            {slides.map((slideGroup, groupIndex) => (
                <div className="slider-container" key={groupIndex} style={{ marginTop: "5px" }}>
                    <Slider {...popsSettings}>
                        {slideGroup.map((slide, index) => (
                            <div key={index}>
                                <SlideLink href='#none'>
                                    <img src={slide.img} />
                                    <h5>{slide.title}</h5> 
                                    <span>{slide.tag}</span>
                                    <p>{slide.date}</p>
                                </SlideLink>
                            </div>
                        ))}
                    </Slider>
                </div>
            ))}
        </>
    )
}