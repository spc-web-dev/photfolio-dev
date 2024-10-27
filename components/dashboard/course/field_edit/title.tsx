import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UseFormVideo } from "@/lib/type"


function Title({form}:UseFormVideo) {
  return (
    <FormField 
    name="title"
    control={form.control}
    render={({ field })=>(
      <FormItem>
        <FormLabel>Title</FormLabel>
        <FormControl>
              <Input type="text" {...field} placeholder="title of the video"/>
            </FormControl>
      </FormItem>
    )}
  />
  )
}

export default Title