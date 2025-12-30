import Link from "next/link";
import LinkButton from "./linkButton";
import ThemeToggle from "./themeToggle";

export default function UserMenu() {
  return (
    <div className="flex justify-between items-center gap-5">
      <LinkButton url="login" label="로그인" />
      <LinkButton url="signup" label="회원가입" />
      <ThemeToggle />
    </div>
  )
}
