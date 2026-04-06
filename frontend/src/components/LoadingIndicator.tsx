import { Loader2 } from "lucide-react";

type Props = {
  fullPage?: boolean;
};

const LoadingIndicator = ({ fullPage = false }: Props) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-2">
      <Loader2 className="h-10 w-10 animate-spin text-orange-500" />
      <span className="text-gray-600 font-medium">Loading...</span>
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        {content}
      </div>
    );
  }

  return <div className="py-20">{content}</div>;
};

export default LoadingIndicator;
