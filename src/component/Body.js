import "./Body.css";
import Images from "../assets/index";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Toaster } from "../components/ui/toaster"
import { ToastAction } from "../components/ui/toast"
import { useToast } from "../components/ui/use-toast"
const Body = () => {
  const { toast } = useToast()
  return (
    <>
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        
      <NavLink
            to={"/productlistpage"}
            className={"button"}
            style={{ textDecoration: "none" }}
          >
            Explore
          </NavLink>
          <NavLink
            to={"/productpage/2/grey/64"}
            className={"button"}
            style={{ textDecoration: "none" }}
          >
            Nike Grey
          </NavLink>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src={Images.AmazonImg} alt="amazon-logo" />
            <img src={Images.Flipkart} alt="flipkart-logo" />
          </div>
          <Button
      onClick={() => {
        toast({
          title: "Added to cart",
          description: "Nike shoe added to cart",
          action: (
            <ToastAction  altText="Goto schedule to undo">Ok</ToastAction>
          ),
        })
      }}
    >
      Add to cart
    </Button>
        </div>
      <div className="hero-image">
        <img src={Images.HeroImg} alt="hero-image" />
      </div>
    </main>
    <Toaster /></>
  );
};
export default Body;
