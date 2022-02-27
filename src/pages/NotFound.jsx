import { useEffect } from 'react'
import NotFoundSection from "../components/NotFound/NotFoundSection"
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const storedToken = localStorage.getItem('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (!storedToken) {
            navigate('/login');
        }
    });

    return (
        <>
            <NotFoundSection />
        </>
    )
}

export default NotFound