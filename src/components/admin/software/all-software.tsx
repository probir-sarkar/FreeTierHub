import { FC } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SoftwareDocument } from "@/models/Soft";

interface InputProps {
  softwares: SoftwareDocument[];
}

const AllSoftware: FC<InputProps> = async ({ softwares }) => {
  if (!softwares || softwares.length < 1) return null;
  return (
    <div>
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
            <TableRow key={software._id}>
              <TableCell>{software.name}</TableCell>
              <TableCell>{software.description}</TableCell>
              <TableCell>{software.github}</TableCell>
              <TableCell>{software.website}</TableCell>
              <TableCell>{software.type}</TableCell>
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
