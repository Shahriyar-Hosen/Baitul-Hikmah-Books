const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <span className="text-white font-bold text-xl">The Bookshelf</span>
          </div>
          <div className="w-full sm:w-auto">
            <ul className="flex justify-center sm:justify-end space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Email : thebookshelf@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
