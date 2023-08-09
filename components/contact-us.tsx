import type { NextPage } from "next";

const ContactUs: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-row flex-wrap py-[5.38rem] px-[0.31rem] items-start justify-center text-center text-[2.5rem] text-primary-800 font-body-regular-600">
      <div className="flex-1 flex flex-col py-[0rem] px-[0.63rem] box-border items-center justify-start gap-[2.5rem] max-w-[56.25rem]">
        <div className="w-[43rem] flex flex-col items-center justify-start gap-[1.5rem] max-w-[false] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Contact us
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-[1.75rem] px-[1.88rem] items-center justify-start gap-[1.06rem] text-left text-[1.5rem] text-darkslategray font-poppins">
          <div className="self-stretch flex flex-col items-center justify-start gap-[0.38rem]">
            <b className="self-stretch relative leading-[36px]">Enquiry Form</b>
            <div className="self-stretch relative text-[1.13rem] leading-[30px] font-roboto text-slategray">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[0.63rem]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[0.63rem] md:flex-col md:gap-[0.63rem] md:items-start md:justify-center">
              <input
                className="font-roboto text-[1rem] bg-[transparent] self-stretch flex-1 rounded flex flex-col py-[1rem] px-[0.75rem] items-start justify-start border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch"
                type="text"
                placeholder="First name"
                maxLength={30}
                minLength={2}
                required
              />
              <input
                className="font-roboto text-[1rem] bg-[transparent] self-stretch flex-1 rounded flex flex-col py-[1rem] px-[0.75rem] items-start justify-center border-[1px] border-solid border-gray md:flex-[unset] md:self-stretch"
                type="text"
                placeholder="Last name"
                maxLength={30}
                minLength={2}
                required
              />
            </div>
            <input
              className="font-roboto text-[1rem] bg-[transparent] self-stretch rounded flex flex-col py-[1rem] px-[0.75rem] items-start justify-start border-[1px] border-solid border-gray"
              type="email"
              placeholder="Email address"
              minLength={5}
              required
            />
            <textarea
              className="bg-[transparent] font-roboto text-[1rem] self-stretch rounded box-border h-[6.56rem] flex flex-col p-[0.75rem] items-start justify-start border-[1px] border-solid border-gray"
              placeholder="Comments or questions"
            />
            <button className="cursor-pointer [border:none] p-0 bg-primary-500 rounded w-[13.88rem] h-[2.88rem] flex flex-col items-center justify-center hover:bg-darkslateblue active:animate-[1s_ease_0s_infinite_normal_none_pulsate] active:opacity-[1]">
              <div className="relative text-[1rem] font-roboto text-gray-white text-center inline-block w-[12.7rem]">
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
