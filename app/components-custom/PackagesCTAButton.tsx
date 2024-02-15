import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import BusinessForm from "./EmailBusinessForm";

export function PackagesCTAButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white bg-levare-red font-bold text-center rounded-full px-8 py-3 cursor-pointer">
          I&apos;m Interested
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {/* The form component */}
        <BusinessForm />
      </DialogContent>
    </Dialog>
  );
}
