// HomePage.tsx or Home.tsx
import Hero from './HomePage/Hero';
import Story from './HomePage/Story';
import Upcoming from './HomePage/Upcoming';
import TabView from './HomePage/Tabs';
import Spread from './HomePage/spread';
import Clients from './HomePage/Clients1';
import Insta from './HomePage/instapost';
import OurJourney from './HomePage/ourjourney'; // Corrected import
import Learn from './HomePage/learnmore';
import Diffence from './HomePage/Difference';
import BollywoodTestimonials from './HomePage/stars';
import TrustedByCouples from './HomePage/couple';
import FromTheDesk from './HomePage/Sumit';


export default function Home() {
  return (
    <main className="overflow-hidden bg-black">
      <Hero />
      <Story />
      <TrustedByCouples/>
      <Upcoming />
      <Diffence/>
      <Spread />
      <OurJourney />
      <BollywoodTestimonials/> 
    
      <FromTheDesk/>
      <TabView />
      <Learn />
      <Insta />
    </main>
  );
}
