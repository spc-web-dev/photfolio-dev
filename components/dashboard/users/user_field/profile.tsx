import { FormField, FormItem } from "@/components/ui/form"


type Props = {
    form: any;
}

function Profile({ form }: Props) {
  return (
    <FormField
        name="profile"
        control={form.control}
        render={({ field })=>(
            <FormItem>
                profile
            </FormItem>
        )}
    />
  )
}

export default Profile