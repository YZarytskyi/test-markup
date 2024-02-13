import Image from "next/image";
import Marquee from "react-fast-marquee";

const data = {
  heading: "We are honored to contribute to your success",
  description:
    "We customize and combine tools and services based on your business's purpose and objectives to deliver tailored results",
  partners: [
    {
      icon: "/images/mercedes.png",
      alt: "Mercedes",
      width: 258,
      height: 145,
    },
    {
      icon: "/images/toyota.png",
      alt: "Toyota",
      width: 181,
      height: 148,
    },
    {
      icon: "/images/jameson.png",
      alt: "Jameson",
      width: 209,
      height: 117,
    },
    {
      icon: "/images/metro.png",
      alt: "Metro",
      width: 193,
      height: 97,
    },
    {
      icon: "/images/karcher.png",
      alt: "Karcher",
      width: 209,
      height: 47,
    },
    {
      icon: "/images/socar.png",
      alt: "Socar",
      width: 206,
      height: 48,
    },
  ],
};

export const Partners = () => {
  return (
    <section className="flex flex-col items-center py-[10rem]">
      <h2 className="sectionContainer mb-[3rem] text-center text-[1.5rem] font-bold leading-[1.15] md:mb-[3.75rem] md:text-[2rem] lg:text-[2.5rem]">
        {data.heading}
      </h2>
      <Marquee autoFill={true} className="mb-[3rem] md:mb-[3.75rem]">
        <ul className="flex gap-[3.75rem] pl-[3.75rem]">
          {data.partners.map(({ icon, ...restImageProps }) => (
            <li key={icon} className="partnerItem">
              <Image src={icon} {...restImageProps} />
            </li>
          ))}
        </ul>
      </Marquee>
      <p className="sectionContainer text-center text-[1.5rem] font-medium leading-[1.15] md:text-[2rem] lg:text-[2.5rem]">
        {data.description}
      </p>
    </section>
  );
};
