import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectSingleEventHandler } from "react-day-picker";
import { ptBR } from "date-fns/locale";

interface DatePickerProps {
  className?: string;
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
  className,
  value,
  onChange,
  placeholder = "Escolha uma data",
}) => {
  const [date, setDate] = React.useState<Date | undefined>(value);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (onChange) {
      onChange(selectedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px]  justify-start text-left text-md font-poppins font-normal",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon className="mr-2 text-md" />
          {date ? (
            format(date, "PPP", {
              locale: ptBR,
            })
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect as SelectSingleEventHandler}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
