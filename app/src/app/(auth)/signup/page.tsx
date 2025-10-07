import { AuthPage } from '@/components/shared/AuthPage';

export default function SignupPage() {
  return (
    <AuthPage
      title="Join Now"
      description="create your fulcrum account."
      apiEndpoint="/api/signup"
      successRedirect="/login"
      buttonText="Sign Up"
    />
  );
}
