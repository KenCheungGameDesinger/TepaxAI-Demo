import React from "react";
import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Dices, MailIcon } from "lucide-react";
import { Label } from "../ui/label";

export default function LocationInput() {
  return (
    <motion.div
      className="group flex-col grid w-full max-w-lg items-center"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <Input
        key="location"
        type="location"
        label="Destination"
        // placeholder="you@example.com"
        description="*Choose the country and city as you want"
        className="grid w-full max-w-lg items-center "
        variant="bordered"
        endContent={
          <Button size="sm" isIconOnly variant="flat">
            <Dices className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          </Button>
        }
      />
    </motion.div>
  );
}
