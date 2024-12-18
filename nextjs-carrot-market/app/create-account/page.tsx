import FormButton from "@/components/form-button";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";

export default function CreateAccount(){
  return(
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
        <FormInput
          type="text"
          placeholder="Username"
          required
          errors={[]}
        />
        <FormInput
          type="email"
          placeholder="Email"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required
          errors={[]}
        />
        <FormButton
          loading={false}
          text="Create Account"
        />
      </div>
      <SocialLogin/>
    </div>

  )
}