"use client";
import Image from "next/image";
import mobileImage from "@/public/image-product-mobile.jpg";
import desktopImage from "@/public/image-product-desktop.jpg";
import icon from "@/public/icon-cart.svg";

const Card = () => {
  return (
    <div className="desktop:grid desktop:grid-cols-2 desktop:max-h-[560px] desktop:max-w-3xl bg-white rounded-xl overflow-hidden">
      <div>
        <Image
          className="desktop:hidden"
          src={mobileImage}
          alt="Image of Gabrielle Essence"
        />
        <Image
          className="hidden desktop:block h-[620px] object-cover "
          src={desktopImage}
          alt="Image of Gabrielle Essence"
        />
      </div>
      <div className="p-5 desktop:px-10 desktop:py-9">
        <div>
          <p className="uppercase font-sans tracking-[0.3em] font-medium text-darkGrayishBlue">
            perfume
          </p>
        </div>
        <div>
          <h1 className="mt-4 desktop:mt-8 font-mono font-bold text-veryDarkBlue text-4xl desktop:text-[2.75rem] leading-9">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mt-4 desktop:mt-8 font-sans text-base desktop:text-lg leading-6 text-darkGrayishBlue ">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the house of CHANEL.
          </p>
        </div>
        <div className="flex items-center mt-5 desktop:mt-8">
          <div className="font-mono text-4xl text-darkCyan">$149.99</div>
          <span className="ml-4 desktop:ml-7 font-sans text-base text-darkGrayishBlue line-through">
            $169.99
          </span>
        </div>
        <button className="mt-5 desktop:mt-10 flex items-center justify-center w-full h-14 rounded-lg bg-darkCyan hover:bg-veryDarkBlue">
          <Image className="w-5" src={icon} alt="Shopping Cart" />
          <p className="ml-3 text-white">Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Card;
