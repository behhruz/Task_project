import React, { useEffect } from "react"; 
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Terms & Conditions</h1>
          <p className="text-center text-purple-100 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our service
          </p>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 p-8 space-y-8">
         
          <section className="hover:bg-purple-50/50 rounded-xl p-6 transition-colors">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          
          <section className="hover:bg-purple-50/50 rounded-xl p-6 transition-colors">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
              License to Use
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Comforty's website for personal, non-commercial transitory viewing only.
            </p>
            <ul className="space-y-2 text-gray-600 list-none">
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                You must not modify or copy the materials
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                You must not use the materials for any commercial purpose
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                You must not attempt to decompile or reverse engineer any software
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                You must not remove any copyright or other proprietary notations
              </li>
            </ul>
          </section>

          
          <section className="hover:bg-purple-50/50 rounded-xl p-6 transition-colors">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
              Disclaimer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The materials on Comforty's website are provided on an 'as is' basis. Comforty makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

         
          <section className="hover:bg-purple-50/50 rounded-xl p-6 transition-colors">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
              Limitations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In no event shall Comforty or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Comforty's website.
            </p>
          </section>

      
          <section className="hover:bg-purple-50/50 rounded-xl p-6 transition-colors">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
              Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Comforty, we value your privacy. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of data in accordance with this policy.
            </p>
          </section>

         
          <section className="bg-purple-50 rounded-xl p-6 mt-12">
            <h2 className="text-xl font-semibold text-purple-900 mb-4">Questions or Concerns?</h2>
            <p className="text-gray-700 mb-2">Email: terms@comforty.com</p>
            <p className="text-gray-700">Phone: (555) 123-4567</p>
          </section>

          
          <div className="flex justify-center pt-8">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
            >
              Back to Home
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            Last Updated: March 19, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

