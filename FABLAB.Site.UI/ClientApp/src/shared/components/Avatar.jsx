import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

// Array de colores psicológicamente agradables
const colors = [
  "#FF6B6B", // Rojo
  "#FFC154", // Amarillo
  "#6BD4FF", // Azul
  "#82D173", // Verde
  "#FF82C1", // Rosa
];

const getRandomColor = () => {
  // Genera un índice aleatorio para seleccionar un color del array
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const getFallbackName = (name) => {
  const words = name.split(" ");
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join("");
  return initials;
};

const Avatar = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className || ''}`}
      {...restProps}
    />
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={`aspect-square h-full w-full ${className || ''}`}
      {...restProps}
    />
  );
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  const randomColor = getRandomColor();

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={`flex h-full w-full items-center justify-center rounded-full`}
      style={{ backgroundColor: randomColor, ...restProps.style }}
    >
      {getFallbackName(props.children)}
      test
    </AvatarPrimitive.Fallback>
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
