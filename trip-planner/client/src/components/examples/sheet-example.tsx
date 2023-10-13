'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";

export function SheetExample() {
  const [descriptionInput, setDescriptionInput] = useState(
    "Beijing 3 day tour by Happy Family!"
  );
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          Edit Project
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit project</SheetTitle>
          <SheetDescription>
            Make changes to your project here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Beijing Tour" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea
              // maxLength={10}
              placeholder="How interesting is your journey?"
              id="desc"
              defaultValue={descriptionInput}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
