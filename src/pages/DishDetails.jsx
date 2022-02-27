import React, { useEffect } from "react";
import {
   Container,
   SubContainer,
   DetailsContainer,
} from "../components/DishDetail/DishDetail.elements";
import { Title, DishText, Button } from "../globalStyles";
import {
   FaHeart,
   FaDollarSign,
   FaRegClock,
   FaUtensils,
   FaBook,
} from "react-icons/fa";
import { GiBroccoli } from "react-icons/gi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import TopScroll from "../components/ScrollToTop";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DishDetails = () => {
   const API_KEY = process.env.REACT_APP_API_KEY;
   const URL = process.env.REACT_APP_API_URL;

   const id = useParams();
   const urlToFetch = `${URL}${id.recipeId}/information?apiKey=${API_KEY}&includeNutrition=true`;
   const { data, loading } = useFetch(urlToFetch);

   const navigate = useNavigate();
   const storedToken = localStorage.getItem('token');
   const pricePerServing = data && data.pricePerServing / 100;

   useEffect(() => {
      if (!storedToken) {
         navigate('/login');
      }
   });

   return (
      <>
         <TopScroll />
         {loading ? (
            <>
               <Container style={{ marginTop: "100px" }}>
                  <Spinner />
               </Container>
            </>
         ) : (
            <>
               <Container>
                  <Title>Dish Details</Title>
                  <motion.div
                     initial={{ y: "1%", opacity: 0 }}
                     animate={{ y: "0%", opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ delay: 0.1, duration: 0.3 }}
                  >
                     <SubContainer>
                        <div>
                           <img
                              src={data?.image}
                              style={{
                                 borderRadius: "12px",
                                 height: "231px",
                                 width: "312px",
                              }}
                              alt="dish"
                           />
                        </div>
                        <DetailsContainer>
                           <Title
                              style={{
                                 textShadow:
                                    "0px 0px 7px rgba(206, 206, 206, 0.4)",
                              }}
                           >
                              {data?.title}
                           </Title>
                           <DishText>
                              <FaDollarSign size="20px" color="green" />{" "}
                              {pricePerServing?.toFixed(2)} USD
                           </DishText>
                           <DishText>
                              <FaRegClock size="20px" color="#FDCA83" />{" "}
                              {data?.readyInMinutes} mins
                           </DishText>
                           <DishText>
                              <FaHeart size="20px" color="red" />{" "}
                              {data?.healthScore}%
                           </DishText>
                           <DishText>
                              <FaUtensils size="20px" color="gray" />{" "}
                              {data?.nutrition.nutrients[0].amount.toFixed(0)}{" "}
                              kcals
                           </DishText>
                           {data?.vegan.toString() === "true" ? (
                              <DishText>
                                 <GiBroccoli size="30px" color="#32C432" />{" "}
                                 Vegan
                              </DishText>
                           ) : null}
                           <DishText>
                              <FaBook size="20px" color="palevioletred" />{" "}
                              Learn More:{" "}
                              <a
                                 href={data?.spoonacularSourceUrl}
                                 rel="noreferrer"
                                 target="_blank"
                                 style={{
                                    textDecoration: "none",
                                    color: "#BAA4D8",
                                 }}
                              >
                                 {data?.spoonacularSourceUrl.slice(0, 35)}...
                              </a>
                           </DishText>
                        </DetailsContainer>
                     </SubContainer>
                     <Button onClick={() => navigate(-1)} style={{ marginBottom: "40px" }}>Go Back</Button>
                  </motion.div>
               </Container>
            </>
         )}
      </>
   );
};

export default DishDetails;
