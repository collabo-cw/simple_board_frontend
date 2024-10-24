// import "@/styles/globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();

    // 로그인 상태 확인 함수
    const isAuthenticated = () => {
        return typeof window !== 'undefined' && localStorage.getItem('access_token') !== null;
    };

    useEffect(() => {
        const protectedRoutes = ['/main']; // 보호할 경로 설정

        // 현재 경로가 보호된 경로이고 인증되지 않은 경우
        if (protectedRoutes.includes(router.pathname) && !isAuthenticated()) {
            router.push('/login'); // 로그인 페이지로 리다이렉트
        }
    }, [router.pathname]);

    return <Component {...pageProps} />;
}