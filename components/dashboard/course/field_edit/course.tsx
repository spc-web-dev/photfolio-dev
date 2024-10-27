import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormVideo } from "@/lib/type";

export default function Course({ form }: UseFormVideo) {
  return (
    <FormField
      control={form.control}
      name="course_id"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Course</FormLabel>
          <FormControl>
            <Input type="text" {...field} disabled placeholder="course name"/>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
