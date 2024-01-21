import Logo from "@/components/Logo";
import Icons from "@/components/Icons";

type TitleProps = {
  children: string;
};

type ListProps = {
  title: string;
  items: string[];
};

const FooterListTitle = ({ children }: TitleProps) => (
  <div className="font-Arial font-bold text-2xl whitespace-nowrap text-black mb-1 lg:mb-5">
    {children}
  </div>
);

const FooterList = ({ title, items }: ListProps) => {
  return (
    <div>
      <FooterListTitle>{title}</FooterListTitle>
      <ul className="font-Arial text-black">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => (
  <div className="bg-gray-300 w-full">
    <div className="container flex flex-col py-10 items-center gap-10 self-stretch md:max-lg:px-10">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center md:items-start self-stretch">
        
        <div className="flex flex-wrap justify-start gap-11">
          <FooterList
            title="Usluge"
            items={[
              "Prodaja karata",
              "Informacije o rasporedu",
              "Sigurnost",
              "Pomoć",
              "Upravljanje rezervacijom",
            ]}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-11">
          <FooterList
            title="CityScape station"
            items={[
              "O nama",
              "Kontaktiraj nas",
              "Usluge",
            ]}
          />
        </div>

        <div className="flex flex-col gap-2">
          <FooterListTitle>Kontaktiraj nas!</FooterListTitle>
    
          <div className="flex gap-2">
             <Icons.facebook className="w-6" style={{ color: '#001f3f' }} />
            <Icons.twitter className="w-6" style={{ color: '#001f3f' }} />
            <Icons.linked className="w-6" style={{ color: '#001f3f' }} />
            <Icons.instagram className="w-6" style={{ color: '#001f3f' }} />
          </div>
        </div>
      </div>
      <p className="font-Arial text-white text-base sm:text-lg">
        Copyright @ 2024 FESB. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
