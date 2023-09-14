import { formateDate } from "../../utils/formateDate";

const DoctorsAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Alaa Alkhodary
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro illo,
          fuga consectetur iste eligendi cumque voluptatem commodi nisi ad
          quisquam veritatis eius labore vel laudantium voluptatum voluptas
          iusto ut enim eos velit animi repellat iure? Iure sequi nulla eum,
          facilis veniam voluptas odit perferendis rerum ab et alias expedita
          unde!
        </p>
        <div className="mt-12">
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
            Education
          </h3>
          <ul className="pt-4 md:p-5">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center md:gap-5 mb-[30px]">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formateDate("09-13-2018")} - {formateDate("09-13-2022")}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor">
                  PHD in Surgeon
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                AlNaser Hospital, Gaza.
              </p>
            </li>

            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center md:gap-5 mb-[30px]">
              <div>
                <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                  {formateDate("07-4-2016")} - {formateDate("09-13-2018")}
                </span>
                <p className="text-[15px] leading-6 font-medium text-textColor">
                  PHD in Surgeon
                </p>
              </div>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                AlNaser Hospital, Gaza.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
            Experience
          </h3>
          <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("07-4-2016")} - {formateDate("09-13-2018")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                AlNaser Hospital, Gaza.
              </p>
            </li>

            <li className="p-4 rounded bg-[#fff9ea]">
              <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("07-4-2016")} - {formateDate("09-13-2018")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Sr. Surgeon
              </p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                AlNaser Hospital, Gaza.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorsAbout;
