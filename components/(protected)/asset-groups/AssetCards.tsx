import React from "react";
import Image from "next/image";
import Link from "next/link";

const AssetCards = ({
  asset,
  cycleLength,
  groupMonthlyContribution,
}: {
  asset: string;
  cycleLength: number;
  groupMonthlyContribution: number;
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="shadow-xl relative w-full bg-turquoise-100 rounded-3xl px-4 py-4 md:py-4 overflow-hidden">
        <div className="flex flex-col h-full gap-2">
          <h2 className="font-sans text-medium font-bold text-lg text-turquoise-900 tracking-wide">
            {asset} Asset Group
          </h2>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <div
                className={`flex justify-center items-center bg-pinklet-200 w-[35px] h-[35px] rounded-full`}
              >
                <Image
                  src="/calendar.svg"
                  height={20}
                  width={20}
                  alt="calendar"
                />
              </div>
              <div className="flex justify-between w-4/5">
                <p className="font-sans text-turquoise-900 text-base">
                  Cycle Length:
                </p>
                <p className="font-sans text-turquoise-900 text-base font-bold">
                  {cycleLength} Months
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <div
                className={`flex justify-center items-center bg-pinklet-200 w-[35px] h-[35px] rounded-full`}
              >
                <Image
                  src="/birth_companion.png"
                  height={20}
                  width={20}
                  alt="calendar"
                />
              </div>
              <div className="flex justify-between w-4/5">
                <p className="font-sans text-turquoise-900 text-base">
                  Group Contribution:
                </p>
                <p className="font-sans text-turquoise-900 text-base font-bold">
                  R {groupMonthlyContribution}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Link
              className="flex items-center mx-auto bg-turquoise-500 hover:bg-turqoise-700 text-white rounded-2xl w-[140px] h-[30px]"
              href={`/asset-groups/details?asset=${asset}`}
            >
              <p className="text-center w-full text-base">More Details</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetCards;
