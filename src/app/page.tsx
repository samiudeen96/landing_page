"use client";
import AboutCard from "@/components/AboutCard";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import HeroTwo from "@/components/HeroTwo";
import OtherServiceCard from "@/components/OtherServiceCard";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import Tab from "@/components/Tab";
import Title from "@/components/Title";
import {
  about,
  otherProducts,
  otherServices,
  products,
  tab,
} from "@/utils/constant";
import Image from "next/image";
import { useState } from "react";

function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // close if same, else open new
  };

  return (
    <>
      <Hero />

      <section className="section">
        <p>
          Our aluminum joinery collection is designed not merely as functional
          elements, but as architectural statements. Every door, partition, and
          wardrobe system reflects a deliberate interplay of proportion,
          material, and technology—where nothing is exposed, yet everything is
          experienced. Our aluminum joinery collection is designed not merely as
          functional elements, but as architectural statements. Every door,
          partition, and wardrobe system reflects a deliberate interplay of
          proportion, material, and technology—where nothing is exposed, yet
          everything is experienced. Our aluminum joinery collection is designed
          not merely as functional elements, but as architectural statements.
          Every door, partition, and wardrobe system reflects a deliberate
          interplay of proportion, material, and technology—where nothing is
          exposed, yet everything is experienced.
        </p>
      </section>

      <section className="section">
        <Title
          mainTitle="OUR ALUMINIUM SYSTEMS"
          subTitle="Expert craftsmanship in aluminium systems, offering fit your unique space."
        />

        <div className="card_container gap-4 mt-6">
          {products.map((item) => (
            <ProductCard key={item.label} img={item.img} label={item.label} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card_container gap-10 mt-6">
          {otherProducts.map((item) => (
            <ServiceCard key={item.label} img={item.img} label={item.label} />
          ))}
        </div>
      </section>

      <section className="section">
        <Title mainTitle="About Our Products & Services" />
        <div className="card_container gap-10 mt-12">
          {about.map((item) => (
            <AboutCard
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </section>

      <HeroTwo />

      <section className="px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 gap-10 border-b-2 border-[#D9D9D9]">
        <div>
          <p className="mt-12">MATERIALS</p>
          <div className="mt-12">
            <h2>
              <span className="text-[#8c8c8c]"> UNLIKE PLASTICS,</span>
              <br />
              ALIMINUM iIS 100% <br /> RECYCLABLE.{" "}
              <span className="text-[#8c8c8c]">
                MOREOVER, <br /> APPROXIMATELY 70% OF IT
              </span>{" "}
              <br /> PRODUCED IS STILL IN USE.
            </h2>
          </div>

          <div className="mt-15">
            <Button label="VIEW PROJECTS" path="" />
          </div>
        </div>
        <div>
          <Image
            src="/materials.svg"
            alt="materials"
            width={1500}
            height={1500}
            priority
            // className="w-full h-auto"
          />
        </div>
      </section>

      <section className="section">
        <Banner />

        <div className="mt-26">
          <Title mainTitle="FREQUENTLY ASKED QUESTIONS" />
          <div className="mt-8">
            {tab.map((item, index) => (
              <Tab
                key={index}
                index={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Title mainTitle="OTHER SERVICES" />
        <div className="card_container gap-10 mt-6">
          {otherServices.map((item) => (
            <OtherServiceCard
              key={item.label}
              img={item.img}
              label={item.label}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
