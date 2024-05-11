import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
    <div className="w-[95vw] flex justify-around ml-[5vw] mb-[2vw] h-max">
      <Image
        src="/icon10.svg"
        alt="icon"
        height={60}
        width={60}
        className="icon1  icons"
      />
      <Image
        src="/icon2.svg"
        alt="icon"
        height={70}
        width={70}
        className="icon2 icons"
      />
      <Image
        src="/icon3.svg"
        alt="icon"
        height={60}
        width={80}
        className="icon3 icons"
      />
      <Image
        src="/icon1.svg"
        alt="icon"
        height={60}
        width={60}
        className="icon4 icons"
      />

      <div>
        <h1 className="font-sans font-bold mt-16">
          Time To<span className="text-[#FF7426]"> Unlock</span> <br />
          Your <span className="text-[#FF7426]">Potential</span>{" "}
        </h1>

        <p className="text-[#8A8A8A] my-8 text-wrap w-[40vw]">
          At Elixir we're passionate about empowering future generations.We're
          here to bridge the gap between education and opputunity and help the
          student to achieve their desired position in this competitive world
        </p>
        <a
          href="#member"
          className="hidden rounded-full bg-[#4D2C5E] px-5 py-2.5 text-sm font-medium  transition  sm:block poppins-bold text-white w-max "
        >
          Explore Now!
        </a>
      </div>
      <div>
        <Image src="/picElixir.svg" alt="Image1" height={750} width={700} />
      </div>
    </div>
    {/* violet  */}
    <div className="w-[80vw] h-[12vw] bg-[#4D2C5E] ml-[9vw] rounded-[10px] flex justify-center items-center ">
      {/* box main  */}
      <div className="w-[70vw] h-[8vw] flex items-center gap-4 mt-3">
        <div className="flex ">
          <div className="w-[5vw] h-[5vw] bg-[#71567E] rounded-[20px] flex justify-center items-center">
            <div>
              <Image src="/pic1v.svg" alt="pic" height={40} width={40} />
            </div>
          </div>
          <div className="text-white ml-2">
            <h2 className="h2">Analyze the concepts</h2>
            <p className="p text-[#dfc0ee] text-wrap w-[16vw]">
              Explore the depths of the topic,extracting valuable knowledge to
              fuel innovation
            </p>
          </div>
        </div>
        {/* part2 */}
        <div className="flex ">
          <div className="w-[5vw] h-[5vw] bg-[#71567E] rounded-[20px] flex justify-center items-center">
            <div>
              <Image src="/pic2v.svg" alt="pic" height={40} width={40} />
            </div>
          </div>
          <div className="text-white ml-2">
            <h2 className="h2">Adapt to the situation</h2>
            <p className="p text-[#dfc0ee] text-wrap w-[17vw]">
              Navigate changing landscapes with adaptability as your
              compass.Embrace flexibility to thrive in any situation
            </p>
          </div>
        </div>
        {/* part3  */}
        <div className="flex ">
          <div className="w-[5vw] h-[5vw] bg-[#71567E] rounded-[20px] flex justify-center items-center">
            <div>
              <Image src="/pic3v.svg" alt="pic" height={40} width={40} />
            </div>
          </div>
          <div className="text-white ml-2">
            <h2 className="h2">Achieve the Destination</h2>
            <p className="p text-[#dfc0ee] text-wrap w-[17vw]">
              Keep pushing until you succeed in reaching your destination.Stay
              determinated,and victory will be yours
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* courses  */}
    {/* white box  */}
    <div className="bg-white w-[100vw] p-[2vw] ">
      <Image
        src="/icon11.svg"
        alt="icon"
        height={100}
        width={100}
        className="icons iconb"
      />
      <Image
        src="/icon12.svg"
        alt="icon"
        height={100}
        width={100}
        className="icons icona"
      />

      <h2
        id="ourServices"
        className="text-black  text-center font-semibold text-[3vw] mt-5 "
      >
        Our Services
      </h2>
      <p className="text-[1vw] text-center font-medium text-[#8A8A8A] ">
        Specilized techniques to strengthen your journey
      </p>
      <div className="w-[90vw] h-[23vw] flex justify-around items-center ml-[2vw]">
        {/* <div className="w-[20vw] h-[18vw] bg-[#ffffff] drop-shadow-2xl "> */}
        {/* <div className="h-[max] w-[max] flex-row justify-center items-center ">
            <Img src="./p1.svg" alt="pd" width={200} height={200} />
            <h2>Stratergic Pathway</h2>
          </div> */}
        {/* <div/> */}

        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[25vw]">
          <img
            alt=""
            src="./p1.svg"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/10 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              {/* <time  className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white w-[max] font-semibold">
                  Strategic Pathway
                </h3>
              </a>
            </div>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[25vw]">
          <img
            alt=""
            src="./p2.svg"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/10 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              {/* <time  className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white w-[max] font-semibold">
                  Personal Guidance
                </h3>
              </a>
            </div>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[25vw]">
          <img
            alt=""
            src="./p3.svg"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/10 pt-32 sm:pt-48 lg:pt-64">
            <div className="p-4 sm:p-6">
              {/* <time  className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

              <a href="#">
                <h3 className="mt-0.5 text-lg text-white w-[max] font-semibold">
                  Structural Learning
                </h3>
              </a>
            </div>
          </div>
        </article>

        {/* <div className="w-[15vw] h-[18vw] bg-[#ACACAC]"></div>
        <div className="w-[15vw] h-[18vw] bg-[#ACACAC]"></div> */}
      </div>
    </div>

    {/* yellow box  */}
    <div id="explore" className="bg-[#FDF8EE] h-[30vw] w-[100vw] p-[30px] ">
      <div className="w-[90vw] flex">
        <div className="flex self-end w-[50vw] h-[60vw] mt-6">
          <img
            src="/pic2main.svg"
            alt="pic"
            className="absolute  main2 h-[31vw] w-[32vw]"
          />
        </div>

        <div>
          <h1 className="font-bold text-[2.5vw]">
            Premium <span className="text-[#FF7426]">Learning</span>
            <br />
            Experience
          </h1>
          {/* part1  */}
          <div className="flex mt-[15px]">
            <div className="w-[5vw] h-[5vw] bg-[#4D2C5E] rounded-[20px] flex justify-center items-center">
              <div>
                <Image src="/ypic1.svg" alt="pic" height={40} width={40} />
              </div>
            </div>
            <div className="text-white ml-2 ">
              <h2 className="text-black h2">Structured Programs</h2>
              <p className=" text-[#8A8A8A] mt-[8px]">
                Learning on the desired pathway
              </p>
            </div>
          </div>

          {/* part2  */}
          <div className="flex mt-[15px]">
            <div className="w-[5vw] h-[5vw] bg-[#4D2C5E] rounded-[20px] flex justify-center items-center">
              <div>
                <Image src="/ypic2.svg" alt="pic" height={40} width={40} />
              </div>
            </div>
            <div className="text-white ml-2 ">
              <h2 className="text-black h2">
                Personalized Learning Experience
              </h2>
              <p className=" text-[#8A8A8A] mt-[8px]">
                The courses will be personalized according to thr stream and
                cohort
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* white box  */}
    <div className="bg-white h-max w-[100vw] pt-[5vw] flex flex-col ">
      <Image
        src="/design1Elixir.svg"
        alt="design"
        height={300}
        width={300}
        className="icons"
      />
      <h2 className="text-black  text-center font-semibold text-[2.5vw] ">
        What Students's Say{" "}
      </h2>
      <p className="text-[1vw] text-center font-medium text-[#8A8A8A] ">
        Discover the impact we make{" "}
      </p>

      <div className="  w-[100vw] h-[20vw] flex justify-around items-center  ">
        <span className="flex justify-between items-center w-[72vw]">
          {/* part 1  */}
          <div className="bg-white w-[23vw] h-[13vw] drop-shadow-2xl">
            <p className="text-[1vw] text-wrap  font-medium text-[#8A8A8A] m-[11px]">
              “Thanks to this training, I've overcome my confusion with
              embedded systems. Now, I'm at ease handling microcontrollers and
              programming embedded devices. It's much simpler than learning a
              new language.”
            </p>
            <div className="flex ml-[1vw]">
              <Image
                src="/profile1.svg"
                alt="profile"
                height={40}
                width={40}
              />
              <span className="ml-[10px]">
                <h2 className="font-medium">Finlay Kirk</h2>
                <p className="text-[#8A8A8A]">Web Developer</p>
              </span>
            </div>
          </div>
          {/* part 2  */}
          <div className="bg-white w-[23vw] h-[13vw]  drop-shadow-2xl">
            <p className="text-[1vw] text-wrap  font-medium text-[#8A8A8A] m-[11px]">
              “This course has jump-started my entry into ev technology, a
              field with lasting relevance. The knowledgeable professors made
              grasping the material effortless, leaving me ready to contribute
              to the green revolution.”
            </p>
            <div className="flex ml-[1vw]">
              <Image
                src="/profile2.svg"
                alt="profile"
                height={40}
                width={40}
              />
              <span className="ml-[10px]">
                <h2 className="font-medium">Danette P.Cervants</h2>
                <p className="text-[#8A8A8A]">Web Design</p>
              </span>
            </div>
          </div>
          {/* part 3  */}
          <div className="bg-white w-[23vw] h-[13vw] drop-shadow-2xl">
            <p className="text-[1vw] text-wrap  font-medium text-[#8A8A8A] m-[12px] ">
              “The course has kickstarted my journey into electric vehicle
              tech, with professors who made learning seamless, preparing me
              for the green transportation revolution.”
            </p>
            <div className="flex ml-[1vw]">
              <Image
                src="/profile3.svg"
                alt="profile"
                height={40}
                width={40}
              />
              <span className="ml-[10px]" id="member">
                <h2 className="font-medium">Clara R. Altman</h2>
                <p className="text-[#8A8A8A]">UI&UX Design</p>
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
        className="icons d2"
      />

      <div className="w-[100vw] h-[max] " >
        {/* <span className="">
        <h2 className="text-black  text-center font-semibold text-[3vw] mt-5">
        Subscibe to our newsletter
      </h2>
      <p className="text-[1vw] text-center font-medium text-[#8A8A8A] ">
        Lorem Ipsum is simply dummy text of the printing.
      </p>
        <Image src="/finalbox.svg" alt="pic" height={700} width={1100}  className="m-[15vw] my-6 absolute "/>
        </span> */}
        <div className="relative flex justify-center" >
          <Image src="/finalbox.svg" alt="pic" height={700} width={1100} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white font-semibold text-[2.5vw] mt-5">
              Become a member at Elixir
            </h2>
            <p className="text-[1vw] font-medium text-[#ffffff]">
              Receive regular updates from Elixir
            </p>
            <div
              className=" h-[3vw] w-[25vw] ml-[3.5vw] mt-[15px] rounded-full flex justify-center
             items-center px-[5px]"
            >
              {/* <p className="text-[1.2vw] font-medium text-[#8A8A8A] ml-[1vw]">
               → 
              </p> */}
              {/* <input type="mail" className="text-[1vw] font-medium text-[#8A8A8A] ml-[1vw] outline-none" placeholder="Mail us to join"/> */}
                <Link href="/Contact">
              <div className="bg-[#FF7426] px-[30px] h-[2.5vw] flex items-center rounded-full text-white w-[130px] ">
                  <button className="text-center">Subscibe</button>
              </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}
