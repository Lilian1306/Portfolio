import { characteristics } from "../utils/Data";

const Caracteristicas = () => {
  return (
    <div className="flex  items-center justify-center gap-10 pt-10 ">
      <div className="px-10 flex flex-col gap-10 max-sm:gap-0">
        <h1 className="text-4xl text-center uppercase font-extrabold max-sm:text-base max-2xl:text-base pb-2 ">
          caracteristicas
        </h1>
        <div className="flex flex-wrap justify-center gap-4 items-center max-sm:gap-2  ">
          {characteristics.map((characteristic) => (
            <div
              key={characteristic.id}
              className="flex flex-wrap gap-10 justify-center items-center p-4  border border-gray-300 rounded-lg backdrop-blur-md shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="flex flex-col gap-4 justify-center items-center w-80 h-60">
                <img src={characteristic.img} alt="Images for Characteristic by unDraw" className="w-40 h-20" />
                <h1 className="text-2xl max-sm:text-base text-center uppercase font-extrabold ">
                  {characteristic.title}
                </h1>
                <p className="text-center max-sm:text-xs">
                  {characteristic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Caracteristicas;
