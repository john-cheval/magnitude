import ServiceHero from "@/components/Services/ServiceHero";
import Services from "@/components/Services/Services";
import React from "react";
import generateMetadataData from "@/utils/generateMetaData";
import { fetchData } from "@/utils/fetchData";

export async function generateMetadata() {
  return await generateMetadataData(17, "services", false);
}
const ServicePage = async () => {
  const servicesData = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/full_details?ID=17"
  );
  const servicesList = await fetchData(
    "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/services"
  );
  return (
    <>
      <ServiceHero
        title={servicesData?.post_title}
        small_heading={servicesData?.small_heading}
        description={servicesData?.short_description}
        bannerImage={servicesData?.top_banner}
      />
      <Services servicesList={servicesList} />
    </>
  );
};

export default ServicePage;
