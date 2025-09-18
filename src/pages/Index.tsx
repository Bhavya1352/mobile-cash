import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col h-full justify-center p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-muted-foreground">Sign in to your account</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
        <Button onClick={handleLogin} className="w-full">
          Login
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <a href="#" className="underline">
          Sign up
        </a>
      </div>
    </div>
  );
}