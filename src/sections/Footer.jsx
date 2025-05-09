const Footer = () => {
  return (
    <footer className="c-space py-8 px-5 border-t border-gray-700 bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="https://linkedin.com/in/husnain-mazhar/" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=923245403464" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/husnain.dev/" target="_blank" className="hover:scale-110 transition-transform duration-300">
            <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2025 Husnain Mazhar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
