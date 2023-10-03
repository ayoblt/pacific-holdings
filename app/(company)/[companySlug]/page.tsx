import PageHeader from "@/components/page-header";
import { CompanyData } from "@/data/companies-data";
import { NavRoutes } from "@/data/nav-routes";

export function generateStaticParams() {
  const companiesRoute = NavRoutes.find(
    (item) => item.title.toLowerCase() === "companies"
  );
  if (companiesRoute) {
    return companiesRoute.subRoutes?.map((route) => ({
      companySlug: route.path.replace("/", ""),
    }));
  }
}

export default function CompanyPage({ params }: { params: { companySlug: string } }) {
  const { companySlug } = params;
  // console.log(params);

  const company = CompanyData.find((company) => company.slug === companySlug);
  // console.log(company);

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
