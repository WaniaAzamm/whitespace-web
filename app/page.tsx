import React from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
function page() {
  return (
    <>
      <div className=" bg-cover bg-fixed h-[666px]">
        <div className="blue md:px-[80px] px-[20px] lg:py-[100px] py-[10px] lg:flex gap-4">
          <div className=" lg:w-[691px] w-full py-[50px] text-white text-center md:text-start">
            <div className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px]">
              Get More Done with whitepace
            </div>
            <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[8px] lg:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </div>
            <button className="inter font-medium lg:text-[18px] text-[12px] bg-blue-400 rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[10px] gap-[10px] mt-10 sm:mt-4 md:mt-2 lg:mt-10 hover:bg-transparent hover:border-2 transition-all duration-200">
              Try Whitepace free ➔
            </button>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-sky-200 sm:bg-sky-100 lg:h-96 h-64">
          </div>
        </div>
      </div>
      <div className="bg-white h-[520px] relative z-10 mt-8">
        <Image
          src={"/lines.png"}
          alt={""}
          width={300}
          height={300}
          className="md:h-[500px] h-[200px] md:w-[300px] w-[100px] md:mt-2 mt-6 absolute z-0"
        ></Image>
        <div className="md:px-[80px] px-[20px] lg:py-[100px] py-[10px] lg:flex gap-4">
          <div className=" lg:w-[691px] w-full py-[50px] text-black text-center md:text-start">
            <div className="relative">
              <Image
                src={"/underline.png"}
                alt=""
                height={40}
                width={450}
                className="lg:w-[450px] w-[240px] absolute z-0 -bottom-2 md:left-1/2 left-[60%] transform -translate-x-1/2 "
              ></Image>
              <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                Project Management
              </h1>
            </div>
            <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[12px] lg:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </div>
            <button className="inter font-medium lg:text-[18px] text-[12px] text-white bg-blue-400 rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[10px] gap-[10px] mt-12 sm:mt-4 md:mt-2 lg:mt-16 hover:translate-x-2 transition-all duration-200 relative z-10">
              Get Started ➔
            </button>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-sky-200 sm:bg-sky-100 lg:h-96 h-64">
          </div>
        </div>
      </div>
      <div className="bg-white h-[542px] md:mt-24 mt-36">
        <div className="md:px-[80px] px-[20px] lg:py-[100px] py-[10px] lg:flex gap-4">
          <div className="lg:items-end items-center flex justify-center lg:justify-normal lg:w-[824px] w-full lg:h-[500px] h-full">
            <Image
              src={"/vector.png"}
              alt=""
              height={549}
              width={824}
              className="h-[150px] w-[150px] lg:h-[500px] lg:w-[500px] md:items-end items-center"
            />
          </div>
          <div className=" lg:w-[691px] w-full py-[50px] text-black text-center md:text-start mt-8">
            <div className="relative">
              <Image
                src={"/underline.png"}
                alt=""
                height={40}
                width={450}
                className="lg:w-[450px] w-[240px] absolute z-0 -bottom-2 md:left-1/2 left-[60%] transform -translate-x-1/2 "
              ></Image>
              <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                Work together
              </h1>
            </div>
            <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[12px] lg:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </div>
            <button className="inter font-medium lg:text-[18px] text-[12px] text-white bg-blue-400 rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[12px] gap-[10px] mt-12 sm:mt-4 md:mt-2 lg:mt-16 hover:translate-x-2 transition-all duration-200">
              Try it Now ➔
            </button>
          </div>
        </div>
      </div>
      <div className="blue h-[700px] relative z-10 md:mt-24">
        <div className="md:px-[80px] px-[20px] lg:py-[100px] py-[10px] items-center lg:flex gap-4">
          <div className=" lg:w-[691px] w-full py-[50px] text-white text-center md:text-start">
            <div className="relative">
              <Image
                src={"/underline.png"}
                alt=""
                height={40}
                width={450}
                className="lg:w-[450px] w-[240px] absolute z-0 -bottom-2 md:left-1/2 left-[60%] transform -translate-x-1/2 "
              ></Image>
              <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                Use as Extension
              </h1>
            </div>
            <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[12px] lg:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </div>
            <button className="inter font-medium lg:text-[18px] text-[12px] text-white bg-blue-400 rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[10px] gap-[10px] mt-12 sm:mt-4 md:mt-2 lg:mt-16 hover:translate-x-2 transition-all duration-200 relative z-10">
              Let&apos;s Go ➔
            </button>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-sky-200 sm:bg-sky-100 lg:h-96 h-64">
          </div>
        </div>
      </div>
      <div className="bg-white md:h-[700px] h-[520px] relative z-10 mt-6">
        <div className="md:px-[80px] px-[20px] lg:py-[100px] py-[10px] items-center lg:flex">
          <div className="lg:w-1/2 w-full flex justify-center items-center bg-sky-200 sm:bg-sky-100 lg:h-96 h-64 lg:mr-20">
          </div>
          <div className=" lg:w-[691px] w-full py-[50px] text-black text-center md:text-start">
            <div className="relative">
              <Image
                src={"/underline.png"}
                alt="underline"
                height={40}
                width={450}
                className="lg:w-[450px] w-[240px] absolute z-0 -bottom-2 lg:left-[40%] md:left-[20%] left-[60%] transform -translate-x-1/2 "
              ></Image>
              <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                Customise it to your needs
              </h1>
            </div>
            <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[12px] lg:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px] ">
              Customise the app with plugins, custom themes and multiple text
              editors (Rich Text or Markdown). Or create your own scripts and
              plugins using the Extension API.
            </div>
            <button className="inter font-medium lg:text-[18px] text-[12px] text-white bg-blue-400 rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[10px] gap-[10px] mt-12 sm:mt-4 md:mt-2 lg:mt-16 hover:translate-x-2 transition-all duration-200 relative z-10">
              Let&apos;s Go ➔
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white h-screen w-full mt-2 relative z-10">
        <div className="md:px-[80px] px-[20px] py-[20px] lg:flex-col">
          <div className="py-[50px] text-black text-center w-full">
            <div className="relative">
              <Image
                src={"/underline.png"}
                alt=""
                height={40}
                width={450}
                className="md:w-[330px] w-[120px] absolute z-0 -bottom-1 lg:left-[60%] left-[70%] transform -translate-x-1/2 "
              ></Image>
              <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                Choose Your Plan
              </h1>
            </div>
            <div className="inter font-normal lg:text-[20px] md:text-[14px] text-[12px] lg:leading-[32px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
              Whether you want to get organized, keep your personal life on
              track, or boost workplace productivity, Evernote has the right
              plan for you.
            </div>
          </div>
          <div>
            <div className="h-screen inter w-full flex items-center justify-center">
              <div className="flex md:gap-4 gap-0 cardWrapper">
                <div
                  id="card"
                  className="item bg-white bg text-black border-2 border-amber-200 h-[700px] w-[472px] md:py-[40px] py-[20px] md:px-[32px] px-[24px] rounded-md text-start md:hover:scale-105 hover:scale-90  hover:text-white card transition-transform duration-300 "
                >
                  <div className="">
                    <h1 className="font-medium md:text-[26px] text-[16px]">
                      Free
                    </h1>
                    <p className="md:mt-4 mt-2 font-bold md:text-[28px] text-[18px] text">
                      $0
                    </p>
                    <p className="md:mt-4 mt-2 font-medium md:text-[19px] text-[13px]">
                      Capture ideas and find them quickly
                    </p>
                  </div>
                  <div className="md:mt-8 mt-6 md:pb-4 pb-2">
                    <ul className="md:space-y-6 space-y-4 md:text-[16px] text-[12px] font-normal ">
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text md:text-[24px] text-[16px]" />
                        Sync unlimited devices
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text md:text-[24px] text-[16px]" />
                        10 GB Monthly uploads
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text md:text-[24px] text-[16px]" />
                        200 MB max. note size
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text text-[24px]" />
                        Customize Home dashboard and access widgets
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text text-[24px]" />
                        Connect primary Google Calendar account
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text text-[24px]" />
                        Add dates, reminders, and notifications to tasks
                      </li>
                    </ul>
                  </div>
                  <button className="md:mt-6 mt-3 lg:-mt-5 xl:mt-6 btn md:py-2 py-1 md:px-4 px-2 font-normal md:text-[19px] text-[12px] lg:text-[12px] xl:text-[19px] border-2 border-amber-200 rounded text-black">
                    Get Started
                  </button>
                </div>
                <div
                  id="card"
                  className="item bg-white  text-black border-2 border-amber-200 h-[700px]  w-[472px] md:py-[40px] py-[20px] md:px-[32px] px-[24px] rounded-md text-start md:hover:scale-105 hover:scale-90 hover:text-white card transition-transform duration-300 "
                >
                  <div className="">
                    <h1 className="font-medium md:text-[26px] text-[16px]">
                      Personal
                    </h1>
                    <p className="md:mt-4 mt-2 font-bold md:text-[28px] text-[18px] text">
                      $11.99
                    </p>
                    <p className="md:mt-4 mt-2 font-medium md:text-[19px] text-[13px]">
                      Capture ideas and find them quickly
                    </p>
                  </div>
                  <div className="md:mt-8 mt-6 md:pb-4 pb-2">
                    <ul className="md:space-y-6 space-y-4 md:text-[16px] text-[12px] font-normal ">
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text md:text-[24px] text-[16px]" />
                        Sync unlimited devices
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text md:text-[24px] text-[16px]" />
                        10 GB Monthly uploads
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text md:text-[24px] text-[16px]" />
                        200 MB max. note size
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text text-[24px]" />
                        Customize Home dashboard and access widgets
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text text-[24px]" />
                        Connect primary Google Calendar account
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text text-[24px]" />
                        Add dates, reminders, and notifications to tasks
                      </li>
                    </ul>
                  </div>
                  <button className="md:mt-6 mt-3 lg:-mt-5 xl:mt-6 btn md:py-2 py-1 md:px-4 px-2 font-normal md:text-[19px] text-[12px] lg:text-[12px] xl:text-[19px] border-2 border-amber-200 rounded text-black">
                    Get Started
                  </button>
                </div>
                <div
                  id="card"
                  className="item bg-white  text-black border-2 border-amber-200 h-[700px]  w-[472px] md:py-[40px] py-[20px] md:px-[32px] px-[24px] rounded-md text-start md:hover:scale-105 hover:scale-90 hover:text-white card transition-transform duration-300 "
                >
                  <div className="">
                    <h1 className="font-medium md:text-[26px] text-[16px]">
                      Organization
                    </h1>
                    <p className="md:mt-4 mt-2 font-bold md:text-[28px] text-[18px] text">
                      $49.99
                    </p>
                    <p className="md:mt-4 mt-2 font-medium md:text-[19px] text-[13px]">
                      Capture ideas and find them quickly
                    </p>
                  </div>
                  <div className="md:mt-8 mt-6 md:pb-4 pb-2">
                    <ul className="md:space-y-6 space-y-4 md:text-[16px] text-[12px] font-normal ">
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text md:text-[24px] text-[16px]" />
                        Sync unlimited devices
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text md:text-[24px] text-[16px]" />
                        10 GB Monthly uploads
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text md:text-[24px] text-[16px]" />
                        200 MB max. note size
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text text-[24px]" />
                        Customize Home dashboard and access widgets
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text text-[24px]" />
                        Connect primary Google Calendar account
                      </li>
                      <li className="flex gap-2 items-center">
                        <IoMdCheckmarkCircleOutline className="text text-[24px]" />
                        Add dates, reminders, and notifications to tasks
                      </li>
                    </ul>
                  </div>
                  <button className="md:mt-6 mt-3 lg:-mt-5 xl:mt-6 btn md:py-2 py-1 md:px-4 px-2 font-normal md:text-[19px] lg:text-[12px] xl:text-[19px] text-[12px] border-2 border-amber-200 rounded text-black">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="blue h-[450px] w-full mt-72 relative z-10">
        <Image
          src={"/lines.png"}
          alt={""}
          width={300}
          height={450}
          sizes="420px"
          className="md:h-[630px] h-[400px] md:-top-9 -top-4 md:pb-40 pb-0 md:w-[260px] w-[100px] absolute z-0"
        ></Image>
        <div className="md:px-[80px] px-[20px]  lg:flex-col">
          <div className="py-[50px] text-white text-center">
            <div className="relative">
              <Image
                src={"/underline.png"}
                alt=""
                height={40}
                width={450}
                className="md:w-[310px] w-[150px] absolute z-0 md:-bottom-1 -bottom-[2px] lg:left-[82%] left-[50%] transform -translate-x-1/2"
              ></Image>
              <h1 className="lg:text-[72px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                Your work, everywhere you are
              </h1>
            </div>
            <div className="inter font-normal lg:text-[20px] md:text-[14px] text-[12px] lg:leading-[32px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px] text-balance">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </div>
            <button className="inter font-normal lg:text-[18px] text-[12px] text-white bg-blue-400 rounded-md lg:leading-6 leading-[18px] md:px-8 px-2 md:py-3 py-1 gap-[10px] mt-16 sm:mt-6 md:mt-12 lg:mt-16 hover:translate-y-2 transition-all duration-200 relative z-10">
              Try TasKey ➔
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white h-[400px] relative z-10 md:mt-8 mt-2">
        <div className="md:px-[80px] px-[20px] lg:py-[20px] py-[4px] lg:flex">
          <div className=" lg:w-[691px] w-full py-[50px] text-black text-center md:text-start">
            <div className="relative">
              <Image
                src={"/underline.png"}
                alt=""
                height={40}
                width={450}
                className="lg:w-[450px] w-[240px] absolute z-0 -bottom-2 md:left-1/2 left-[60%] transform -translate-x-1/2 "
              ></Image>
              <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                100% your data
              </h1>
            </div>
            <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[12px] lg:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
              The app is open source and your notes are saved to an open format,
              so you&apos;ll always have access to them. Uses End-To-End
              Encryption (E2EE) to secure your notes and ensure no-one but
              yourself can access them.
            </div>
            <button className="inter font-medium lg:text-[18px] text-[12px] text-white bg-blue-400 rounded-md lg:leading-6 leading-[18px] md:p-[15px] p-[10px] gap-[10px] mt-16 sm:mt-4 md:mt-2 lg:mt-16 hover:translate-x-2 transition-all duration-200 relative z-10">
              Read more ➔
            </button>
          </div>
          <div className="lg:items-end items-center flex justify-center lg:justify-normal lg:w-[824px] w-full lg:h-[500px] h-full">
            <Image
              src={"/img.png"}
              alt=""
              height={549}
              width={824}
              className="h-[200px] w-[350px] lg:h-[450px] lg:w-[650px] md:items-end items-center"
            />
          </div>
        </div>
      </div>
      <div className="bg-white h-[400px] relative z-10 mt-32">
        <div className="md:px-[80px] px-[20px] py-[20px] lg:flex">
          <div className=" w-full py-[50px] text-black text-center">
            <div className="relative">
              <Image
                src={"/underline.png"}
                alt=""
                height={40}
                width={450}
                className="lg:w-[450px] w-[240px] absolute z-0 -bottom-2 md:left-1/2 left-[60%] transform -translate-x-1/2 "
              ></Image>
              <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                Our Sponsers
              </h1>
            </div>
            <div className="lg:pt-24 pt-16 flex justify-center">
              <ul className="md:flex grid sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-16 items-center lg:gap-36">
                <li>
                  <Image
                    src={"/apple.png"}
                    alt=""
                    width={50}
                    height={50}
                    className="xl:h-[60px] h-[40px] xl:w-[60px] w-[40px] "
                  ></Image>
                </li>
                <li>
                  <Image
                    src={"/microsoft.png"}
                    alt=""
                    width={220}
                    height={220}
                    className="xl:h-[80px] h-[40px] xl:w-[220px] w-[120px] "
                  ></Image>
                </li>
                <li>
                  <Image
                    src={"/slack.png"}
                    alt=""
                    width={200}
                    height={200}
                    className="xl:h-[80px] h-[40px] xl:w-[200px] w-[100px] "
                  ></Image>
                </li>
                <li>
                  <Image
                    src={"/google.png"}
                    alt=""
                    width={180}
                    height={180}
                    className="xl:h-[80px] h-[50px] xl:w-[200px] w-[100px] "
                  ></Image>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[url("/lines2.png")] blue bg-cover md:h-[630px] mt-32 md:mt-12 xl:mt-20'>
        <div className="md:px-[80px] px-[20px] py-[60px] lg:flex gap-4">
          <div className="lg:items-end items-center flex justify-center lg:justify-normal lg:w-[824px] w-full lg:h-[500px] h-full">
            <Image
              src={"/apps.png"}
              alt=""
              height={549}
              width={824}
              className="h-[200px] w-[330px] xl:h-[500px] lg:h-[450px] xl:w-[600px] lg:w-[500px] md:items-end items-center"
            />
          </div>
          <div className=" lg:w-[691px] w-full py-[50px] text-white text-center md:text-start">
            <div className="inter  xl:text-[64px] md:text-[56px] sm:text-[40px] text-[36px] font-bold inter xl:leading-[78px] md:leading-[64px] sm:leading-[48px] leading-[42px]">
              Work with Your Favorite Apps Using whitepace
            </div>
            <div className="inter font-normal lg:text-[18px] md:text-[14px] text-[12px] xl:leading-[30px] md:leading-[20px] leading-[18px] mt-4 h-[30px] md:h-[60px]">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </div>
            <button className="inter font-medium xl:text-[18px] text-[12px] bg-blue-400 rounded-md lg:leading-6 leading-[18px] px-[28px] py-[10px] gap-[10px] mt-10 sm:mt-4 md:mt-2 lg:mt-10 hover:bg-transparent hover:border-2 transition-all duration-200">
              Read more ➔
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white h-screen w-full md:mt-16 mt-0 relative z-10">
        <div className="md:px-[80px] px-[20px] py-[20px] lg:flex-col">
          <div className="py-[50px] text-black text-center w-full">
            <div className="relative">
              <Image
                src={"/underline.png"}
                alt=""
                height={40}
                width={450}
                className="md:w-[330px] w-[120px] absolute z-0 -bottom-2 left-[60%] transform -translate-x-1/2 "
              ></Image>
              <h1 className="lg:text-[64px] md:text-[56px] sm:text-[44px] text-[36px] font-bold inter lg:leading-[78px] md:leading-[64px] sm:leading-[52px] leading-[42px] relative z-10">
                What our client says
              </h1>
            </div>
          </div>
          <div>
            <div className="md:h-[530px] xl:-mt-20 -mt-6 sm:-mt-2 md:-mt-0 inter w-full sm:items-end sm:overflow-x-scroll sm:grid-flow-col lg:grid-cols-none lg:overflow-x-hidden flex items-center md:justify-start justify-center xl:justify-center">
              <div className="md:flex md:gap-4 grid grid-cols-1 gap-6 ">
                <div
                  id="clientCard"
                  className="item bg-white text-black shadow-lg xl:h-[400px] md:h-[500px] sm:h-[350px] h-[400px] xl:w-[400px]  md:w-[300px] w-[250px] md:py-[40px] py-[20px] px-[24px] rounded-md text-start hover:text-white hover:bg-sky-500 transition-color duration-300 "
                >
                  <div className="pb-6 border-b-2">
                    <h1 className="text-[62px] transition-color blueText font-bold text flex -space-x-5">
                      <BiSolidQuoteSingleLeft />
                      <BiSolidQuoteSingleLeft />
                    </h1>
                    <p className="md:mt-4 mt-2 font-medium md:text-[19px] text-[16px] ">
                      Whitepate is designed as a collaboration tool for
                      businesses that is a full project management solution.
                    </p>
                  </div>
                  <div className="flex justify-between gap-6 sm:pt-6 pt-3">
                    <div>
                      <Image
                        src={"/c1.png"}
                        alt=""
                        height={100}
                        width={100}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="md:text-[24px] text-[20px] font-medium inter bluetext">
                        Oberon Shaw, MHC
                      </h1>
                      <p className="md:text-[16px] text-[13px] leading-4">
                        Head of Talent Acquisition, North America
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="clientCard"
                  className="item bg-white text-black shadow-lg xl:h-[400px] md:h-[500px] sm:h-[350px] h-[400px] xl:w-[400px] md:w-[300px] w-[250px] md:py-[40px] py-[20px] px-[24px] rounded-md text-start hover:text-white hover:bg-sky-500 transition-color duration-300 "
                >
                  <div className="pb-6 border-b-2">
                    <h1 className="text-[62px] transition-color blueText font-bold text flex -space-x-5">
                      <BiSolidQuoteSingleLeft />
                      <BiSolidQuoteSingleLeft />
                    </h1>
                    <p className="md:mt-4 mt-2 font-medium md:text-[19px] text-[16px] ">
                      Whitepate is designed as a collaboration tool for
                      businesses that is a full project management solution.
                    </p>
                  </div>
                  <div className="flex justify-between gap-6 sm:pt-6 pt-3">
                    <div>
                      <Image
                        src={"/c2.png"}
                        alt=""
                        height={100}
                        width={100}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="md:text-[24px] text-[20px] font-medium inter bluetext">
                        Oberon Shaw, MHC
                      </h1>
                      <p className="md:text-[16px] text-[15px] leading-4">
                        Head of Talent Acquisition, North America
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  id="clientCard"
                  className="item bg-white text-black shadow-lg xl:h-[400px] md:h-[500px] h-[400px] xl:w-[400px] md:w-[300px] w-[250px] md:py-[40px] py-[20px] px-[24px] rounded-md text-start hover:text-white hover:bg-sky-500 transition-color duration-300 "
                >
                  <div className="pb-6 border-b-2">
                    <h1 className="text-[62px] transition-color blueText font-bold text flex -space-x-5">
                      <BiSolidQuoteSingleLeft />
                      <BiSolidQuoteSingleLeft />
                    </h1>
                    <p className="md:mt-4 mt-2 font-medium md:text-[19px] text-[16px] ">
                      Whitepate is designed as a collaboration tool for
                      businesses that is a full project management solution.
                    </p>
                  </div>
                  <div className="flex justify-between gap-6 sm:pt-6 pt-3">
                    <div>
                      <Image
                        src={"/c3.png"}
                        alt=""
                        height={100}
                        width={100}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h1 className="md:text-[24px] text-[20px] font-medium inter bluetext">
                        Oberon Shaw, MHC
                      </h1>
                      <p className="md:text-[16px] text-[14px] md:leading-4">
                        Head of Talent Acquisition, North America
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[650px] blue w-full flex text-start md:text-center items-center md:justify-center justify-start px-4 mt-[900px] sm:mt-[800px] md:mt-36 xl:mt-12 text-white inter">
        <div>
          <h1 className="font-semibold inter md:text-[72px] sm:text-[44px] text-[36px]">
            Try Whitespace today
          </h1>
          <p className="font-medium md:text-[28px] text-[14px] mt-4">
            Get started for free
          </p>
          <p className="font-medium md:text-[28px] text-[14px] ">
            Add your whole team as your needs grow.
          </p>
          <button className="inter font-medium md:text-[18px] text-[12px] bg-blue-400 rounded-md md:leading-6 leading-[18px] px-[28px] py-[10px] gap-[10px] mt-4 md:mt-2 lg:mt-10 hover:bg-transparent hover:border-2 transition-all duration-200">
            Try TasKey free ➔
          </button>
          <p className="font-medium md:text-[28px] text-[14px] mt-4">
            On a big team? Contact sales
          </p>
          <div className="lg:text-[64px] text-[32px] text-white flex gap-6 md:justify-center justify-start mt-6">
            <FaApple />
            <FaWindows />
            <DiAndroid />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
