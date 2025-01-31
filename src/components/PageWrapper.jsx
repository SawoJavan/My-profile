import { motion } from "framer-motion";
import PropTypes from "prop-types"; 

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
PageWrapper.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PageWrapper;
