/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yd9iDsGYFR8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import TierList from "@/components/home/TierList";
import Image from "next/image";

export default function Component() {
  return (
    <>
      <section className="w-full py-12 md:py-24 2xl:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex gap-6 ">
            <div className="flex flex-col justify-center space-y-4 basis-3/5">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Discover the Best Free Software Tiers</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  FreeTierHub is your one-stop destination for finding the perfect free software tiers for your needs. Explore a wide range of categories and types to find the best
                  fit.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="basis-2/5">
              <Image quality={100} alt="Hero" className=" hidden md:block mx-auto h-full w-full  rounded-xl object-cover" height="800" src="/hero.jpg" width="640" />
            </div>
          </div>
        </div>
      </section>
      <TierList />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Software Categories</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover a wide range of software categories with free tiers on FreeTierHub.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                <PieChartIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold">Analytics</h3>
                <p className="text-gray-500 dark:text-gray-400">Free tiers for data analysis and reporting tools.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                <ActivityIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold">Productivity</h3>
                <p className="text-gray-500 dark:text-gray-400">Free tiers for task management and collaboration tools.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                <ActivityIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold">Development</h3>
                <p className="text-gray-500 dark:text-gray-400">Free tiers for programming tools and frameworks.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                <TargetIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold">Marketing</h3>
                <p className="text-gray-500 dark:text-gray-400">Free tiers for advertising and content creation tools.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
                <CurrencyIcon className="h-10 w-10 text-gray-500 dark:text-gray-400" />
                <h3 className="text-lg font-semibold">Finance</h3>
                <p className="text-gray-500 dark:text-gray-400">Free tiers for accounting and financial management tools.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Free Tiers</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg">Discover some of the most popular and noteworthy free tiers from leading cloud providers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>AWS Free Tier</CardTitle>
                  <CardDescription>Explore a wide range of free services from Amazon Web Services, including compute, storage, and more.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CpuIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      <span>12 months of free EC2 micro instances</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StoreIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      <span>5GB of free Amazon S3 storage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DatabaseIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      <span>750 hours of free Amazon RDS</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gray-900 text-gray-50 font-medium transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Google Cloud Free Tier</CardTitle>
                  <CardDescription>Explore a wide range of free services from Google Cloud, including compute, storage, and more.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CpuIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      <span>1 year of free Google Compute Engine</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StoreIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      <span>5GB of free Google Cloud Storage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DatabaseIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      <span>1GB of free Google Cloud SQL</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gray-900 text-gray-50 font-medium transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Microsoft Azure Free Tier</CardTitle>
                  <CardDescription>Explore a wide range of free services from Microsoft Azure, including compute, storage, and more.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CpuIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      <span>12 months of free Azure Virtual Machines</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <StoreIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      <span>5GB of free Azure Blob Storage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DatabaseIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                      <span>5GB of free Azure SQL Database</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gray-900 text-gray-50 font-medium transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ActivityIcon(props) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function CreativeCommonsIcon(props) {
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
      <path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
      <path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
    </svg>
  );
}

function CurrencyIcon(props) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}

function ListStartIcon(props) {
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
      <path d="M16 12H3" />
      <path d="M16 18H3" />
      <path d="M10 6H3" />
      <path d="M21 18V8a2 2 0 0 0-2-2h-5" />
      <path d="m16 8-2-2 2-2" />
    </svg>
  );
}

function NetworkIcon(props) {
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function PieChartIcon(props) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

function ProportionsIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M12 9v11" />
      <path d="M2 9h13a2 2 0 0 1 2 2v9" />
    </svg>
  );
}

function SchoolIcon(props) {
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
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

function TargetIcon(props) {
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
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function CpuIcon(props) {
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}
function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
function StoreIcon(props) {
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
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" />
      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
    </svg>
  );
}
