import React from "react";
import CTAButton from "../components-custom/CTAButton";
import Image from "next/image";

const HowItWorksSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container flex flex-col text-center items-center gap-8 text-neutral-900">
        <h2 className="text-h2">How it Works</h2>
        {/* Steps Container */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 items-start justify-center text-start text-p max-w-screen-sm md:max-w-none">
          {/* Step */}
          <div className="relative flex flex-col items-center gap-4 w-full md:w-[320px] lg:w-full p-6 bg-white text-start shadow-xl">
            <div className="flex w-full items-center justify-between">
              <h3 className="text-h3">Strategy Call</h3>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.1609 23.4847L26.6858 19.0191C25.0875 17.4242 22.3705 18.0622 21.7312 20.1355C21.2517 21.5709 19.6535 22.3684 18.2151 22.0493C15.0186 21.2519 10.7033 17.1052 9.90419 13.7559C9.42471 12.3205 10.3837 10.7256 11.8221 10.2472C13.8998 9.60921 14.5391 6.8979 12.9409 5.30301L8.46577 0.837317C7.18717 -0.279106 5.26927 -0.279106 4.1505 0.837317L1.11383 3.86761C-1.92284 7.05739 1.43348 15.5103 8.94524 23.0063C16.457 30.5023 24.9277 34.0111 28.1242 30.8212L31.1609 27.7909C32.2797 26.515 32.2797 24.6012 31.1609 23.4847Z"
                  fill="#87C2A2"
                />
              </svg>
            </div>
            <p className="text-p">
              We get to know your goals and discuss how we can help reach them
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-4 w-full md:w-[320px] lg:w-full p-6 bg-white text-start shadow-xl">
            <div className="flex w-full items-center justify-between">
              <h3 className="text-h3">Planning & Execution</h3>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_401_95)">
                  <path
                    d="M3.98223 22.2641L6.4546e-05 18.2822L3.98223 14.3L3.34063 13.6584C2.23053 12.5483 2.23053 10.7422 3.34039 9.63207C3.87823 9.09448 4.59332 8.79833 5.35381 8.79833C6.11407 8.79833 6.82915 9.09448 7.36675 9.63207L8.00835 10.2737L11.9905 6.2915L13.1656 7.46679V9.32421C11.087 9.81957 9.53642 11.6924 9.53642 13.9204C9.53642 16.1487 11.087 18.0215 13.1656 18.5166V24.2761H16.6128L17.3001 24.9633L11.9905 30.2727L8.00835 26.2905L7.45537 26.8437C6.34527 27.9538 4.53912 27.9538 3.42901 26.8437C2.31891 25.7336 2.31891 23.9275 3.42901 22.8173L3.98223 22.2641Z"
                    fill="#87C2A2"
                  />
                  <path
                    d="M15.0428 22.3991V16.7675H14.2608C12.6907 16.7675 11.4136 15.4904 11.4136 13.9204C11.4136 12.3506 12.6907 11.0735 14.2608 11.0735H15.0428V5.44189H20.6743V4.53466C20.6743 2.9646 21.9514 1.6875 23.5215 1.6875C25.0913 1.6875 26.3684 2.9646 26.3684 4.53466V5.44189H32V11.0735H31.2178C29.8403 11.0735 28.6885 12.0566 28.4268 13.3581C28.3132 13.5168 28.2456 13.7107 28.2456 13.9204C28.2456 14.1301 28.3132 14.3239 28.4268 14.4829C28.6885 15.7841 29.8403 16.7675 31.2178 16.7675H32V22.3991H26.3684V21.4917C26.3684 19.9218 25.0913 18.6447 23.5215 18.6447C21.9514 18.6447 20.6743 19.9218 20.6743 21.4917V22.3991H15.0428Z"
                    fill="#87C2A2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_401_95">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="matrix(-1 0 0 1 32 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-p">
              We implement our formula for your practice to attract more
              patients
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-4 w-full md:w-[320px] lg:w-full p-6 bg-white text-start shadow-xl">
            <div className="flex w-full items-center justify-between">
              <h3 className="text-h3">Delivery</h3>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_401_103)">
                  <path
                    d="M14.8088 14.8193L0.43375 8.76671C0.227812 8.67996 0 8.83121 0 9.05471L0 25.2359C0 25.6448 0.248937 26.0125 0.628625 26.1643L14.5714 31.7415C14.7767 31.8236 15 31.6724 15 31.4513L15 15.1073C15 14.9816 14.9246 14.8681 14.8088 14.8193Z"
                    fill="#87C2A2"
                  />
                  <path
                    d="M16.1212 13.0998L30.0159 7.24938C30.2657 7.14426 30.2724 6.79276 30.0268 6.6782L16.4229 0.329698C16.1548 0.204635 15.8452 0.204635 15.5771 0.329698L1.97318 6.6782C1.72762 6.79276 1.7343 7.14426 1.98405 7.24938L15.8787 13.0998C15.9562 13.1324 16.0437 13.1324 16.1212 13.0998Z"
                    fill="#87C2A2"
                  />
                  <path
                    d="M17 15.1073L17 31.4513C17 31.6724 17.2233 31.8236 17.4286 31.7415L31.3714 26.1643C31.751 26.0125 32 25.6448 32 25.2359V9.05471C32 8.83121 31.7722 8.67996 31.5662 8.76671L17.1912 14.8193C17.0754 14.8681 17 14.9816 17 15.1073Z"
                    fill="#87C2A2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_401_103">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-p">
              Enjoy your new stream of patients with your new strategic online
              presence
            </p>
          </div>
        </div>
        <CTAButton />
      </div>
    </section>
  );
};

export default HowItWorksSection;
