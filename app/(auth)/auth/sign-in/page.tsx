import SignInFormClient from "@/modules/auth/components/sign-in-form-client";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <Image
          src="/login.svg"
          alt="Login"
          width={350}
          height={350}
          priority
          className="w-full max-w-sm h-auto"
        />

        <SignInFormClient />
      </div>
    </div>
  );
}