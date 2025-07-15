import React from "react";
import Btn_Static from "../Btn_Static";
import type { BtnStatus } from "../types";

interface GradGR400LProps {
  label?: string;
  initialStatus?: BtnStatus;
  onClick?: () => void;
}

const Grad_GR400_L = ({
  label = "Btn",
  initialStatus = "default",
  onClick,
}: GradGR400LProps) => {
  return (
    <div
      className={`
<<<<<<< HEAD
        w-[23.4375rem] h-[6rem]
        pt-2 pr-4 pb-9 
        {/*pt-2 pr-4 pb-9 pl-4*/}
=======
        flex justify-center
        w-full h-[6rem]
        pt-2 pr-4 pb-9 pl-4
>>>>>>> c7a4d5a949ba294c9ddac8a50f2f0fb04fa437ba
        gap-[0.625rem]
        bg-gradient-to-b
        from-[rgba(252,252,255,0)] via-[rgba(252,252,255,0.8)] to-[#FCFCFF]
      `}
    >
<<<<<<< HEAD
      
      <Btn_Static kind="GR400" size="L" label={label} shadow="shadow-ds100" />
=======
      <Btn_Static
        kind="GR400"
        size="L"
        label={label}
        shadow="shadow-ds100"
        initialStatus={initialStatus}
        onClick={onClick}
      />
>>>>>>> c7a4d5a949ba294c9ddac8a50f2f0fb04fa437ba
    </div>
  );
};

export default Grad_GR400_L;


