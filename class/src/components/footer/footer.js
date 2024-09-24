import styled from "@emotion/styled";
import React, { useState } from "react";

/* icon import */
import { RiHome2Line } from "react-icons/ri"; /* home */
import { IoSearchOutline } from "react-icons/io5"; /* search */
import { HiCalendar } from "react-icons/hi2"; /* 예약 */
import { BiMessageRoundedDetail } from "react-icons/bi"; /* 말풍선 */
import { GoPeople } from "react-icons/go"; /* 마이 */

const Footer = styled.footer`
    position: absolute;
    left: 40px;
    bottom: 70px;
    width: 360px;
    height: 70px;
    >div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 0 10px;
    }
    >div>a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
    }
    span {
        margin-top: 5px;
        font-size: 12px;
    }
`;

const menuItems = [
    { id: 0, label: "홈", Icon: RiHome2Line },
    { id: 1, label: "검색", Icon: IoSearchOutline },
    { id: 2, label: "예약", Icon: HiCalendar },
    { id: 3, label: "커뮤니티", Icon: BiMessageRoundedDetail },
    { id: 4, label: "마이", Icon: GoPeople }
];

export default function FooterComponent() {
    const [active, setActive] = useState(null);

    const handleClick = (index) => {
        setActive(index);
    };

    return (
        <Footer>
            <div>
                {menuItems.map(({ id, label, Icon }) => (
                    <a 
                        key={id} 
                        href="#none" 
                        onClick={() => handleClick(id)}
                        style={{ color: active === id ? '#ff4a87' : '#000' }}
                    >
                        <Icon style={{ width: "25px", height: "25px" }} />
                        <span>{label}</span>
                    </a>
                ))}
            </div>
        </Footer>
    );
}
