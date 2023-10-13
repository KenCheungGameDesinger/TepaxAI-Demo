import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  img: string;
  location: string;
  link: string;
  //(item:string) =>void
}

function MyCard({ img, location, link }: Props) {
  return (
    <Card className="w-1/4 ">
      <CardHeader>
        <img className="h-48 w-30" src={img} alt={location} />
        <CardTitle>{location}</CardTitle>
        <CardDescription>1k user viewed</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div>
              <p>created by:</p>
            </div>
            <div style={{ display: "inline" }}>
              <Avatar>
                <AvatarImage src="/img/avatar.jpg" alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>@user_01</p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={{ pathname: link }}>
          <Button variant="outline">View More</Button>
        </Link>
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
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
export default MyCard;
