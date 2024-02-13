import { FooterForm } from "@/app/components/FooterForm";

const data = {
  description: "Let's discuss how we can assist you better",
};

export const Footer = () => {
  return (
    <footer className="before::w-full py-[3.65rem] before:mx-auto before:mb-[3.125rem] before:block before:h-[1px] before:max-w-[75rem] before:bg-white after:mx-auto after:mt-[1.875rem] after:block after:h-[1px] after:w-full after:max-w-[75rem] after:bg-white">
      <div className="sectionContainer flex">
        <div className="w-1/2">
          <p className="max-w-[25rem] text-[3rem] font-bold leading-[1.15]">
            {data.description}
          </p>
        </div>
        <FooterForm />
      </div>
    </footer>
  );
};
