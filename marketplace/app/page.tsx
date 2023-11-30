import Image from "next/image";
import Script from "next/script";
import MyCard from "./MyComponent/card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Link } from "lucide-react";
import { redirect } from "next/navigation";
export default function Home() {
  redirect("marketplace");
  return (
    <main>
      <div>
        <Button>Return</Button>
      </div>
      <Card>
        <div
          className=" flex
      items-center justify-center "
        >
          <MyCard
            img="/img/Hong_Kong.jpg"
            location="Hong Kong"
            link="/info"
          ></MyCard>
          <MyCard img="/img/Taiwan.jpg" location="Taiwan" link=""></MyCard>
        </div>
        <div
          className=" flex
      items-center justify-center "
        >
          <MyCard img="/img/japan.jpg" location="Japan" link=""></MyCard>
          <MyCard
            img="/img/singapore.jpg"
            location="Singapore"
            link=""
          ></MyCard>
        </div>
      </Card>

      <div>
        <Button className="float-right">next page</Button>
      </div>
    </main>
  );
} //
