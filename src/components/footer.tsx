import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const links = [
  {
    title: "Company",
    subRoutes: ["About Us", "Brand Assets", "Careers", "Terms & Privacy", "Bug Bounty"]
  },
  {
    title: "Community",
    subRoutes: ["API Documentation", "Knowledge Base", "Network Status", "Newsletters", "Comment"]
  },
  {
    title: "Products & Services",
    subRoutes: ["Advertise", "API Plans", "Priority Support", "Blockscan", "Blockscan Chat"]
  }
]

const Footer = () => (
  <div className="w-full px-20 bg-[#eaedf1]">
    <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px] py-[50px]  px-5 md:px-0">
      <div className="col-span-2">
        <div className="flex items-center gap-2 justify center">
          <Image
            alt="img"
            src="https://etherscan.io/images/svg/brands/ethereum-original.svg"
            className="h-10 cursor-pointer"
            height={50}
            width={30}
          />
          <h1 className="text-lg font-bold text">Powered by Ethereum</h1>
        </div>
        <h3 className="py-2 text-[#6D737A]">
          Etherscan is a Block Explorer and Analytics Platform for Ethereum,<br /> a decentralized smart contracts platform.
        </h3>

        <Image alt="banner" src="https://etherscan.io/images/map.png" width={300} height={200} />

        <div className="flex gap-4 py-3">
          <div className="p-4 bg-[black] rounded-xl">
            <FaFacebookF size={12} style={{ color: "white" }} />
          </div>
          <div className="p-4 bg-[black] rounded-xl">
            <FaDribbble size={12} style={{ color: "white" }} />
          </div>
          <div className="p-4 bg-[black] rounded-xl">
            <FaLinkedinIn size={12} style={{ color: "white" }} />
          </div>
          <div className="p-4 bg-[black] rounded-xl">
            <FaInstagram size={12} style={{ color: "white" }} />
          </div>
          <div className="p-4 bg-[black] rounded-xl">
            <FaBehance size={12} style={{ color: "white" }} />
          </div>
        </div>
      </div>
      {
        links.map(link => (
          <div key={link.title}>
            <h3 className="text-2xl font-bold">{link.title}</h3>
            <ul className="py-4 text-[#6D737A]">
              {link.subRoutes.map(link => (
                <li key={link} className="py-2 hover:text-[#0784C3] cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>
    <div className="border border-b"></div>
    <div className="w-full">
      <h3 className="py-5 text-center">
        Etherscan &copy; 2024
      </h3>
    </div>
  </div>
);

export default Footer;
