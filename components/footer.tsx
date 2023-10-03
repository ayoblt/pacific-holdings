import React from "react";

import { ContactData } from "@/data/contact";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-20">
      <div className="flex flex-col md:flex-row items-center max-md:gap-20 md:items-start md:justify-around">
        <div className="flex flex-col items-center md:items-start gap-10">
          <h2 className="text-white text-2xl font-semibold ">Get in touch</h2>
          {ContactData.map((contact, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col md:flex-row gap-5 items-center">
                {contact.icon}
                <div className="flex flex-col items-center md:items-start gap-2">
                  <h3 className="text-gray-600 text-lg font-medium uppercase">
                    {contact.title}
                  </h3>

                  <p className="text-white text-center tracking-wider">
                    {contact.title === "email" ? (
                      <a href={`mailto:${contact.details}`}>
                        {contact.details}
                      </a>
                    ) : (
                      <>{contact.details}</>
                    )}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start gap-10">
          <h2 className="text-2xl font-semibold text-white">Company</h2>
          <div className="flex flex-col items-center md:items-start gap-5">
            <Link href="/about-us" className="text-lg text-gray-500">
              About us
            </Link>
            <Link href="/contact-us" className="text-lg text-gray-500">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
