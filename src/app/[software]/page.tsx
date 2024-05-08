import { softwareBySlug } from "@/app/[software]/software.action";
import Link from "next/link";

const SoftwareDetails = async ({ params }: { params: { software: string } }) => {
  const { software } = params;
  const { softwareDetails, relatedSoftwares } = await softwareBySlug(software);

  if (!softwareDetails) {
    return <div>Software not found</div>;
  }
  return (
    <div>
      <h1>{softwareDetails.name}</h1>
      <p>{softwareDetails.description}</p>
      <h2>Related Softwares</h2>
      <ul>
        {relatedSoftwares.map((relatedSoftware) => (
          <li key={relatedSoftware._id}>
            <Link href={`/${relatedSoftware.slug}`}>{relatedSoftware.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftwareDetails;
