import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RemovableFilter(props: { text: string }) {
  const [close, setClose] = useState(false);
  return (
    <AnimatePresence>
      {!close && (
        <motion.button
          title={`remove ${props.text}`}
          className={`flex gap-2 items-center bg-blue text-white text-sm rounded-full overflow-hidden`}
          onClick={() => setClose(true)}
          initial={{ width: 0, height: 0 }}
          animate={{ width: "auto", height: "auto" }}
          exit={{ width: 0, height: 0 }}
        >
          {/* padding on child elements fixes framer motion bug */}
          <p className="whitespace-nowrap py-2 pl-4">{props.text}</p>
          <Image
            src="/images/close-x-svgrepo-com-white.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden
          />
          <div className="pr-2" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function FilterControlPanel(props: {
  filters?: string[];
  headingStart: string;
  headingEnd: string;
}) {
  const [filters, setFilters] = useState<string[]>(props.filters || []);

  return (
    <div className="border border-gray-300 rounded-xl">
      <h2 className="p-4 font-bold text-gray-600 border-b border-gray-300 bg-verylightblue rounded-t-xl">
        {props.headingStart}
      </h2>
      <div className="p-4 flex items-center flex-wrap gap-2">
        {filters.map((filter, index) => (
          <RemovableFilter key={`filter_${index}_text`} text={filter} />
        ))}
        <button
          title="add filter"
          className="flex text-sm py-2 px-4 rounded-full border border-blue items-center gap-2 bg-skyblue text-blue"
          onClick={() => setFilters([...filters, Date.now().toString()])}
        >
          <Image
            src="/images/add-circle-svgrepo-com.svg"
            alt=""
            width={16}
            height={16}
          />
          {props.headingEnd}
        </button>
      </div>
    </div>
  );
}
