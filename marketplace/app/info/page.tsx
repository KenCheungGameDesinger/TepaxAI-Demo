import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Plan from "../MyComponent/plan";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Info() {
  return (
    <div>
      <Link href={{ pathname: "/" }}>
        <Button>Return</Button>
      </Link>
      <div
        className=" flex 
      items-center justify-center "
      >
        <Card className="w-1/3 ">
          <CardHeader>
            <Image
              src="/img/Hong_Kong.jpg"
              alt="HK"
              width={1000}
              height={500}
            />
            <CardTitle>
              Hong Kong
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="float-right">Purchase</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Success</DialogTitle>
                    <DialogDescription>
                      You can access this item now
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4"></div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardTitle>
            <CardDescription>
              StartDate: 2023-07-10, EndDate: 2023-07-15
            </CardDescription>
            <CardContent>
              <div className=" flex ">
                <Avatar>
                  <AvatarImage src="/img/avatar.jpg" alt="avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>@user_01</p>
              </div>
            </CardContent>
          </CardHeader>
          <CardContent>
            <div
              className=" flex 
      items-center justify-center "
            >
              <p>
                This is the info of the page This is the info of the page This
                is the info of the page This is the info of the page
              </p>

              <Plan></Plan>
            </div>
            <Textarea placeholder="Type your comment here:" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
