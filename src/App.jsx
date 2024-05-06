import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { LoginModal } from "./LoginModal";

function App() {
  return (
    <div>
      <LoginModal />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
