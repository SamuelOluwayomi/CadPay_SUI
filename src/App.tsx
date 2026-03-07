import { Navbar } from "./components/layout/Navbar";
import { WalletStatus } from "./WalletStatus";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <WalletStatus />
      </main>
    </div>
  );
}

export default App;
