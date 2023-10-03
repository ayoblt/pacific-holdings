import PageHeader from "@/components/page-header";
import { CompanyData } from "@/data/companies-data";

// export function generateStaticParams() {
//   const companiesRoute = NavRoutes.find(
//     (item) => item.title.toLowerCase() === "companies"
//   );
//   const companies = companiesRoute?.subRoutes?.map((route) => ({
//     companySlug: route.path.replace("/", ""),

//   }));
// }

export default function SubCompanyPage({
  params,
}: {
  params: { companySlug: string; subCompanySlug: string };
}) {
  const { companySlug, subCompanySlug } = params;

  const company = CompanyData.find((item) => item.slug === companySlug);

  const subCompany = company?.subCompanies?.find(
    (item) => item.slug === subCompanySlug
  );
  return (
    <div className="pb-20">
      {subCompany ? (
        <div className="flex flex-col gap-16">
          <PageHeader>{subCompany.title}</PageHeader>
          <div className="px-8 sm:px-12 md:px-20">
            <div className="mb-6">
              <h2 className="text-gray-700 font-bold text-2xl mb-3 capitalize">
                {`Corporate profile of ${subCompany.title}`}
              </h2>
              <p className="text-gray-700 font-medium text-lg">
                Registered Address:{" "}
                <span className="font-normal text-gray-600 text-base">
                  {subCompany.address}
                </span>
              </p>
              <p className="text-gray-700 font-medium text-lg">
                Date of incorporation:{" "}
                <span className="font-normal text-gray-600 text-base">
                  {subCompany.incorporationDate}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-gray-700 font-bold text-2xl capitalize">
                General Profile
              </h2>
              <ul className="flex flex-col gap-2">
                {subCompany.body.map((item, index) => (
                  <li key={index}>
                    <p className="text-gray-600 leading-7">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 font-medium text-lg">
                Endorsements:{" "}
                <span className="font-normal text-gray-600 text-base">
                  {subCompany.endorserment}
                </span>
              </p>
              <div>
                <h3 className="text-gray-700 font-medium text-lg">
                  Board of Directors
                </h3>
                <ul className="flex flex-col gap-2 list-disc pl-4">
                  {subCompany.directors.map((item, index) => (
                    <li key={index}>
                      <p className="text-gray-600 leading-7 text-sm">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>This company doesn&apos;t is not a partner</p>
      )}
    </div>
  );
}
