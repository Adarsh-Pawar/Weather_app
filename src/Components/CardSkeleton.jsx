const CardSkeleton = () => {
    return (
      <div className="w-[22rem] min-w-[22rem] h-[32rem] glassCard p-4 pt-0 border border-base shadow rounded-md">
        <div className="animate-pulse flex space-x-4 justify-center items-center gap-4 mt-12 mb-4">
          <div className="rounded-full bg-base h-20 w-20"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-base rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-base rounded col-span-2"></div>
                <div className="h-2 bg-base rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-base rounded"></div>
            </div>
          </div>
        </div>
  
        <div className="animate-pulse flex space-x-4 justify-center items-center gap-4 mt-10 mb-4">
          <div className="flex-1">
            <div className="h-4 bg-highlight rounded"></div>
          </div>
        </div>
  
        <div className="animate-pulse flex space-x-4 justify-center items-center gap-4 mt-10 mb-4">
          <div className="flex-1">
            <div className="h-4 bg-highlight rounded"></div>
          </div>
          <div className="flex-1">
            <div className="h-4 bg-highlight rounded"></div>
          </div>
        </div>
  
        <div className="animate-pulse flex space-x-4 justify-center items-center gap-4 mt-10 mb-4">
          <div className="flex-1">
            <div className="h-12 bg-highlight rounded-lg"></div>
          </div>
          <div className="flex-1">
            <div className="h-12 bg-highlight rounded-lg"></div>
          </div>
        </div>
  
        <div className="animate-pulse flex space-x-4 justify-center items-center gap-4 mt-10 mb-4">
          <div className="flex-1">
            <div className="h-4 bg-highlight rounded"></div>
          </div>
          <div className="flex-1">
            <div className="h-4 bg-highlight rounded w-10 self-end ms-36"></div>
          </div>
        </div>
  
        <hr className="bg-slate-600" />
  
        <div className="animate-pulse flex space-x-4 justify-center items-center gap-4 mt-5 mb-4">
          <div className="h-12 bg-highlight rounded-lg w-32"></div>
        </div>
      </div>
    );
  };
  
  export default CardSkeleton;
  