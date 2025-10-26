import { SignUp } from '@clerk/nextjs';

export default function CustomSignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              card: "bg-white shadow-xl rounded-lg",
              headerTitle: "text-2xl font-bold text-gray-900",
              headerSubtitle: "text-gray-600",
              formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
              formFieldInput: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
              footerActionLink: "text-blue-600 hover:text-blue-500",
            },
            variables: {
              colorPrimary: "#3b82f6",
            }
          }}
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
}