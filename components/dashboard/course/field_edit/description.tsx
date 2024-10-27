import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { UseFormVideo } from "@/lib/type"


function Description({ form }: UseFormVideo) {
  return (
    <FormField 
      name="description"
      control={form.control}
      render={({ field })=>(
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
                <Textarea
                  placeholder="write the description here."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
        </FormItem>
      )}
    />
  )
}

export default Description