import { SKILLS } from "@/lib/constants/skills"
import ScrollBannerComponent from "../Layouts/ScrollBannerComponent "

const InfiniteScrollBanner = () => {
  return <ScrollBannerComponent items={SKILLS} itemWidth={50} duration={5} />
}

export default InfiniteScrollBanner
