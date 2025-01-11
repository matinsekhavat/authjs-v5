import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return;
  }
  return (
    <div className="bg-red-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-red-600 font-semibold">
      <ExclamationTriangleIcon className="size-4" />
      <p>{message}</p>
    </div>
  );
};
