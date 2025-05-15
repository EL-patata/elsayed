import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
        {/* العمود الأول: روابط سريعة */}
        <div>
          <h3 className="text-xl font-bold mb-3">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-300 transition">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300 transition">
                عن المركز
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300 transition">
                الخدمات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300 transition">
                اتصل بنا
              </a>
            </li>
          </ul>
        </div>

        {/* العمود الثاني: معلومات التواصل */}
        <div>
          <h3 className="text-xl font-bold mb-3">تواصل معنا</h3>
          <p className="text-gray-300">📍 جامعة الأقصر، مصر</p>
          <p className="text-gray-300">📞 +20 123 456 789</p>
          <p className="text-gray-300">📧 info@example.com</p>
        </div>

        {/* العمود الثالث: أيقونات التواصل الاجتماعي */}
        <div>
          <h3 className="text-xl font-bold mb-3">تابعنا على</h3>
          <div className="flex justify-center md:justify-start space-x-4 rtl:space-x-reverse">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-2xl transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="text-center text-gray-300 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة - مركز الاستدامة
        بجامعة الأقصر
      </div>
    </footer>
  );
};

export default Footer;
