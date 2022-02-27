import {
   Item,
   Title,
   SubContainer,
   DishesColumn,
   DishesRow,
   DishInfo,
} from "./DishItem.elements";
import {
   FaHeart,
   FaDollarSign,
   FaRegClock,
   FaUtensils,
   FaTimesCircle,
   FaInfoCircle,
   FaPlusCircle,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../../types/types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { dishLimitAlert, categoryLimitAlert, successDishAlert, dishAlreadyExistsAlert, successDishRemovalAlert } from "../Alerts";

const DishItem = ({ recipe }) => {
   const dispatch = useDispatch();
   let navigate = useNavigate();
   const path = window.location.pathname;

   const { recipes } = useSelector((state) => state);

   const handleAddDish = (e) => {
      e.preventDefault();
      if (recipes.recipes.length >= 4) {
         dishLimitAlert();
         return null;
      }
      if ((recipe.vegan).toString() === "true" && recipes.vegan.length === 2) {
         categoryLimitAlert();
         return null;
      } else if ((recipe.vegan).toString() === "false" && recipes.nonVegan.length === 2) {
         categoryLimitAlert();
         return null;
      } else if ((recipes.recipes).some(r => r.id === recipe.id)) {
         dishAlreadyExistsAlert();
         return null;
      }
      const action = {
         type: types.add,
         payload: recipe,
      };
      dispatch(action);
      successDishAlert();
   };

   const handleDeleteDish = (e) => {
      e.preventDefault();
      const action = {
         type: types.delete,
         payload: recipe.id,
      };
      dispatch(action);
      successDishRemovalAlert();
   };

   const handleDetails = () => {
      navigate(`/details/${recipe.id}`);
   };


   return (
      <>
         <motion.div
            initial={{ y: "1%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
         >
            <Item>
               <img
                  src={recipe && recipe.image}
                  style={{
                     borderRadius: "12px",
                     height: "231px",
                     width: "312px",
                  }}
                  alt="dish"
               />
               {path && path === "/search" ? (
                  <>
                     <a data-tip data-for={`${recipe && recipe.id} add`}>
                        <FaPlusCircle
                           onClick={handleAddDish}
                           size="35"
                           color="green"
                           style={{
                              transform: "translate(148px,-227px)",
                              cursor: "pointer",
                           }}
                        />
                     </a>
                     <ReactTooltip
                        id={`${recipe && recipe.id} add`}
                        backgroundColor="black"
                     >
                        Add To Menu
                     </ReactTooltip>
                  </>
               ) : (
                  <>
                     <a data-tip data-for={`${recipe && recipe.id} remove`}>
                        <FaTimesCircle
                           onClick={handleDeleteDish}
                           size="35"
                           color="#ee5b5b"
                           style={{
                              transform: "translate(148px,-227px)",
                              cursor: "pointer",
                              filter: "drop-shadow(0px 0px 8px #000000)",
                           }}
                        />
                     </a>
                     <ReactTooltip
                        id={`${recipe && recipe.id} remove`}
                        backgroundColor="black"
                     >
                        Remove From Menu
                     </ReactTooltip>
                  </>
               )}

               <a data-tip data-for={`${recipe && recipe.id}`}>
                  <FaInfoCircle
                     onClick={handleDetails}
                     size="35"
                     color="white"
                     style={{
                        transform: "translate(113px,-180px)",
                        cursor: "pointer",
                        filter: "drop-shadow(0px 0px 8px #000000)"
                     }}
                  />
               </a>
               <ReactTooltip
                  id={`${recipe && recipe.id}`}
                  backgroundColor="black"
               >
                  See Details
               </ReactTooltip>
               <Title>{recipe && recipe.title}</Title>
               <SubContainer>
                  <DishesColumn>
                     <DishesRow>
                        <FaDollarSign size="20px" color="green" />
                        <DishInfo>
                           {recipe && (recipe.pricePerServing / 100).toFixed(2)} USD
                        </DishInfo>
                     </DishesRow>
                     <DishesRow>
                        <FaRegClock size="20px" color="#FDCA83" />
                        <DishInfo>
                           {recipe && recipe.readyInMinutes} mins
                        </DishInfo>
                     </DishesRow>
                  </DishesColumn>

                  <DishesColumn>
                     <DishesRow>
                        <FaHeart size="20px" color="red" />
                        <DishInfo>{recipe && recipe.healthScore}%</DishInfo>
                     </DishesRow>
                     <DishesRow>
                        <FaUtensils size="20px" color="gray" />
                        <DishInfo>
                           {recipe &&
                              recipe.nutrition.nutrients[0].amount.toFixed(
                                 0
                              )}{" "}
                           kcals
                        </DishInfo>
                     </DishesRow>
                  </DishesColumn>
               </SubContainer>
            </Item>
         </motion.div>
      </>
   );
};

export default DishItem;
