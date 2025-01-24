import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { ExpandableCard } from "./Card";
import { title } from "process";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Quelques-uns de mes <span className="text-purple">projets</span>
      </h1>
      <div className="pt-20 grid items-center grid-cols-2 justify-center gap-10">
        {projects.map(({ id, title, img, des }) => (
          <div key={id} className="justify-center ">
            <PhotoProvider>
              <PhotoView src={img}>
                <img src={img} alt={title} />
              </PhotoView>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>
            </PhotoProvider>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
