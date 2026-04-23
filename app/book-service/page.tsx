import React from "react";
import BookServiceHeader from "./BookServiceHeader";
import BookServiceForm from "./BookServiceForm";

const page = () => {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <section className="bg-color-3 section-dark relative overflow-hidden">
        <BookServiceHeader />
        <BookServiceForm />
      </section>
    </div>
  );
};

export default page;
