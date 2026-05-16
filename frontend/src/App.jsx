import Header from "./components/Header";
import RegisterCard from "./components/RegisterCard";
import LoginCard from "./components/LoginCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-5xl">
        <Header />

        <div className="grid gap-6 md:grid-cols-2">
          <RegisterCard />
          <LoginCard />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;