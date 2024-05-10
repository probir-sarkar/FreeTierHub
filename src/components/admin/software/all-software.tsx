"use client";
import { FC } from "react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ParsedSoftware } from "@/models/Soft";

import AddSoftwareButton from "./AddSofwareButton";
import { Button } from "@/components/ui/button";
import { Settings, TrashIcon } from "lucide-react";
import { useSoftwareStore } from "./software.state";

interface InputProps {
  softwares: ParsedSoftware[];
}

const AllSoftware: FC<InputProps> = ({ softwares }) => {
  const { setSheetOpen, setEditingSoftware } = useSoftwareStore();

  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Softwares</h1>
        <AddSoftwareButton />
      </div>
      <Table>
        <TableCaption>All Softwares</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Github</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Type</TableHead>

            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {softwares.map((software) => (
            <TableRow key={software._id.toString()}>
              <TableCell>{software.name}</TableCell>
              <TableCell>{software.description}</TableCell>
              <TableCell>{software.github}</TableCell>
              <TableCell>{software.website}</TableCell>
              <TableCell>{software.category.toString()}</TableCell>
              <TableCell className="flex gap-1.5">
                <Button
                  className="h-8 w-8"
                  size="icon"
                  variant="outline"
                  onClick={() => {
                    setEditingSoftware(software);
                    setSheetOpen(true);
                  }}
                >
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button className="h-8 w-8" size="icon" variant="outline">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>Total: {softwares.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default AllSoftware;
