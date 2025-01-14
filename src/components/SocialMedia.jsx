/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SocialMedia = ({ to, svgPath, className, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2  max-sm:gap-1">
      <div className="flex flex-col items-center gap-1">
        <h1 className="uppercase text-backgroundDark dark:text-textDark font-bold max-sm:text-xs">
          {title}
        </h1>
        <Link to={to} target="_blank" rel="noopener noreferrer"  aria-label={`Enlace a ${title}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={className}
            viewBox="0 0 16 16"
          >
            <path d={svgPath} />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
