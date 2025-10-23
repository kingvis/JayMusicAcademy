import React, { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

interface GoogleFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formId: string;
  title?: string;
  description?: string;
  onFormSubmit?: () => void;
}

const GoogleFormModal: React.FC<GoogleFormModalProps> = ({
  isOpen,
  onClose,
  formId,
  title = "Welcome to JayMusicAcademy!",
  description = "Please complete this quick form to get started:",
  onFormSubmit
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formUrl = `https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true`;

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    onFormSubmit?.();
    // Auto-close modal after 2 seconds
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="lg"
      showCloseButton={!formSubmitted}
    >
      <div className="space-y-4">
        {/* Description */}
        <p className="text-gray-600 text-center">
          {description}
        </p>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full"
            />
            <span className="ml-3 text-gray-600">Loading form...</span>
          </div>
        )}

        {/* Form Submitted Success State */}
        {formSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Thank you!
            </h3>
            <p className="text-gray-600">
              Your information has been submitted successfully.
            </p>
          </motion.div>
        ) : (
          /* Google Form Iframe */
          <div className="relative">
            <iframe
              src={formUrl}
              width="100%"
              height="420"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              onLoad={handleIframeLoad}
              className="rounded-lg border border-gray-200"
              title="Google Form"
            />
            
            {/* Form Submit Button (Optional) */}
            <div className="mt-4 text-center">
              <button
                onClick={handleFormSubmit}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Complete Registration
              </button>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
          <p>
            This form helps us personalize your music academy experience.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default GoogleFormModal;
