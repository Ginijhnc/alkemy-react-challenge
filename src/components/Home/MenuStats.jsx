import React from 'react'
import { Container, DishText, DishesColumn, DishesRow, SubContainer } from './MenuStats.elements'
import { FaHeart, FaDollarSign, FaRegClock, FaUtensils } from "react-icons/fa"
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";


const MenuStats = () => {
    const { recipes } = useSelector((state) => state.recipes);

    const totalPrice = recipes.reduce((counter, recipe) => {
        return counter + parseFloat(recipe.pricePerServing.toFixed(0) / 100);
    }, 0);

    const healthScoreAverage = recipes.reduce((counter, recipe) => {
        return counter + parseInt(recipe.healthScore) / recipes.length;
    }, 0);

    const averageTime = recipes.reduce((counter, recipe) => {
        return counter + parseInt(recipe.readyInMinutes) / recipes.length;
    }, 0);

    const totalCalories = recipes.reduce((counter, recipe) => {
        return counter + parseInt(recipe.nutrition.nutrients[0].amount);
    }, 0);

    return (
        <>
            <motion.div initial={{ y: "3%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Container>
                    <h1 style={{ color: 'white', fontWeight: "600", fontFamily: 'Poppins' }}>Dishes Stats</h1>
                    <SubContainer>
                        <DishesColumn>
                            <DishesRow><FaDollarSign size="25px" color="green" /><DishText>Total Price: {totalPrice.toFixed(2)} USD </DishText></DishesRow>
                            <DishesRow><FaRegClock size="25px" color="#FDCA83" /><DishText>Average Time: {averageTime.toFixed(0)} mins </DishText></DishesRow>
                        </DishesColumn>

                        <DishesColumn>
                            <DishesRow><FaHeart size="25px" color="red" /><DishText>Health Score: {healthScoreAverage.toFixed(1)}%</DishText></DishesRow>
                            <DishesRow><FaUtensils size="25px" color="gray" /><DishText>Calories: {totalCalories} kcals</DishText></DishesRow>
                        </DishesColumn>
                    </SubContainer>
                </Container>
            </motion.div>
        </>
    )
}

export default MenuStats
