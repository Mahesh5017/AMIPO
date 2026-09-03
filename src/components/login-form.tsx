"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Card className="border-[#303030] bg-[#181818] text-[#f5f5f5]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            Welcome back
          </CardTitle>

          <CardDescription className="text-[#737373]">
            Login to your AMIPO account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <Button
                  variant="outline"
                  type="button"
                  className="border-[#303030] bg-[#141414] text-[#f5f5f5] hover:bg-[#1f1f1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.538 9.103 1.52 12.077 1.006 1.454 2.178 3.078 3.738 3.018 1.496-.065 2.062-.965 3.87-.965 1.78 0 2.292.965 3.876.93 1.618-.027 2.63-1.464 3.6-2.923 1.14-1.688 1.608-3.325 1.635-3.41-.035-.013-3.128-1.2-3.159-4.857-.027-3.04 2.48-4.494 2.594-4.561-1.427-2.09-3.623-2.356-4.397-2.409-2.025-.162-3.72 1.093-4.356 1.093Z"
                    />
                  </svg>
                  Continue with Apple
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  className="border-[#303030] bg-[#141414] text-[#f5f5f5] hover:bg-[#1f1f1f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12.48 10.92v3.28h4.64c-.2 1.05-.79 1.93-1.68 2.52v2.1h2.72c1.6-1.47 2.52-3.64 2.52-6.2 0-.6-.05-1.18-.16-1.72h-8.04Z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 20c2.16 0 3.97-.71 5.29-1.92l-2.72-2.1c-.71.48-1.61.77-2.57.77-1.97 0-3.63-1.33-4.23-3.12H4.96v2.17A8 8 0 0 0 12 20Z"
                    />
                    <path
                      fill="currentColor"
                      d="M7.77 13.63A4.8 4.8 0 0 1 7.5 12c0-.57.1-1.12.27-1.63V8.2H4.96A8 8 0 0 0 4 12c0 1.29.31 2.51.96 3.8l2.81-2.17Z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 7.25c1.18 0 2.23.4 3.06 1.2l2.3-2.3C15.97 4.75 14.16 4 12 4a8 8 0 0 0-7.04 4.2l2.81 2.17c.6-1.79 2.26-3.12 4.23-3.12Z"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </Field>

              <FieldSeparator className="text-[#737373]">
                Or continue with email
              </FieldSeparator>

              <Field>
                <FieldLabel
                  htmlFor="email"
                  className="text-[#a3a3a3]"
                >
                  Email
                </FieldLabel>

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="border-[#303030] bg-[#141414] text-[#f5f5f5] placeholder:text-[#737373]"
                />
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel
                    htmlFor="password"
                    className="text-[#a3a3a3]"
                  >
                    Password
                  </FieldLabel>

                  <a
                    href="#"
                    className="ml-auto text-sm text-[#a3a3a3] underline-offset-4 hover:text-[#f5f5f5] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <Input
                  id="password"
                  type="password"
                  required
                  className="border-[#303030] bg-[#141414] text-[#f5f5f5] placeholder:text-[#737373]"
                />
              </Field>

              <Field>
                <Button
                  type="submit"
                  className="w-full bg-[#f5f5f5] text-[#0a0a0a] hover:bg-white"
                >
                  Login
                </Button>

                <FieldDescription className="text-center text-[#737373]">
                  Don&apos;t have an account?{" "}
                  <a
                    href="/signup"
                    className="text-[#f5f5f5] hover:underline"
                  >
                    Sign up
                  </a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center text-[#737373]">
        By continuing, you agree to our{" "}
        <a
          href="#"
          className="text-[#a3a3a3] hover:text-[#f5f5f5] hover:underline"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="text-[#a3a3a3] hover:text-[#f5f5f5] hover:underline"
        >
          Privacy Policy
        </a>
        .
      </FieldDescription>
    </div>
  )
}