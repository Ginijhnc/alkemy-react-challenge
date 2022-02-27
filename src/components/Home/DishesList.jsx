import React from 'react'
import { Container } from "./DishesList.elements"
import { GridWrapper, Title } from "../../globalStyles";
import DishItem from "./DishItem"
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";

const DishesList = () => {

    const { recipes } = useSelector((state) => state.recipes);

    return (
        <>
            <motion.div initial={{ y: "1%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Title>Your Dishes</Title>
                <Container>
                    <GridWrapper Home>
                        {recipes.map((recipe) => (
                            <DishItem recipe={recipe} key={recipe.id} />
                        ))}
                    </GridWrapper>
                </Container>
            </motion.div>
        </>
    )
}

export default DishesList
