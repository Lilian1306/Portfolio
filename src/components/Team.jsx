import { Link } from "react-router-dom";
import { developers } from "../utils/Data";

const Team = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {developers.map((developer) => (
        <div
          key={developer.id}
          className="flex flex-col items-center py-3 w-32 h-40  rounded-md shadow-lg bg-backgroundDark/10 backdrop-blur-sm dark:backdrop-blur-md dark:bg-white/5 border border-gray-200 hover:bg-backgroundDark/20 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900"
        >
          <section className="flex justify-center items-center w-10 h-14 rounded-full shadow-md bg-gradient-to-r from-[#5fa9db] to-[#d5d8e2] hover:from-[#C9A9E9] hover:to-[#176474] hover:cursor-pointer hover:scale-110 duration-300">
            <img src={developer.img} alt="TTech Desinger Developer" className="w-6 fill-gray-700" />
          </section>

          <section className="block border-t border-gray-500 my-3 text-center text-backgroundDark dark:text-textDark ">
            <div className="py-3">
              <h3 className=" font-semibold text-sm ">{developer.name}</h3>
              <h3 className=" text-xs font-bold">{developer.profesion}</h3>
            </div>
            <Link
              to={developer.github}
              target=" _blank"
              className="flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-4 hover:scale-125 duration-200 hover:cursor-pointer fill-white dark:fill-black stroke-2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </Link>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Team;
