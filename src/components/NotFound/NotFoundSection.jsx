import { Container, NumberTitle } from "./NotFoundSection.elements"
import { Title, Button } from "../../globalStyles"
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const NotFoundSection = () => {
    let navigate = useNavigate();

    return (
        <motion.div initial={{ y: "3%", opacity: 0 }} animate={{ y: "0%", opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <Container>
                <NumberTitle>
                    404
                </NumberTitle>
                <Title style={{ margin: "0 auto" }}>
                    That page wasn't found.
                </Title>
                <Button style={{ margin: "40px auto" }} onClick={() => navigate('/home')}>Go Home</Button>
            </Container>
        </motion.div>
    )
}

export default NotFoundSection