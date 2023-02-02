import Image from "next/image";

export default function Button(props: {
  className?: string;
  iconSrc?: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={`flex gap-4 p-4 rounded-xl ${
        props.className ? props.className : ""
      }`}
      href={props.href}
    >
      {props.iconSrc && (
        <Image
          className="w-4 h-4"
          src={props.iconSrc}
          alt=""
          aria-hidden="true"
          width={16}
          height={16}
        />
      )}
      {props.children}
    </a>
  );
}
