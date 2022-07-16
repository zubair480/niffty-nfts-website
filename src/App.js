import "./App.css";
import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

function App() {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTS. Start selling and growing"
        description="Buy, Store, Collect NFT's, Exchange and Earn Crypto. Join 25 + million people using ProNef Market place"
        showBtn
        mockUpImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart user interface market place"
        description="Experience a buttery UI of throwNef NFT. Smooth constant colors of a UI design."
        mockUpImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices . You can easily get your app in people's hands. "
        mockUpImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens the first screen lists all NFTs, while the second one shows the details of the second NFT."
        mockUpImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">Zubair Zafar</span>
        </p>
      </div>
    </>
  );
}

export default App;
