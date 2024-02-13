import Image from "next/image";

export const FooterForm = () => {
  return (
    <form className="flex w-1/2 justify-between gap-[2rem]">
      <div className="flex w-full max-w-[23rem] flex-col gap-[0.75rem]">
        <input
          type="text"
          placeholder="Name*"
          className="block bg-transparent p-[0.3125rem]"
        />
        <input
          type="text"
          placeholder="Company"
          className="block bg-transparent p-[0.3125rem]"
        />
        <input
          type="text"
          placeholder="E-mail*"
          className="block bg-transparent p-[0.3125rem]"
        />
        <input
          type="text"
          placeholder="Phone number*"
          className="mb-[1.375rem] block bg-transparent p-[0.3125rem]"
        />
        <label className="text-accentDark flex max-w-[16.5rem] items-center gap-[0.6875rem] text-[0.5625rem] leading-[1]">
          <input type="checkbox" className="peer hidden" />
          <span className="h-[0.9375rem] w-[0.9375rem] flex-shrink-0 cursor-pointer rounded-full border border-white bg-[rgba(52,57,57,0.7)] peer-checked:border-[0.1875rem] peer-checked:border-[rgba(52,57,57,0.7)] peer-checked:bg-white" />
          <span>
            I agree to the processing of personal data according to the{" "}
            <a href="/" className="text-accent underline">
              Privacy Policy
            </a>
          </span>
        </label>
      </div>

      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex h-[6.75rem] w-[6.75rem] items-center justify-center rounded-full bg-gradient-to-l from-[#142F28] to-[rgba(52,57,57,0.8)]">
          <div className="bg-accent flex h-[5.5625rem] w-[5.5625rem] items-center justify-center rounded-full">
            <Image src="/images/user.png" alt="User" width={79} height={79} />
          </div>
        </div>
        <button
          type="submit"
          className="border-accent hover: hover:bg-accent active:bg-accent rounded-[6.25rem] border-[0.25rem] px-[1.66rem] py-[0.88rem] font-bold transition-colors hover:bg-opacity-15 active:bg-opacity-25"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
