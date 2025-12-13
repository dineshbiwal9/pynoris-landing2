export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading text-white mb-2">PYNORIS</h3>
            <p className="text-gray-500 text-sm">Engineering Intelligent Futures.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Twitter</a>
          </div>

          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} PYNORIS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
