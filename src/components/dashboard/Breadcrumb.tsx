import Link from "next/link";
import { usePathname } from "next/navigation";
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  console.log(pathnames);
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pathnames[1]}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href={`/${pathnames[1]}`}>
              {pathnames[1]} /
            </Link>
          </li>
          <li className="font-medium text-primary">{pathnames.slice(-1)[0].split('_').join(' ')}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
