import Hero from "@/components/pages/Home/Hero";
import Layout from "@/components/Layout";
import React from "react";
import Categories from "@/components/pages/Home/Categories";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
    </Layout>
  );
};

export default index;
