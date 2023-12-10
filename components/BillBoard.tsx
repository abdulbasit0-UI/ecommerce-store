import React from "react";

import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const BillBoard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-5xl sm:max-w-xl">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
