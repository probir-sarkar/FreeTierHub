import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SoftwareWithCategorized } from "@/app/[software]/software.action";
import { Globe, Heart } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Props {
  software: SoftwareWithCategorized;
}
export default function SoftwareCard({ software }: Props) {
  const { tags, category } = software;
  const allTags = [category.name, ...tags.map((tag) => tag.name)];
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle>{software.name}</CardTitle>
            <CardDescription>{software.subtitle}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Link href="#" target="_blank">
              <GitHubLogoIcon className="w-5 h-5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
            </Link>
            <Link href="#" target="_blank">
              <Globe className="w-5 h-5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" />
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {allTags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="capitalize">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Heart className="w-4 h-4 fill-primary" />
            <span>1.2K</span>
          </div>
          <Link className="text-sm font-medium text-primary hover:underline" href={"/" + software.slug}>
            View Product
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
