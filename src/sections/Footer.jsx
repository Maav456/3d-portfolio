
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      {/* Terms & Privacy */}
      <div className="text-white-500 flex gap-2">
        <a href="/terms" className="hover:text-gray-400 transition">Terms & Conditions</a>
        <p>|</p>
        <a href="/privacy" className="hover:text-gray-400 transition">Privacy Policy</a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        <a href="https://github.com/Maav456" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/mayank-kumar-shrivastav-6b651328b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/icons8-linkedin.svg" alt="Twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-white-500">© 2025 Mayank Kumar Shrivastav. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
