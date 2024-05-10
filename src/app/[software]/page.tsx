import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import { softwareBySlug } from "./software.action";

const SoftwareDetails = async ({ params }: { params: { software: string } }) => {
  const { software } = params;
  const { softwareDetails, relatedSoftwares } = await softwareBySlug(software);
  if (!softwareDetails) {
    return <div>Software not found</div>;
  }
  return (
    <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              alt="Product Icon"
              className="rounded-lg"
              height={64}
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover"
              }}
              width={64}
            />
            <div>
              <h1 className="text-3xl font-bold">{softwareDetails.name}</h1>
              <p className="text-gray-500 dark:text-gray-400">{softwareDetails.subtitle}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About {softwareDetails.name}</h2>
            <p className="text-gray-500 dark:text-gray-400">{softwareDetails.description}</p>
            <div className="flex items-center gap-4">
              {softwareDetails.github && (
                <Link
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                  href={softwareDetails.github}
                  target="_blank"
                >
                  <GithubIcon className="w-5 h-5" />
                  GitHub
                </Link>
              )}
              {softwareDetails.website && (
                <Link
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
                  href={softwareDetails.website}
                  target="_blank"
                >
                  <GlobeIcon className="w-5 h-5" />
                  Website
                </Link>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="grid gap-2">
              {softwareDetails.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Tags</h2>
            <div className="flex flex-wrap gap-2">
              <Link href={`/category/${softwareDetails.category.slug}`}>
                <div className="bg-gray-100 px-3 py-1 rounded-full text-sm dark:bg-gray-800 dark:text-gray-50">{softwareDetails.category.name}</div>
              </Link>
              {softwareDetails.tags.map((tag) => (
                <Link key={tag._id} href={`/tag/${tag.slug}`}>
                  <div className="bg-gray-100 px-3 py-1 rounded-full text-sm dark:bg-gray-800 dark:text-gray-50">{tag.name}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Pricing</h2>
            <div className="flex flex-wrap gap-2">
              <p>Pricing Model: {softwareDetails.payModel} </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Category</h2>
            <div className="bg-gray-100 px-3 py-1 rounded-full text-sm dark:bg-gray-800 dark:text-gray-50">Business Tools</div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Alternative Products</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Alternative Product Icon"
                      className="rounded-lg"
                      height={48}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover"
                      }}
                      width={48}
                    />
                    <div>
                      <h3 className="text-lg font-semibold">Acme Toolkit</h3>
                      <p className="text-gray-500 dark:text-gray-400">A comprehensive suite of business tools</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Button size="sm">Learn More</Button>
                    <p className="text-gray-500 dark:text-gray-400">$79/month</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Alternative Product Icon"
                      className="rounded-lg"
                      height={48}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "48/48",
                        objectFit: "cover"
                      }}
                      width={48}
                    />
                    <div>
                      <h3 className="text-lg font-semibold">Acme Insights</h3>
                      <p className="text-gray-500 dark:text-gray-400">Advanced analytics and reporting</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <div className="flex items-center gap-4">
                    <Button size="sm">Learn More</Button>
                    <p className="text-gray-500 dark:text-gray-400">$99/month</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SoftwareDetails;

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
