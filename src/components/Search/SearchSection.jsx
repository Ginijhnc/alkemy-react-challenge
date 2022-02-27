import { Container } from "../Search/SearchSection.elements";
import { GridWrapper, Title } from "../../globalStyles";
import DishItem from "../Home/DishItem";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import SearchInput from "./SearchInput";

const SearchSection = () => {
   const recipes = useSelector((state) => state.search);

   return (
      <>
         <Container>
            <motion.div
               initial={{ y: "1%", opacity: 0 }}
               animate={{ y: "0%", opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
            >
               <Title style={{ margin: "0 auto" }}>Search Dishes</Title>
               <SearchInput />
               <GridWrapper searchResults>
                  {recipes &&
                     recipes.map(
                        (recipe) => {
                           return (
                              <DishItem
                                 key={recipe.id}
                                 recipe={recipe}
                                 isSearching
                              />
                           );
                        }
                     )}
               </GridWrapper>
            </motion.div>
         </Container>
      </>
   );
};

export default SearchSection;
