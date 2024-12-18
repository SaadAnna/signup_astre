export default function Signup() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" flex text-start items-center gap-2">
        <svg
          className="w-10 h-10 text-[#affb20] dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11 21V2.352A3.451 3.451 0 0 0 9.5 2a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 4.04 8.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.017 4.017 0 0 0 2.3 12.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 2 14c.003.24.027.48.072.716a4 4 0 0 0 .235.832c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.285.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 11 21Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 14.5 2a3.451 3.451 0 0 0-1.5.352V21a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 20 17.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
        </svg>

        <h1 className="font-text font-semibold text-white text-4xl">Astre</h1>
      </div>

      <div className="flex flex-wrap mt-32 mx-auto items-start gap-24">
        <div className="flex flex-col gap-4 text-start">
          <span className="font-text font-normal text-white text-xl">
            Astre
          </span>
          <h1 className="font-text text-white font-semibold text-4xl">
            Start Your 30-day free trial
          </h1>
          <span className="font-text font-normal text-neutral-300 text-base ">
            Get the best experience now.
          </span>
          <div className="flex flex-col gap-2 text-start mt-5">
            <svg
              className="w-10 h-10 text-[#8fd100] dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                clipRule="evenodd"
              />
            </svg>

            <h1 className="font-text text-white font-semibold text-xl">
              Create your acoount
            </h1>
            <span className="font-text font-normal  text-base text-neutral-400">
              Create your account now for free on
              <br /> our platform and for free
            </span>
          </div>
          <div className="flex flex-col gap-2 text-start mt-5">
            <svg
              className="w-10 h-10 text-[#8fd100] dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                clipRule="evenodd"
              />
            </svg>

            <h1 className="font-text text-white font-semibold text-2xl">
              Verified your Acoount
            </h1>
            <span className="font-text font-normal  text-base text-neutral-400">
              Activate your account via the message that will be <br /> sent to
              you directly via your email
            </span>
          </div>
          <div className="flex flex-col gap-2 text-start mt-5">
            <svg
              className="w-10 h-10 text-[#8fd100] dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"
              />
            </svg>

            <h1 className="font-text text-white font-semibold text-2xl">
              Start earn
            </h1>
            <span className="font-text font-normal  text-base text-neutral-400">
              Earn money by marketing our products and <br /> withdraw your
              profits instantly{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col text-start gap-5 sm:w-10/12 w-11/12 lg:w-fit h-fit p-5  rounded-lg  bg-[#282828d6]">
          <h1 className="font-text text-white font-semibold text-2xl ">
            Sign up Now.
          </h1>
          <div className="flex flex-wrap gap-5 items-center">
            <h1 className="font-text w-full lg:w-auto items-center text-center text-white cursor-pointer font-semibold text-2xl  h-fit bg-[#323234] hover:bg-[#565659] duration-300 rounded-xl pl-14 pr-14 pt-3 pb-3">
              <svg
                className="w-6 h-6 m-auto text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                  clipRule="evenodd"
                />
              </svg>
            </h1>
            <h1 className="font-text w-full lg:w-auto  cursor-pointer text-white font-semibold text-2xl  h-fit bg-[#323234] hover:bg-[#565659] duration-300 rounded-xl pl-14 pr-14 pt-3 pb-3">
              <svg
                className="w-6 h-6 m-auto text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </h1>
            <h1 className="font-text w-full lg:w-auto text-white cursor-pointer font-semibold text-2xl  h-fit bg-[#323234] hover:bg-[#565659] duration-300 rounded-xl pl-14 pr-14 pt-3 pb-3">
              <svg
                className="w-6 h-6 m-auto text-white  dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
              </svg>
            </h1>
          </div>
          <div className="flex gap-4 items-center">
            <hr className="w-full bg-neutral-500 " />
            <span className="font-text font-normal text-white text-base">
              or
            </span>
            <hr className="w-full bg-neutral-300 " />
          </div>
          <div className="flex flex-col text-start gap-2">
            <label className="font-text font-normal text-neutral-100 font-base ">
              Your name
            </label>

            <input
              type="text"
              required
              placeholder="Your name"
              className="pl-2 w-auto h-10 rounded-lg bg-[#323234] text-white font-text placeholder:font-text placeholder:text-base placeholder:text-[#888888] focus:outline-none focus:border focus:border-solid focus:border-[#8fd100] "
            />
          </div>

          <div className="flex flex-col text-start gap-2">
            <label className="font-text font-normal text-neutral-100 font-base ">
              Email
            </label>

            <input
              type="email"
              required
              placeholder="Your Email"
              className="pl-2 w-auto h-10 rounded-lg bg-[#323234] text-white font-text placeholder:font-text placeholder:text-base placeholder:text-[#888888] focus:outline-none focus:border focus:border-solid focus:border-[#8fd100] "
            />
          </div>
          <div className="flex flex-col text-start gap-2">
            <label className="font-text font-normal text-neutral-100 font-base ">
              Username
            </label>

            <input
              type="text"
              required
              placeholder="Your Username"
              className="pl-2 w-auto h-10 rounded-lg bg-[#323234] text-white font-text placeholder:font-text placeholder:text-base placeholder:text-[#888888] focus:outline-none focus:border focus:border-solid focus:border-[#8fd100] "
            />
          </div>
          <div className="flex flex-col text-start gap-4">
            <label className="font-text font-normal text-neutral-100 font-base ">
              Password
            </label>

            <input
              type="password"
              required
              placeholder="Your password"
              className="pl-2 w-auto h-10 rounded-lg bg-[#323234] text-white font-text placeholder:font-text placeholder:text-base placeholder:text-[#888888] focus:outline-none focus:border focus:border-solid focus:border-[#8fd100] "
            />
          </div>
          <input
            type="submit"
            value="Sign up"
            className="pl-2 w-auto h-10 rounded-lg bg-[#8fd100] hover:bg-[#6eb500] cursor-pointer text-black font-text font-semibold placeholder:font-text placeholder:text-base placeholder:text-[#888888] focus:outline-none focus:border focus:border-solid focus:border-[#8fd100] "
          />
        </div>
      </div>
    </div>
  );
}
