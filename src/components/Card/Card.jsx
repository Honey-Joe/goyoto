import { card1, card2, star } from "../../assets/image";
import { MessageCircle, User } from "lucide-react";
import Aos, { AOS } from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Card = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  return (
    <>
      <div className="2xl:container">
        <div className="w-[80%] mx-auto grid grid-cols-1 gap-28 pb-11">
          <div></div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-center gap-1">
              <img src={star} alt="star" />
              <p className="font-[Regular] text-5xl text-[#363539]">
                Get Ready For New Experience
              </p>
            </div>
            <div className="flex justify-center">
              <p className="font-[Urbanist] font-black text-6xl text-[#363539]">
                Latest News & Articles
              </p>
            </div>
          </div>
          <div  className="grid grid-cols-1 lg:grid-cols-2 group gap-10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={card2}
                alt="card1"
                className="rounded-xl transition group-hover:scale-110 h-full"
              />
            </div>
            <div className="flex flex-col items-start gap-5 ">
              <div className="flex gap-3 justify-center items-center">
                <div className="rounded-full py-3 px-4" id="mar">
                  <p className="font-[Urbanist] font-black text-xl text-center text-white">
                    18
                    <br />
                    MAR
                  </p>
                </div>
                <div>
                  <p className="font-[Urbanist] font-bold text-[40px] text-[#262524] leading-none">
                    Beach Days, Long Hikes, And
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-[#E6F0FF] px-5 py-3 rounded-full">
                <div className="flex items-center gap-3">
                  <div>
                    <User className="w-[15px]" />
                  </div>
                  <div>
                    <p className="font-[Urbanist] font-bold text-[13px]">
                      {" "}
                      By Emma Mark
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <MessageCircle className="w-[15px]" />
                  </div>
                  <div>
                    <p className="font-[Urbanist] font-bold text-[13px]">
                      1 Comments
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-[Urbanist] font-medium text-[18px] text-[#444]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  voluptatibus velit corporis hic! Accusantium reiciendis
                  blanditiis aut na
                </p>
              </div>
              <div className="group">
                <button class="group relative px-10 py-4 overflow-hidden rounded-full bg-black text-lg shadow">
                  <div
                    class="absolute inset-0 h-full  transition-all duration-[250ms] ease-out group-hover:h-0"
                    id="butt"
                  ></div>
                  <span class="relative text-white font-bold font-[Urbanist]">
                    <div className="group flex justify-center">
                      <p className="group-hover:animate-spin-slow">R</p>
                      <p className="group-hover:animate-spin-slow">e</p>
                      <p className="group-hover:animate-spin-slow">a</p>
                      <p className="group-hover:animate-spin-slow">d</p>
                      <p className="group-hover:animate-spin-slow"> </p>
                      <p className="group-hover:animate-spin-slow">M</p>
                      <p className="group-hover:animate-spin-slow">o</p>
                      <p className="group-hover:animate-spin-slow">r</p>
                      <p className="group-hover:animate-spin-slow">e</p>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 group gap-10">
            <div className="overflow-hidden rounded-xl order-2">
              <img
                src={card1}
                alt="card1"
                className="rounded-xl transition group-hover:scale-110 h-full"
              />
            </div>
            <div className="flex flex-col items-start gap-5 order-1">
              <div className="flex gap-3 justify-center items-center">
                <div className="rounded-full py-3 px-4" id="mar">
                  <p className="font-[Urbanist] font-black text-xl text-center text-white">
                    28
                    <br />
                    MAR
                  </p>
                </div>
                <div>
                  <p className="font-[Urbanist] font-bold text-[40px] text-[#262524] leading-none">
                  Island Hopping And Weather Tips
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-[#E6F0FF] px-5 py-3 rounded-full">
                <div className="flex items-center gap-3">
                  <div>
                    <User className="w-[15px]" />
                  </div>
                  <div>
                    <p className="font-[Urbanist] font-bold text-[13px]">
                      {" "}
                      By Emma Mark
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <MessageCircle className="w-[15px]" />
                  </div>
                  <div>
                    <p className="font-[Urbanist] font-bold text-[13px]">
                      0 Comments
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-[Urbanist] font-medium text-[18px] text-[#444]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  voluptatibus velit corporis hic! Accusantium reiciendis
                  blanditiis aut na
                </p>
              </div>
              <div className="group">
                <button class="group relative px-10 py-4 overflow-hidden rounded-full bg-black text-lg shadow">
                  <div
                    class="absolute inset-0 h-full  transition-all duration-[250ms] ease-out group-hover:h-0"
                    id="butt"
                  ></div>
                  <span class="relative text-white font-bold font-[Urbanist]">
                    <div className="group flex justify-center">
                      <p className="group-hover:animate-spin-slow">R</p>
                      <p className="group-hover:animate-spin-slow">e</p>
                      <p className="group-hover:animate-spin-slow">a</p>
                      <p className="group-hover:animate-spin-slow">d</p>
                      <p className="group-hover:animate-spin-slow"> </p>
                      <p className="group-hover:animate-spin-slow">M</p>
                      <p className="group-hover:animate-spin-slow">o</p>
                      <p className="group-hover:animate-spin-slow">r</p>
                      <p className="group-hover:animate-spin-slow">e</p>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div data-aos="fade-up"  className="grid grid-cols-1 lg:grid-cols-2 group gap-10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={card2}
                alt="card1"
                className="rounded-xl transition group-hover:scale-110 h-full"
              />
            </div>
            <div className="flex flex-col items-start gap-5 ">
              <div className="flex gap-3 justify-center items-center">
                <div className="rounded-full py-3 px-4" id="mar">
                  <p className="font-[Urbanist] font-black text-xl text-center text-white">
                    18
                    <br />
                    MAR
                  </p>
                </div>
                <div>
                  <p className="font-[Urbanist] font-bold text-[40px] text-[#262524] leading-none">
                    Beach Days, Long Hikes, And
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-[#E6F0FF] px-5 py-3 rounded-full">
                <div className="flex items-center gap-3">
                  <div>
                    <User className="w-[15px]" />
                  </div>
                  <div>
                    <p className="font-[Urbanist] font-bold text-[13px]">
                      {" "}
                      By Emma Mark
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <MessageCircle className="w-[15px]" />
                  </div>
                  <div>
                    <p className="font-[Urbanist] font-bold text-[13px]">
                      1 Comments
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-[Urbanist] font-medium text-[18px] text-[#444]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  voluptatibus velit corporis hic! Accusantium reiciendis
                  blanditiis aut na
                </p>
              </div>
              <div className="group">
                <button class="group relative px-10 py-4 overflow-hidden rounded-full bg-black text-lg shadow">
                  <div
                    class="absolute inset-0 h-full  transition-all duration-[250ms] ease-out group-hover:h-0"
                    id="butt"
                  ></div>
                  <span class="relative text-white font-bold font-[Urbanist]">
                    <div className="group flex justify-center">
                      <p className="group-hover:animate-spin-slow">R</p>
                      <p className="group-hover:animate-spin-slow">e</p>
                      <p className="group-hover:animate-spin-slow">a</p>
                      <p className="group-hover:animate-spin-slow">d</p>
                      <p className="group-hover:animate-spin-slow"> </p>
                      <p className="group-hover:animate-spin-slow">M</p>
                      <p className="group-hover:animate-spin-slow">o</p>
                      <p className="group-hover:animate-spin-slow">r</p>
                      <p className="group-hover:animate-spin-slow">e</p>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-2 group gap-10">
            <div className="overflow-hidden rounded-xl order-2">
              <img
                src={card1}
                alt="card1"
                className="rounded-xl transition group-hover:scale-110 h-full"
              />
            </div>
            <div className="flex flex-col items-start gap-5 order-1">
              <div className="flex gap-3 justify-center items-center">
                <div className="rounded-full py-3 px-4" id="mar">
                  <p className="font-[Urbanist] font-black text-xl text-center text-white">
                    28
                    <br />
                    MAR
                  </p>
                </div>
                <div>
                  <p className="font-[Urbanist] font-bold text-[40px] text-[#262524] leading-none">
                  Island Hopping And Weather Tips
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-[#E6F0FF] px-5 py-3 rounded-full">
                <div className="flex items-center gap-3">
                  <div>
                    <User className="w-[15px]" />
                  </div>
                  <div>
                    <p className="font-[Urbanist] font-bold text-[13px]">
                      {" "}
                      By Emma Mark
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <MessageCircle className="w-[15px]" />
                  </div>
                  <div>
                    <p className="font-[Urbanist] font-bold text-[13px]">
                      0 Comments
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-[Urbanist] font-medium text-[18px] text-[#444]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  voluptatibus velit corporis hic! Accusantium reiciendis
                  blanditiis aut na
                </p>
              </div>
              <div className="group">
                <button class="group relative px-10 py-4 overflow-hidden rounded-full bg-black text-lg shadow">
                  <div
                    class="absolute inset-0 h-full  transition-all duration-[250ms] ease-out group-hover:h-0"
                    id="butt"
                  ></div>
                  <span class="relative text-white font-bold font-[Urbanist]">
                    <div className="group flex justify-center">
                      <p className="group-hover:animate-spin-slow">R</p>
                      <p className="group-hover:animate-spin-slow">e</p>
                      <p className="group-hover:animate-spin-slow">a</p>
                      <p className="group-hover:animate-spin-slow">d</p>
                      <p className="group-hover:animate-spin-slow"> </p>
                      <p className="group-hover:animate-spin-slow">M</p>
                      <p className="group-hover:animate-spin-slow">o</p>
                      <p className="group-hover:animate-spin-slow">r</p>
                      <p className="group-hover:animate-spin-slow">e</p>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
