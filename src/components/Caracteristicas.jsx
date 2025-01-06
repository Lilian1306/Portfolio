import { characteristics } from "../utils/Data";

const Caracteristicas = () => {
  return (
    <div className="flex  items-center justify-center gap-10 pt-10 ">
      <div className="px-10 flex flex-col gap-10 max-sm:gap-0">
        <h1 className="text-4xl text-center uppercase font-extrabold max-sm:text-base max-2xl:text-base pb-6 ">
          caracteristicas
        </h1>
        <div className="flex flex-wrap justify-center gap-6 items-center max-sm:gap-2  ">
          {characteristics.map((characteristic) => (
            <div
              key={characteristic.id}
              className="flex flex-wrap gap-10 justify-center items-center pb-4"
            >
              <div className="flex flex-col gap-4 justify-center items-center w-80 ">
                <img src={characteristic.img} alt="" className="w-14 h-14" />
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
