import React from 'react';
import Slider from 'react-slick'; // Slider 컴포넌트를 import
import styled from "@emotion/styled";

const SlideLink = styled.a`
    display: inline-block;
    text-decoration: none;
    color:#000;

        img{
            width:90px;
            height:70px;
            background:#000
        }
        h5{
            font-size:11px;
            margin: 5px 0 -7px;
            @media (max-width: 375px) {
                font-size: 10px; 
            }
        }
        span{
            font-size:9px;
            @media (max-width: 375px) {
                white-space: nowrap;
            }
        }
        p{
            font-size:10px;
            margin:0;
        }
`;

export default function PopsComponent({slides}){

    const popsSettings = {
        className: "center",
        centerMode: false,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
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