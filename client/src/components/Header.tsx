import { Link } from "wouter";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary-dark border-b border-gray-700 shadow-md overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 transform rotate-12 translate-y-[-50%] pointer-events-none"></div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
        <div className="flex items-center space-x-2">
          <i className="ri-css3-fill text-2xl text-accent"></i>
          <h1 className="text-xl font-bold">CSS Learning Playground</h1>
        </div>
        <nav>
          <ul className="flex space-x-1 md:space-x-4 text-sm">
            <li>
              <a
                href="#box-model"
                className="px-2 py-1 rounded hover:bg-primary-light"
              >
                Box Model
              </a>
            </li>
            <li>
              <a
                href="#flexbox"
                className="px-2 py-1 rounded hover:bg-primary-light"
              >
                Flexbox
              </a>
            </li>
            <li>
              <a
                href="#grid"
                className="px-2 py-1 rounded hover:bg-primary-light"
              >
                Grid
              </a>
            </li>
            <li>
              <a
                href="#positioning"
                className="px-2 py-1 rounded hover:bg-primary-light"
              >
                Positioning
              </a>
            </li>
            <li>
              <a
                href="#z-index"
                className="px-2 py-1 rounded hover:bg-primary-light"
              >
                Z-Index
              </a>
            </li>
            <li>
              <a
                href="#transform"
                className="px-2 py-1 rounded hover:bg-primary-light"
              >
                Transform
              </a>
            </li>
            <li>
              <Link
                href="/code-certifier"
                className="px-2 py-1 bg-blue-600 rounded-2xl px-4 py-2 inline-block rounded hover:bg-primary-light"
              >
                Code Certifier
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
