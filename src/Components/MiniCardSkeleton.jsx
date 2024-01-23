
const MiniCardSkeleton = () => {
    return (
      <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col justify-items-center gap-4 ">
        <div className="animate-pulse flex space-x-4 self-center">
          <div className="h-5 w-20 bg-highlight rounded-lg"></div>
        </div>
        <hr />
        <div className="animate-pulse flex space-x-4 self-center">
          <div className="h-12 w-20 bg-highlight rounded-lg"></div>
        </div>
        <div className="animate-pulse flex space-x-4 self-center">
          <div className="h-5 w-16 bg-highlight rounded-lg"></div>
        </div>
      </div>
    );
  };
  
  export default MiniCardSkeleton