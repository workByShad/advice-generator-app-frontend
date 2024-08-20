const Footer: React.FC = () => {
  return (
    <footer className="flex justify-around items-center w-screen h-[7vh] border-4 border-red-500">
      <p className="text-xs">
        Check out my{" "}
        <a
          href="https://github.com/workByShad"
          target="_blank"
          rel="noopener noreferrer external"
          className="text-xs"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
