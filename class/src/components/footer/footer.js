import styled from "@emotion/styled";
import React, { useState } from "react";
import Link from 'next/link'; // Next.js의 Link import
import { useRouter } from 'next/router'; // useRouter import
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
    { id: 0, label: "홈", Icon: RiHome2Line, href: "./main" },
    { id: 1, label: "검색", Icon: IoSearchOutline, href: "../simple_board_frontend/main/search"},
    { id: 2, label: "예약", Icon: HiCalendar, href: "../simple_board_frontend/main/reservation" },
    { id: 3, label: "커뮤니티", Icon: BiMessageRoundedDetail , href: "../simple_board_frontend/main/community" },
    { id: 4, label: "마이", Icon: GoPeople , href:"./login"}
];

export default function FooterComponent() {
    const router = useRouter();

    return (
        <Footer>
            <div>
                {menuItems.map(({ id, label, Icon, href }) => (
                    <Link key={id} href={href || '#'} passHref>
                        <a style={{ color: router.pathname === href ? '#ff4a87' : '#000' }}>
                            <Icon style={{ width: "25px", height: "25px" }} />
                            <span>{label}</span>
                        </a>
                    </Link>
                ))}
            </div>
        </Footer>

        /* <Footer>  동적 라우팅 사용시 해보기 
        <div>
        {menuItems.map(({ id, label, Icon, href }) => {
            const isActive = router.pathname.includes(href.replace('[id]', '')); // 동적 부분을 제거한 후 비교
            return (
                <Link key={id} href={href || '#'} passHref>
                    <a style={{ color: isActive ? '#ff4a87' : '#000' }}>
                        <Icon style={{ width: "25px", height: "25px" }} />
                        <span>{label}</span>
                    </a>
                </Link>
            );
        })}
        </div>
        </Footer> */
    );
}
