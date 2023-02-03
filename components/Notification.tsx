import Image from "next/image";
import { useState } from "react";

export default function Notification(props: { text: string }) {
  const [show, setShow] = useState(true);
  return show ? (
    <div className="flex items-center justify-between font-bold bg-skyblue border border-blue text-blue p-2 rounded-xl">
      <div className="flex gap-2 items-center">
        <Image
          src="/images/info-circle-svgrepo-com.svg"
          alt=""
          aria-hidden
          width={30}
          height={30}
        />
        <p>{props.text}</p>
      </div>
      <button title="close" onClick={() => setShow(false)}>
        <Image
          src="/images/close-x-svgrepo-com.svg"
          alt=""
          aria-hidden
          width={30}
          height={30}
        />
      </button>
    </div>
  ) : null;
}
