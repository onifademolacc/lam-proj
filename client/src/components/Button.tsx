import React from "react";
import { classNames } from "../utils";

interface Props {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  capitalizeTitle?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  className?: string;
  altClassName?: string;
  isBusy?: boolean;
}

const SimpleLoading = () => (
  <div className="flex justify-center items-center">
    <span>Loading...</span>
  </div>
);

const Button: React.FC<Props> = ({
  title,
  onClick,
  capitalizeTitle,
  secondary,
  disabled,
  className,
  altClassName,
  isBusy,
}) => {
  return (
    <div
      className={
        altClassName
          ? ""
          : classNames(
              secondary
                ? `${
                    disabled
                      ? "border-btn-disabled"
                      : "fs-300 lg:fs-500 border-btn"
                  } rounded fw-500`
                : " mt-10 lg:mt-10",
              className as string
            )
      }
    >
      <button
        onClick={onClick ? onClick : undefined}
        className={
          altClassName ||
          (secondary
            ? "w-full py-2 lg:px-3"
            : disabled
            ? "btn-disabled fw-500 py-2 w-full"
            : "btn-primary fw-800 w-full py-2")
        }
        disabled={disabled || isBusy}
      >
        {isBusy ? (
          <SimpleLoading />
        ) : capitalizeTitle ? (
          title.toUpperCase()
        ) : (
          title
        )}
      </button>
    </div>
  );
};

export default Button;
