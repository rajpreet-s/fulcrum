import { AuthPage } from '@/components/shared/AuthPage';

export default function LoginPage() {
  return (
    <AuthPage
      title="Sign In"
      description="login to your asme account."
      apiEndpoint="/api/login"
      successRedirect="/dashboard"
      buttonText="Log In"
    />
  );
}
