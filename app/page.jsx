import Image from "next/image";
import Link from "next/link";
import Partners from "./_components/Partners";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* <div className="h-[10vh]" ></div> */}
      <div className="w-[95vw] flex flex-col-reverse md:flex-row md:justify-around ml-[5vw] mb-[2vw] h-max  ">
        
        <Image
          src="/icon10.svg"
          alt="icon"
          height={60}
          width={60}
          className="icon1  icons md:block hidden"
        />
        <Image
          src="/icon2.svg"
          alt="icon"
          height={70}
          width={70}
          className="icon2 icons md:block hidden"
        />
        <Image
          src="/icon3.svg"
          alt="icon"
          height={60}
          width={80}
          className="icon3 icons md:block hidden"
        />
        <Image
          src="/icon1.svg"
          alt="icon"
          height={60}
          width={60}
          className="icon4 icons md:block hidden"
        />

        <div className="mb-10">
          {/* <h1 className="font-sans font-bold md:mt-20 md:text-[5rem] text-[2rem]">
            Time To<span className="text-[#FF7426]"> Unlock</span> <br />
            Your <span className="text-[#FF7426]">Potential</span>{" "}
          </h1> */}
          <h1 className="font-sans font-bold md:mt-20 md:text-[4.5rem] text-[2rem]">
            Be The <span className="text-[#FF7426]">Change</span> <br />
            To <span className="text-[#FF7426]">Change</span>{" "}
          </h1>
          <p className="text-[#8A8A8A] my-6 text-wrap md:w-[40vw] h-max md:h-max">
            At Elixir we're passionate about empowering future generations.We're
            here to bridge the gap between education and oppurtunity and help the
            students to achieve their desired position in this competitive world
          </p>
          <a
            href="/Programs"
            className="hidden md:block rounded-full bg-[#4D2C5E] px-5 py-2.5 text-sm font-medium  transition  sm:block poppins-bold text-white w-max "
          >
            Explore Now!
          </a>
          <a
            href="/jotform"
            className="block md:hidden rounded-full bg-[#4D2C5E] px-5 py-2.5 text-sm font-medium  transition  sm:block poppins-bold text-white w-max "
          >
            Enroll Now !
          </a>
        </div>
        <div>
          <Image src="/picElixir.svg" alt='blur' height={750} width={700} blurDataURL="/picElixir.svg" />
        </div>
      </div>
      {/* violet  */}
      <div className="h-max mx-auto py-12 w-[90%] md:w-[80vw] md:h-[12vw] bg-[#4D2C5E] md:ml-[9vw] rounded-[10px] flex justify-center  md:flex md:justify-center md:items-center">
        {/* box main */}
        <div className="w-[70vw] h-max flex md:flex-row flex-col items-center gap-4 mt-3">
          {/* part 1 */}
          <div className="flex items-start">
            <div className="p-[1rem] bg-[#71567E] rounded-[20px] flex justify-center items-center">
              <Image
                src="/pic1v.svg"
                alt="pic"
                height={40}
                width={40}
                className="md:w-[90%] m-auto md:h-[3rem] w-[6rem]"
              />
            </div>
            <div className="text-white ml-2">
              <h2 className="h2">Analyze the concepts</h2>
              <p className="p text-[#dfc0ee] text-wrap md:w-[16vw]">
                Explore the depths of the topic, extracting valuable knowledge
                to fuel innovation
              </p>
            </div>
          </div>
          {/* part 2 */}
          <div className="flex items-start">
            <div className="p-[1rem] bg-[#71567E] rounded-[20px] flex justify-center items-center">
              <Image
                src="/pic2v.svg"
                alt="pic"
                height={40}
                width={40}
                className="md:w-[90%] m-auto md:h-[3rem]  w-[8rem]"
              />
            </div>
            <div className="text-white ml-2">
              <h2 className="h2">Adapt to the situation</h2>
              <p className="p text-[#dfc0ee] text-wrap md:w-[16vw]">
                Navigate changing landscapes with adaptability as your compass.
                Embrace flexibility to thrive in any situation
              </p>
            </div>
          </div>
          {/* part 3 */}
          <div className="flex items-start">
            <div className="p-[1rem] bg-[#71567E] rounded-[20px] flex justify-center items-center">
              <Image
                src="/pic3v.svg"
                alt="pic"
                height={40}
                width={40}
                className="md:w-[90%] m-auto md:h-[3rem] w-[8rem]"
              />
            </div>
            <div className="text-white ml-2">
              <h2 className="h2">Achieve the Destination</h2>
              <p className="p text-[#dfc0ee] text-wrap md:w-[16vw]">
                Keep pushing until you succeed in reaching your destination.
                Stay determined, and victory will be yours
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* courses  */}
      {/* white box  */}
      <div className="bg-white w-[100vw] p-[2rem] ">
        <Image
          src="/icon11.svg"
          alt="icon"
          height={100}
          width={100}
          className="icons iconb  w-[3rem] md:w-[6rem]"
        />
        <Image
          src="/icon12.svg"
          alt="icon"
          height={100}
          width={100}
          className="icons icona w-[3rem] md:w-[6rem]"
        />

        <h2
          id="ourServices"
          className="text-black  text-center font-semibold md:text-[3vw] text-[2rem] mt-5 "
        >
          Our Services
        </h2>
        <p className="text-[0.8rem] md:text-[1vw] mb-[2rem] text-center font-medium text-[#8A8A8A] ">
          Specilized techniques to strengthen your journey
        </p>
        <div className="w-[100vw] md:w-[90vw] md:ml-10 md:h-[23vw] h-max flex-row md:flex justify-around items-center ">
          {/* <div className="w-[20vw] h-[18vw] bg-[#ffffff] drop-shadow-2xl mb-4 "> */}
          {/* <div className="h-[max] w-[max] flex-row justify-center items-center ">
            <Img src="./p1.svg" alt="pd" width={200} height={200} />
            <h2>Stratergic Pathway</h2>
          </div> */}
          {/* <div/> */}

          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg md:w-[25vw] w-[80%] my-4">
            <img
              alt=""
              src="./p1.svg"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/10 pt-32 sm:pt-48 lg:pt-64 ">
              <div className="p-4 sm:p-6 ">
                {/* <time  className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                <h3 className="mt-0.5 text-lg text-white w-[max] font-semibold">
                  Strategic Pathway
                </h3>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg md:w-[25vw] w-[80%] my-4">
            <img
              alt=""
              src="./p2.svg"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/10 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                {/* <time  className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                <h3 className="mt-0.5 text-lg text-white w-[max] font-semibold">
                  Personal Guidance
                </h3>
              </div>
            </div>
          </article>
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg md:w-[25vw] w-[80%] my-4">
            <img
              alt=""
              src="./p3.svg"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/10 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                {/* <time  className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                <h3 className="mt-0.5 text-lg text-white w-[max] font-semibold">
                  Structural Learning
                </h3>
              </div>
            </div>
          </article>

          {/* <div className="w-[15vw] h-[18vw] bg-[#ACACAC]"></div>
        <div className="w-[15vw] h-[18vw] bg-[#ACACAC]"></div> */}
        </div>
      </div>

      {/* yellow box  */}
      <div
        id="explore"
        className="bg-[#FDF8EE] md:h-[30vw] w-[100vw] p-[30px] h-max flex justify-center "
      >
        <div className="w-[90vw] md:flex md:flex-row-reverse">
          <div className="flex mt-6">
            <Image
              src="/pic2main.svg"
              alt="pic"
              width={100}
              height={100}
              className="md:absolute main2 md:h-[31vw] md:w-[32vw] w-[20rem]  "
            />
          </div>
          <div>
            <h1 className="font-bold text-[1.5rem] mt-10 md:mt-0 md:text-[2.5vw]">
              Premium <span className="text-[#FF7426]">Learning</span>
              <br />
              Experience
            </h1>
            {/* part1  */}
            <div className="flex mt-[15px]">
              <div className="h-[6rem] w-[7rem] md:h-[5.5rem] md:w-[5.5rem] bg-[#4D2C5E] rounded-[20px] flex justify-center items-center">
              <div>
                  <Image
                    src="/ypic2.svg"
                    alt="pic"
                    height={40}
                    width={40}
                    className="md:w-[100%] m-auto w-[100%]"
                  />
                </div>
              </div>
              <div className="text-white ml-2">
                <h2 className="text-black h2">Structured Programs</h2>
                <p className="text-[#8A8A8A] mt-[8px]">
                  Learning on the desired pathway
                </p>
              </div>
            </div>

            {/* part2  */}
            <div className="flex mt-[15px]">
              <div className="w-[15rem] h-[6rem] md:h-[5.5rem] md:w-[5.5rem] bg-[#4D2C5E] rounded-[20px] flex justify-center items-center">
              <div>
                  <Image
                    src="/ypic1.svg"
                    alt="pic"
                    height={40}
                    width={40}
                    className="md:w-[90%]  m-auto w-[80%]"
                  />
                </div>
              </div>
              <div className="text-white ml-2">
                <h2 className="text-black h2">
                  Personalized Learning Experience
                </h2>
                <p className="text-[#8A8A8A] mt-[8px]">
                  The courses will be personalized according to the stream and
                  cohort
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Partners/>
      
      {/* white box  */}
      <div className="bg-white w-[100vw] pt-[5vw] flex flex-col max-h-max">
        <Image
          src="/design1Elixir.svg"
          alt="design"
          height={300}
          width={300}
          className="icons hidden md:block"
        />
        <h2 className="text-black  text-center font-semibold md:text-[3vw] text-[1.5rem] h-max">
          What Students Required{" "}
        </h2>
        <p className="text-[1rem] md:text-[1vw] text-center font-medium text-[#8A8A8A] h-max ">
          The actual need of the students{" "}
        </p>

        <div className="  w-[100vw] md:h-[20vw] flex justify-around items-center  md:mt-0 max-h-max">
          <span className="md:flex md:flex-row flex flex-col justify-between items-center w-[70rem] ">
            {/* part 1  */}
            <div className="bg-white md:w-[22rem] md:h-max w-[90%] drop-shadow-2xl mb-4 pb-2">
              <p className="text-[0.6rem] md:text-[1rem] text-wrap  font-medium text-[#8A8A8A] m-[11px]">
                “I need more hands-on projects, additional resources for advanced topics, and increased opportunities for industry internships to gain practical experience and knowledge.”
              </p>
              <div className="flex ml-[1vw]">
                <Image
                  src="/1.png"
                  alt="profile"
                  height={40}
                  width={40}
                />
                <span className="ml-[10px]">
                  <h2 className="font-medium">Rohit</h2>
                  <p className="text-[#8A8A8A]">Embedded systems</p>
                </span>
              </div>
            </div>
            {/* part 2  */}
            <div className="bg-white md:w-[22rem] md:h-max w-[90%] drop-shadow-2xl mb-4 pb-2">
              <p className="text-[0.6rem] md:text-[1rem] text-wrap  font-medium text-[#8A8A8A] m-[11px]">
                “I require access to more detailed simulations, advanced CAD tools for design practice as well as guidance on emerging technologies and trends in VLSI design.”
              </p>
              <div className="flex ml-[1vw]">
                <Image
                  src="/2.png"
                  alt="profile"
                  height={40}
                  width={40}
                />
                <span className="ml-[10px]">
                  <h2 className="font-medium">Dharshini</h2>
                  <p className="text-[#8A8A8A]">VLSI</p>
                </span>
              </div>
            </div>
            {/* part 3  */}
            <div className="bg-white  md:w-[22rem] md:h-max w-[90%] drop-shadow-2xl mb-4 pb-2 ">
              <p className="text-[0.6rem] md:text-[1rem] text-wrap font-medium text-[#8A8A8A] m-[11px]">
                “I need more hands-on programming experience, access to advanced robotic resources as well guidance on the latest advancements in AI and machine learning integration with robotics.”
              </p>
              <div className="flex ml-[1vw]">
                <Image
                  src="/3.png"
                  alt="profile"
                  height={40}
                  width={40}
                />
                <span className="ml-[10px]" id="member">
                  <h2 className="font-medium">Prithiv</h2>
                  <p className="text-[#8A8A8A]">Robotics</p>
                </span>
              </div>
            </div>
          </span>
        </div>
        <Image
          src="/design2Elixir.svg"
          alt="design"
          height={300}
          width={300}
          className="icons d2 hidden md:block" 
        />

        <div className="w-[100vw] h-[max] ">
          {/* <span className="">
        <h2 className="text-black  text-center font-semibold text-[3vw] mt-5">
        Subscibe to our newsletter
      </h2>
      <p className="text-[1vw] text-center font-medium text-[#8A8A8A] ">
        Lorem Ipsum is simply dummy text of the printing.
      </p>
        <Image src="/finalbox.svg" alt="pic" height={700} width={1100}  className="m-[15vw] my-6 absolute "/>
        </span> */}
          <div className="relative flex justify-center  ">
            <Image src="/finalbox.svg" alt="pic" height={700} width={1100} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex-col justify-between">
              <h2 className="text-white font-semibold md:text-[2.5vw] text-[3vw] mt-5">
                Become a member at Elixir
              </h2>
              <p className="md:text-[1vw] text-[2vw] font-medium text-[#ffffff]">
                Receive regular updates from Elixir
              </p>
              {/* <div
                className=" h-[3vw] md:w-[25vw] mt-[15px] rounded-full flex justify-center
             items-center px-[5px]"
              > */}
                <Link href="/Contact">
                  <div className="bg-[#FF7426] md:px-[10rem] md:h-[2.5vw] md:w-[130px] flex items-center justify-center rounded-full text-white px-[0.7rem] w-[8rem] m-auto md:mt-5 mt-2">
                    <button className="text-center font-medium md:font-semibold md:text-[1.5rem]  uppercase ">Subscibe</button>
                  </div>
                </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
