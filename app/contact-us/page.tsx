import React from "react";
import { ContactForm } from "./_components/contact-form";
import PageHeader from "@/components/page-header";

export default function Contact() {
  return (
    <>
      <PageHeader>Contact Us</PageHeader>
      <div className="px-10 sm:px-15 lg:px-20">
        <ContactForm />
      </div>
    </>
  );
}
