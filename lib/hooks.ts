import {SectionName, useActiveSectionContext} from "@/context/action-section-context";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const {ref, inView} = useInView({
    threshold
  })

  const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

  useEffect(() => {
    console.log(sectionName, inView, Date.now() - timeOfLastClick);
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref
  }
}