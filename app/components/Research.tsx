import { ResearchCardList } from "@/app/components/ResearchCardList";

const data = {
  title: "Comprehensive research",
  description:
    "Empower your decision-making, providing \n a competitive edge in a data-centric market.",
  list: [
    "Qualitative research is a collecting and analyzing non-numerical data to understand concepts, opinions, or experiences",
    "Quantitative research methods is an objective measurement and numerical analysis of data collected through polls, questionnaires, and surveys",
  ],
};

export const Research = () => {
  return (
    <section>
      <div className="sectionContainer flex flex-col gap-[1.25rem]">
        <h2 className="text-[1.5rem] font-bold leading-[1.15] md:text-[2rem] lg:text-[2.5rem]">
          {data.title}
        </h2>
        <p className="max-w-[56.5rem] whitespace-pre-line text-[1.5rem] font-[500] leading-[1.15] text-accent md:text-[2rem] lg:text-[2.5rem]">
          {data.description}
        </p>
        <ul className="flex max-w-[48.125rem] flex-col pl-[1.375rem] md:pl-[1.875rem] lg:pl-[2.375rem]">
          {data.list.map((item, index) => (
            <li
              key={index}
              className="list-disc text-[1rem] font-[500] leading-[1.15] text-white md:text-[1.25rem] lg:text-[1.75rem]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <ResearchCardList />
    </section>
  );
};
