import React from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import Image from "next/image";

interface Props {
  poetName: string;
  biography: string;
  toggle: () => void;
  isOpen: boolean;
}

const StoicAccordionItem: React.FC<Props> = ({
  poetName,
  biography,
  toggle,
  isOpen,
}) => {
  return (
    <div className="mb-2 border rounded-2xl">
      <div
        className="flex justify-between items-center   cursor-pointer p-4"
        onClick={toggle}
      >
        <p className="font-bold ">{poetName}</p>

        <div className="text-[30px]">{isOpen ? <FaMinus /> : <FaPlus />}</div>
      </div>
      <Collapse
        isOpened={isOpen}
        className="flex flex-col justify-center items-center text-center"
      >
        <div className="flex justify-center items-center w-full">
          <Image
            src={`/image/${poetName.toLowerCase()}.jpg`}
            alt={poetName}
            width={100}
            height={100}
            className="rounded-3xl"
          />
        </div>
        <div className="p-4">{biography}</div>
      </Collapse>
    </div>
  );
};

export default StoicAccordionItem;
