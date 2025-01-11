import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) {
    return;
  }
  return (
    <div className="bg-green-100 p-3 rounded-md flex items-center gap-x-2 text-sm text-green-600 font-semibold">
      <CheckCircledIcon className="size-4" />
      <p>{message}</p>
    </div>
  );
};
