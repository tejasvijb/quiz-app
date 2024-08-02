
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../components/ui/form"
import { Input } from "../../../../components/ui/input"
import { Button } from "../../../../components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../../../utils/validations"
import * as z from 'zod';



export default function Login() {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log(data)
    navigate("/")
  }

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="mb-12 ">
        <h1 style={{ background: "linear-gradient(90deg, rgba(130,116,255,1) 0%, rgba(163,90,161,1) 65%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} className="font-bold  text-2xl text-center ">
          Welcome to BrainTease!
        </h1>
        <p className="text-slate-500 mb-2 text-sm text-center font-semibold" > Ignite Curiosity, Master the Quiz! </p>
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter Password" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Link to={`/auth/forgot-password`}>
              <p className="text-sm text-blue-500"> Forgot Password </p>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Button style={{ background: "linear-gradient(90deg, rgba(0, 123, 255, 1) 0%, rgba(123, 31, 162, 1) 100%)" }} type="submit">Login</Button>
          </div>
        </form>
      </Form>
      <div className="absolute bottom-10">
        <Link to={`/auth/register`}>
          <p className="text-sm text-blue-500"> Don't have an account ? </p>
        </Link>
      </div>
    </div>
  )
}
