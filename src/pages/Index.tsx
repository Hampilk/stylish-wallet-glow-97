
import WalletContainer from "@/components/WalletContainer";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Stylish Wallet Glow</h1>
        <p className="text-xl text-gray-300 mb-8">Glassmorphic wallet card design</p>
        
        {/* Showcase the WalletContainer */}
        <div className="flex justify-center">
          <WalletContainer />
        </div>
        
        <p className="text-sm text-gray-400 mt-8">
          Featuring complex gradients, backdrop blur, and sophisticated shadow effects
        </p>
      </div>
    </div>
  );
};

export default Index;
