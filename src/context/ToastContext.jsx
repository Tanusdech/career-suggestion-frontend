// src/context/ToastContext.jsx
import React, { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  X
} from "lucide-react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((content, defaultType = "success", duration = 3000) => {
    let message, type;
    if (typeof content === "object" && content !== null && "message" in content) {
      message = content.message;
      type = content.type || defaultType;
    } else {
      message = content;
      type = defaultType;
    }

    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getIcon = (type) => {
    const icons = {
      success: <CheckCircle className="w-5 h-5 text-green-600" />,
      error: <XCircle className="w-5 h-5 text-red-600" />,
      warning: <AlertTriangle className="w-5 h-5 text-yellow-600" />,
      info: <Info className="w-5 h-5 text-blue-600" />,
    };
    return icons[type] || icons.info;
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-2 w-[300px]">
        <AnimatePresence>
          {toasts.map(({ id, message, type }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start justify-between gap-3 p-4 rounded-xl shadow-md border
                ${type === "success" && "bg-green-50 border-green-300 text-green-800"}
                ${type === "error" && "bg-red-50 border-red-300 text-red-800"}
                ${type === "warning" && "bg-yellow-50 border-yellow-300 text-yellow-800"}
                ${type === "info" && "bg-blue-50 border-blue-300 text-blue-800"}
              `}
            >
              <div className="flex items-start gap-2">
                {getIcon(type)}
                <div className="text-sm font-medium">{message}</div>
              </div>
              <button onClick={() => removeToast(id)} className="text-gray-400 hover:text-gray-700">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
