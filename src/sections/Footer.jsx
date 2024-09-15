const Footer = () => {
  return (
    <footer className="c-space pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-3">
        <div className="social-icon inline-block">
          <a
            href="https://github.com/Ayesha-Areej01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#fff"
              className="w-1/2 h-1/2 bg-[#0D1F2D]"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
            </svg>
          </a>
        </div>

        <div className="social-icon inline-block">
          <a
            href="https://www.linkedin.com/in/ayesha-aay-0a6a46289"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="#fff"
              className="w-1/2 h-1/2 bg-[#0D1F2D]"
           >
              <path d="M100.28 448H7.4V165.4h92.88v282.6zm-46.45-321.5c-29.99 0-54.41-24.3-54.41-54.4 0-30.14 24.42-54.4 54.41-54.4 29.97 0 54.39 24.26 54.39 54.4 0 30.1-24.42 54.4-54.39 54.4zm383.56 321.5h-92.88V314.6c0-31.4-11.25-52.8-39.49-52.8-21.51 0-34.31 14.43-39.91 28.37-2.07 4.98-2.59 11.91-2.59 18.87v139.2h-92.88v-282.6h92.88v39.51c12.29-18.7 34.07-45.5 83.4-45.5 61.16 0 106.88 40.5 106.88 127.1v161.6z" />
            </svg>
          </a>
        </div>
      </div>

      <p className="text-white-500 text-sm sm-col">
        © 2024 Ayesha Areej. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
