
import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form"
import { Input } from "../../../../components/ui/input"
import { Button } from "../../../../components/ui/button"
import { Link, useNavigate } from "react-router-dom"


const FormSchema = v.object({
  email: v.pipe(v.string(), v.email('Please enter a valid email')),
})

export default function ForgotPassowrd() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: valibotResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: v.InferInput<typeof FormSchema>) {
    console.log(data)
    navigate("/")
  }

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="mb-12">
        <h1 className="font-bold text-2xl text-center">
          Reset Password
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Link to={`/auth/login`}>
              <p className="text-sm text-blue-500"> Already have an account ? Login. </p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Button style={{ background: "linear-gradient(90deg, rgba(0, 123, 255, 1) 0%, rgba(123, 31, 162, 1) 100%)" }} type="submit">Reset</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
