import { Pressable } from "react-native";
import { Link } from "expo-router";
import { ReactNode } from "react";

interface ButtonProps {
  href: string | any
  children: ReactNode; 
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Pressable className="bg-primary px-6 py-3 w-[327px] rounded-lg">
      <Link
        href={href}
        className="font-semibold text-xl text-white text-center"
        style={{ fontFamily: "SoraSemiBold" }}
      >
        {children}
      </Link>
    </Pressable>
  );
}
