import { AspectRatio } from "./ui/aspect-ratio";

export const RestaurantCardSkeleton = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg animate-pulse bg-white">
      <AspectRatio ratio={16 / 9}>
        <div className="w-full h-full bg-slate-200" />
      </AspectRatio>
      <div className="p-4 space-y-3 relative z-10 bg-white">
        <div className="h-6 bg-slate-200 rounded-md w-3/4"></div>
        <div className="h-4 bg-slate-200 rounded-md w-1/2"></div>
      </div>
    </div>
  );
};

export const SearchResultSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 bg-white p-4 rounded-2xl shadow-md animate-pulse">
      <div className="w-full md:w-64 h-48 bg-slate-200 rounded-xl" />
      <div className="flex flex-col flex-1 gap-4 py-2">
        <div className="h-8 bg-slate-200 rounded-md w-1/2" />
        <div className="flex gap-2">
          <div className="h-6 bg-slate-200 rounded-full w-20" />
          <div className="h-6 bg-slate-200 rounded-full w-24" />
        </div>
        <div className="h-4 bg-slate-200 rounded-md w-full mt-auto" />
        <div className="h-4 bg-slate-200 rounded-md w-3/4" />
      </div>
    </div>
  );
};

export const OrderSkeleton = () => {
  return (
    <div className="space-y-10 bg-slate-50 p-10 rounded-2xl animate-pulse">
      <div className="flex justify-between items-center pb-4 border-b">
        <div className="h-8 w-1/3 bg-slate-200 rounded-md" />
        <div className="h-8 w-1/4 bg-slate-200 rounded-md" />
      </div>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <div className="h-6 w-1/2 bg-slate-200 rounded-md" />
          <div className="h-4 w-full bg-slate-200 rounded-md" />
          <div className="h-4 w-3/4 bg-slate-200 rounded-md" />
        </div>
        <AspectRatio ratio={16 / 5}>
          <div className="w-full h-full bg-slate-200 rounded-xl" />
        </AspectRatio>
      </div>
    </div>
  );
};
