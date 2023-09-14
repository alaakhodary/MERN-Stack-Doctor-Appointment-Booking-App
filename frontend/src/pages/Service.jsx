import ServicesCard from "../Components/Services/ServicesCard";
import { services } from "../assets/data/services";

const Service = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
          {services.map((service, index) => (
            <ServicesCard service={service} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
