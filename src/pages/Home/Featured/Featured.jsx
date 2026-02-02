import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading="Featured Item"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-400 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quibusdam corporis, saepe, quo ipsam dolorum, deserunt enim
            asperiores nihil sunt sint vero incidunt! Reiciendis, quasi? Maxime
            nihil dolorem possimus nam excepturi eius vel distinctio voluptate
            vero reiciendis? Ab nemo fuga excepturi modi corrupti, dolorum nisi
            ea quidem, minus, voluptatum placeat.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
