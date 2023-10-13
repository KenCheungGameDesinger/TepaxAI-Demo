import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function plan() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Day1:</AccordionTrigger>
        <AccordionContent>
          <p>Transportation:从北京飞往香港</p>
          <p>
            Meals: Breakfast: 机上早餐, Lunch: 机上午餐", Dinner: 香港酒店晚餐
          </p>
          <p>Activities: 抵达后入住酒店，休息</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Day2:</AccordionTrigger>
        <AccordionContent>
          <p>Transportation: 前往香港迪士尼乐园</p>
          <p>
            Meals: Breakfast: 酒店早餐, Lunch: 迪士尼乐园午餐", Dinner: 酒店晚餐
          </p>
          <p>Activities: 度过一天在乐园玩耍</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Day3:</AccordionTrigger>
        <AccordionContent>
          <p>Transportation: 出租车</p>
          <p>
            Meals: Breakfast: 酒店早餐, Lunch: 海边午餐", Dinner: 香港夜景晚餐
          </p>
          <p>Activities: 晚上在游船上欣赏维多利亚港夜景</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
export default plan;
