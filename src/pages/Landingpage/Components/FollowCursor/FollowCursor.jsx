// FollowCursor.jsx (unchanged)
import { motion, AnimatePresence } from 'framer-motion';

const FollowCursor = ({ cursorPos, entryPos, showSpan, text, className = 'foLlsNg-Span' }) => {
  return (
    <AnimatePresence>
      {showSpan && (
        <motion.span
          className={className}
          initial={{ scale: 0, opacity: 0, left: entryPos.x, top: entryPos.y }}
          animate={{ scale: 1, opacity: 1, left: cursorPos.x, top: cursorPos.y }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{ 
            position: 'absolute', 
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {text}
        </motion.span>
      )}
    </AnimatePresence>
  );
};

export default FollowCursor;