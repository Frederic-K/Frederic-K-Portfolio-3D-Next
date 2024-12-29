import Image from "next/image"
import CarouselComponent from "../Layouts/CarouselComponent"
import clsx from "clsx"
import { SOFTSKILLSLIST } from "@/lib/constants"

const SoftSkillCarousel = ({ className }) => {
  return (
    <>
      <CarouselComponent
        className={clsx(className, "relative")}
        items={SOFTSKILLSLIST}
        interval={4000}
        imageWidth={175}
        imageHeight={175}
      />
      <Image
        src={"/images/project/backgroundCube.webp"}
        alt="backgroundCube"
        layout="fill"
        objectFit="cover"
        className={clsx(
          "pointer-events-none",
          "absolute",
          "inset-0",
          "h-full",
          "w-full",
          "object-cover",
          "opacity-15"
        )}
      />
    </>
  )
}

export default SoftSkillCarousel
