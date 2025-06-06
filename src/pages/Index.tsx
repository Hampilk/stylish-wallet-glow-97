
import WalletContainer from "@/components/WalletContainer";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#171717] p-4">
      <div className="text-center">
        {/* Showcase the WalletContainer */}
        <div className="flex justify-center">
          <WalletContainer />
        </div>
      </div>
    </div>
  );
};

export default Index;
