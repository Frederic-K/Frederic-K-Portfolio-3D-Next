import {
  Contact,
  FileUser,
  Github,
  GraduationCap,
  Building2,
  HomeIcon,
  Linkedin,
  NotebookPen,
  Palette,
  Mail,
  ScrollTextIcon,
  CircleUserRound,
} from "lucide-react"

export const NAVMENU_LINKS = [
  { id: "home", path: "/", labelKey: "common.navBarLinks.home" },
  { id: "career", path: "/career", labelKey: "common.navBarLinks.career" },
  {
    id: "projects",
    path: "/projects",
    labelKey: "common.navBarLinks.projects",
  },
  { id: "about", path: "/about", labelKey: "common.navBarLinks.about" },
  { id: "contact", path: "/contact", labelKey: "common.navBarLinks.contact" },
]

export const NAVBUTTON_LINKS = [
  {
    id: "Frederic-K's Blog",
    link: "https://frederic-k-blog.onrender.com/",
    labelKey: "homePage.navBtnLinks.blog",
    icon: NotebookPen,
    newTab: true,
  },
  {
    id: "career",
    link: "/career",
    labelKey: "homePage.navBtnLinks.career",
    icon: Building2,
    newTab: false,
  },
  {
    id: "projects",
    link: "/projects",
    labelKey: "homePage.navBtnLinks.projects",
    icon: Palette,
    newTab: false,
  },
  {
    id: "about",
    link: "/about",
    labelKey: "homePage.navBtnLinks.about",
    icon: CircleUserRound,
    newTab: false,
  },
  {
    id: "contact",
    link: "/contact",
    labelKey: "homePage.navBtnLinks.contact",
    icon: Mail,
    newTab: false,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/frédéric-kreuder",
    labelKey: "homePage.navBtnLinks.linkedin",
    icon: Linkedin,
    newTab: true,
  },
  {
    id: "github",
    link: "https://github.com/Frederic-K",
    labelKey: "homePage.navBtnLinks.github",
    icon: Github,
    newTab: true,
  },
  {
    id: "resume",
    link: "/resume/FK_CV_SoftwareDev_FR_1.pdf",
    labelKey: "homePage.navBtnLinks.resume",
    icon: ScrollTextIcon,
    newTab: true,
  },
]
