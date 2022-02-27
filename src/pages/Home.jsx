import React, { useEffect } from 'react'
import HomeSection from "../components/Home/HomeSection"
import TopScroll from "../components/ScrollToTop";
import { useNavigate } from "react-router-dom";

const Home = () => {
    localStorage.setItem("previousRoute", "search")
    const storedToken = localStorage.getItem('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (!storedToken) {
            navigate('/login');
        }
    });

    return (
        <>
            <TopScroll />
            <HomeSection />
        </>
    )
}

export default Home
