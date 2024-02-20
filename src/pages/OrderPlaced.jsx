import Images from "../assets/index";
export default function OrderPlaced() {
  return (
    <div className=" bg-orange-700 h-screen p-10 mt-10">
      <div className="bg-black p-10 flex flex-col  items-center ">
        <img className="size-64" src={Images.success}></img>
        <img className="h-64 w-[400px]" src={Images.successImg}></img>
      </div>
    </div>
  );
}
