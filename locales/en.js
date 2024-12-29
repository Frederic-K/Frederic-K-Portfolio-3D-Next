/* eslint-disable import/no-anonymous-default-export */
import common from "./en/common"
import home from "./en/home"
import career from "./en/career"
import about from "./en/about"
import contact from "./en/contact"
import projects from "./en/projects"

export default {
  ...common,
  ...home,
  ...career,
  ...projects,
  ...about,
  ...contact,
}
