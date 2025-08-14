import { motion } from "framer-motion";


export default function MyButton() {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            Hover me
        </motion.button>
    );
}
