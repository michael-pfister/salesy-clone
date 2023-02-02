import Image from "next/image";
import Anchor from "./Anchor";

export default function AppBar(props: {trialPeriod?: boolean, children: React.ReactNode }) {
    return <div className="p-4 w-72 flex flex-col gap-4 bg-skyblue h-screen">
        <Image src="/images/cropped-salesy_original_-removebg-preview-1-1.png" alt="Salesy" width={300} height={72} priority />
        <hr className="my-2 border-b-1 border-gray-300"/>
        <nav className="flex flex-col">
            <h4 className="">NAVIGATION</h4>
            {props.children}
        </nav>
        {props.trialPeriod &&
        <div className="mt-auto relative flex flex-col gap-4 items-center p-4 mx-2 rounded-lg bg-skyviolet">
            <div className="absolute -top-16 flex justify-center w-[100px] h-[129px]">
                <Image src="/images/rocket.webp" alt="Rocket" fill sizes="100px" />
            </div>
            <p className="text-gray-500 p-2 text-center font-bold mt-16">You are using Trial Period</p>
            <Anchor href="/upgrade" className="bg-violet text-white font-bold px-10">Upgrade</Anchor>
        </div>
        }
    </div>
}