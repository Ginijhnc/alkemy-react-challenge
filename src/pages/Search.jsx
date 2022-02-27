import React, { useEffect } from 'react';
import SearchSection from "../components/Search/SearchSection"
import TopScroll from "../components/ScrollToTop";
import { useNavigate } from "react-router-dom";

const Search = () => {
    localStorage.setItem("previousRoute", "home")
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
            <SearchSection />
        </>
    );
};

export default Search;
