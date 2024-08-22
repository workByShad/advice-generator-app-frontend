const Footer: React.FC = () => {
  return (
    <footer className="flex justify-around items-center w-screen h-[7vh] bg-gray-950">
      <p className="text-white">
        Check out my{" "}
        <a
          href="https://github.com/workByShad"
          target="_blank"
          rel="noopener noreferrer external"
          className="text-white"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
