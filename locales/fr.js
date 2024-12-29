/* eslint-disable import/no-anonymous-default-export */
import common from "./fr/common"
import home from "./fr/home"
import career from "./fr/career"
import about from "./fr/about"
import contact from "./fr/contact"
import projects from "./fr/projects"

export default {
  ...common,
  ...home,
  ...career,
  ...projects,
  ...about,
  ...contact,
}
