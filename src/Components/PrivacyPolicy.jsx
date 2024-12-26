import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Privacy Policy</h1>
          <p className="text-center text-purple-100 max-w-2xl mx-auto">
            We value your privacy and are committed to protecting your personal information
          </p>
        </div>
      </div>

      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 p-8 space-y-8">
          
          <section className="hover:bg-purple-50/50 rounded-xl p-6 transition-colors">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="space-y-2 text-gray-600 list-none">
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Name and contact information
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Account credentials
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Payment information
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Communication preferences
              </li>
            </ul>
          </section>

         
          <section className="hover:bg-purple-50/50 rounded-xl p-6 transition-colors">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-gray-600 list-none">
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Process your orders and payments
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Send you marketing communications (with your consent)
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Improve our services
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Comply with legal obligations
              </li>
            </ul>
          </section>

          
          <section className="hover:bg-purple-50/50 rounded-xl p-6 transition-colors">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
              Information Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="space-y-2 text-gray-600 list-none">
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Service providers who assist our operations
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Law enforcement when required by law
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-purple-600">•</span>
                Business partners (with your consent)
              </li>
            </ul>
          </section>

         
          <section className="bg-purple-50 rounded-xl p-6 mt-12">
            <h2 className="text-xl font-semibold text-purple-900 mb-4">Need to get in touch?</h2>
            <p className="text-gray-700 mb-2">Email: privacy@example.com</p>
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

export default PrivacyPolicy;
