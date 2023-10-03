import PageHeader from "@/components/page-header";
import { CompanyData } from "@/data/companies-data";

// interface Company {
//   title: string;
//   slug: string;
//   body: string[];
//   subCompanies?: SubCompany[];
// }

// interface SubCompany {
//   title: string;
//   slug: string;
//   address: string;
//   incorporationDate: string;
//   body: string[];
//   endorserment: string;
//   directors: string[];
// }

// export async function generateStaticParams() {
//   const response = await fetch("/api/companies");
//   const data: Company[] = await response.json();
//   console.log(data);

//   return data.map((item) => ({
//     companySlug: item.slug,
//   }));
// }

export default function CompanyPage({
  params,
}: {
  params: { companySlug: string };
}) {
  const { companySlug } = params;

  const company = CompanyData.find((company) => company.slug === companySlug);

  return (
    <div className="pb-20">
      {company ? (
        <div className="flex flex-col gap-16">
          <PageHeader>{company.title}</PageHeader>
          <div className="px-8 sm:px-12 md:px-20">
            <h2 className="text-gray-700 font-medium text-2xl mb-6">
              {company.title}
            </h2>
            <ul className="flex flex-col gap-3">
              {company.body.map((item, index) => (
                <li key={index}>
                  <p className="text-gray-600 leading-7">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>This company doesn&apos;t is not a partner</p>
      )}
    </div>
  );
}
