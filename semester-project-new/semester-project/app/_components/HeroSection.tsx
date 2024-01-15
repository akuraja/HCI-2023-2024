import HeroImageGrid, { HeroImageObject } from "./HeroImageGrid";

import heroImage1 from "@/images/image 1.png";
import heroImage2 from "@/images/image 2.png";
import heroImage3 from "@/images/image 3.png";
import heroImage4 from "@/images/image 4.png";

const images: HeroImageObject[] = [
  { image: heroImage1, borderRadius: "20% 0 0 0" },
  { image: heroImage2, borderRadius: "0 20% 0 0" },
  { image: heroImage3, borderRadius: "0 0 0 20%" },
  { image: heroImage4, borderRadius: "0 0 20% 0" },
];

const HeroSection = () => (
  <section className="container flex justify-between items-center gap-10 w-screen mb-8 bg-gray-100"> {/* Promijenjena pozadinska boja u svijetlo sivu */}
    <div className="flex flex-col justify-start gap-5 max-w-xl m-auto lg:m-0 text-white">
      <h1 className="font-lobster text-4xl md:text-5xl lg:text-6xl italic text-red-500 mb-2">
        Vaša ulazna točka 
        za bezbrižna putovanja<br />
         
      </h1>
      <p className="font-roboto text-base lg:text-lg text-black">
      Otkrijte svijet putovanja bez stresa. Na Cityscape kolodvoru, postavili smo si misiju da redefiniramo vaše iskustvo putovanja. Od naših vrhunskih objekata i prijateljskog osoblja do naše strateške lokacije u središtu grada, tu smo kako bismo osigurali da je vaše putovanje što udobnije i praktičnije. Bilo da započinjete novo putovanje ili se vraćate kući, mi smo vaš pouzdani partner za glatko i bezbrižno putovanje. Dobrodošli u novo doba putničke izvrsnosti.
      </p>
    </div>
    <div className="hidden lg:block flex-shrink-0">
      <HeroImageGrid images={images} />
    </div>
  </section>
);

export default HeroSection;
