import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump } from "@fortawesome/free-solid-svg-icons/faGasPump";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons/faBitcoinSign";

async function getEtherPrice() {
  const res = await fetch(`https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`)
  return res.json()
}

async function getGasPrice() {
  const res = await fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY}`)
  return res.json()
}

const TopBar = async () => {

  const [etherPriceData, gasPriceData] = await Promise.all([getEtherPrice(), getGasPrice()])
  const etherPrice = parseFloat(etherPriceData.result.ethusd);
  const gasPrice = parseFloat(gasPriceData.result.ProposeGasPrice);

  return (
    <div className="w-full h-[50px] bg-white border-b px-10 shadow-lg hidden sm:flex">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto h-full w-full flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <p className="hidden text-gray-400 text sm:block">
            ETH Price:{" "}
            <a href="#" className="text text-[#0784C3]">
              ${etherPrice.toFixed(2)}
            </a>
          </p>
          <div className="flex items-center justify-center hidden gap-2 sm:flex text-gray-400">
            <FontAwesomeIcon icon={faGasPump} size="1x" />
            <p>
              Gas:{" "}
              <a href="#" className="text text-[#0784C3]">
                {gasPrice} Gwei
              </a>{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <ul className="flex items-center justify-center gap-3">
            <li className="hidden rounded-lg hover:bg-gray-300 sm:block">
              <FontAwesomeIcon icon={faBitcoinSign} size="1x" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

