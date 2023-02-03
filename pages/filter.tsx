import FilterControlPanel from "@/components/FilterControlPanel";
import Notification from "@/components/Notification";
import Image from "next/image";

type FilterPanel = {
  headingStart: string;
  headingEnd: string;
  filters: string[];
};

const FilterPanels: FilterPanel[] = [
  {
    headingStart: "Finde Unternehmen, die",
    headingEnd: "haben",
    filters: ["eine Finanzierung erhalten", "großes Jobwachstum"],
  },
  {
    headingStart: "Finde Unternehmen, die",
    headingEnd: "Mitarbeiter haben",
    filters: ["2 - 10", "11 - 50", "51 - 200", "201 - 500", "501 - 1000"],
  },
  {
    headingStart: "Finde Unternehmen, die im",
    headingEnd: "Bereich tätig sind",
    filters: ["öffentliche Einrichtungen"],
  },
  {
    headingStart: "Deine Ansprechperson ist der/die",
    headingEnd: "Hinzufügen",
    filters: ["CEO"],
  },
];

export default function Filter() {
  return (
    <div className="p-4 flex flex-col gap-6">
      <section className="flex justify-between items-center my-2">
        <h1 className="text-xl">Filter</h1>
        <div className="flex gap-2">
          <button className="p-2 rounded-xl text-white bg-blue">
            Leads zuweisen
          </button>
          <button className="p-2 rounded-xl border border-blue flex gap-2 items-center">
            <div className="bg-green-400 w-4 aspect-square rounded-full" />
            Ben
            <Image
              className="invert"
              src="/images/down-arrow-backup-2-svgrepo-com.svg"
              alt=""
              aria-hidden
              width={15}
              height={15}
            />
          </button>
        </div>
      </section>
      <Notification text="DU WIRST IN DEN NÄCHSTEN TAGEN LEADS IN DEINEM DASHNBOARD ERHALTEN!" />
      <section className="flex flex-col gap-6">
        {FilterPanels.map((panel, index) => (
          <FilterControlPanel
            key={`filterControlPanel_${index}`}
            headingStart={panel.headingStart}
            headingEnd={panel.headingEnd}
            filters={panel.filters}
          />
        ))}
      </section>
      <section className="flex justify-end">
        <button className="rounded-xl bg-violet py-4 px-8 text-white font-bold">
          SPEICHERN
        </button>
      </section>
    </div>
  );
}
