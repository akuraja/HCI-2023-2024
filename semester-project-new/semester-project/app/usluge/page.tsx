import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faInfo, faClipboardList, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

type ServiceItemProps = {
  title: string;
  icon: import("@fortawesome/fontawesome-svg-core").IconDefinition; // Pravilan tip za FontAwesome ikone
  href: string;
};

export const ServiceItem = ({ title, icon, href }: ServiceItemProps) => (
    <Link href={href}>
      <div className="flex items-center p-4 bg-gray-200 rounded-md">
        <FontAwesomeIcon icon={icon} className="text-red-500 mr-2" />
        <span className="text-gray-800">{title}</span>
      </div>
    </Link>
  );
  
  const Usluge = () => {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-10">
        <h1 className="text-3xl font-bold mb-4">Usluge</h1>
        <div className="flex flex-col gap-4 mt-2">
          <ServiceItem title="Prodaja karata" icon={faTicketAlt} href="/prodaja-karata" />
          <ServiceItem title="Informacije o rasporedu" icon={faInfo} href="/informacije-o-rasporedu" />
          <ServiceItem title="Upravljanje rezervacijama" icon={faClipboardList} href="/upravljanje-rezervacijama" />
          <ServiceItem title="Pomoć" icon={faHandsHelping} href="/pomoc" />
        </div>
      </main>
    );
  };
  
  export default Usluge;
  