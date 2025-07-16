"use client"

import React from "react"
import {motion} from "framer-motion"
import SectionHeading from "./SectionHeading"
import {useSectionInView} from "@/lib/hooks"
import {useLocale, useTranslations} from "next-intl"
import Link from "next/link";

export default function About() {
  const {ref} = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {/*<p className="mb-3">*/}
      {/*  My journey into programming kicked off during my undergrad in*/}
      {/*  <span className="font-medium italic">*/}
      {/*        {" "}*/}
      {/*    Digital Publishing*/}
      {/*      </span> at {}*/}
      {/*  <span className="italic underline">*/}
      {/*        <a*/}
      {/*          href="https://en.wikipedia.org/wiki/Wuhan_University"*/}
      {/*          target="_blank"*/}
      {/*        >*/}
      {/*          Wuhan University.*/}
      {/*        </a>*/}
      {/*      </span>{" "}*/}
      {/*  As a freshman, I got my feet wet with the basics of computer*/}
      {/*  science, databases, and Python. But what truly sparked my passion*/}
      {/*  was a course on semantic publishing—there, I used HTML and CSS to*/}
      {/*  create a webpage dedicated to my favorite figure skater,{" "}*/}
      {/*  <a*/}
      {/*    href="https://en.wikipedia.org/wiki/Yuzuru_Hanyu"*/}
      {/*    target="_blank"*/}
      {/*    className="italic underline"*/}
      {/*  >*/}
      {/*    Yuzuru Hanyu.{" "}*/}
      {/*  </a>*/}
      {/*  This experience opened my eyes to the charm of web development———*/}
      {/*  <span className="font-medium italic">*/}
      {/*        literally, you can build anything you envision with code.*/}
      {/*      </span>*/}
      {/*</p>*/}

      {/*<p className="mb-3">*/}
      {/*  I sharpened my front-end development skills through internships at*/}
      {/*  Internships at Wuhan University&apos;s Big Data Institute and later*/}
      {/*  at{" "}*/}
      {/*  <span className="italic underline">*/}
      {/*        <a href="https://www.nio.com/careers" target="_blank">*/}
      {/*          {" "}*/}
      {/*          NIO Inc.*/}
      {/*        </a>*/}
      {/*      </span>{" "}*/}
      {/*  Working closely with developers, designers, testers, and product*/}
      {/*  managers, I loved the buzz of a team pulling together to make our*/}
      {/*  product better. And there’s nothing quite like the thrill of seeing*/}
      {/*  my own code being used by thousands—it’s what solidified my decision*/}
      {/*  to pursue a career in front-end development.*/}
      {/*</p>*/}

      {/*<p className="mb-3">*/}
      {/*  I’m now doing my Masters in*/}
      {/*  <span className="font-medium italic"> Computing and IT</span> at the{" "}*/}
      {/*  <span className="italic underline">*/}
      {/*        <a href="https://www.st-andrews.ac.uk/" target="_blank">*/}
      {/*          University of St Andrews.{" "}*/}
      {/*        </a>*/}
      {/*      </span>*/}
      {/*  I thrive on programming challenges and enjoy working with teams to*/}
      {/*  solve complex problems. I specialize in technologies such as*/}
      {/*  <span className="font-medium italic"> React, Next.js and Vue</span>,*/}
      {/*  and have a solid understanding of{" "}*/}
      {/*  <span className="font-medium italic">*/}
      {/*        JavaScript, TypeScript and HTML/CSS*/}
      {/*      </span>*/}
      {/*  .{" "}*/}
      {/*</p>*/}

      {/*<p>*/}
      {/*  In my spare time, I enjoy exploring new technologies and building*/}
      {/*  interesting projects. I also run my social media accounts on*/}
      {/*  platforms like Bilibili and Xiaohongshu, where I share tech tips and*/}
      {/*  tricks. And when I’m not at the computer, you’ll find me*/}
      {/*  <span className="font-medium italic">*/}
      {/*        {" "}*/}
      {/*    cooking up a storm, catching a movie, or keeping fit with regular*/}
      {/*        workouts.*/}
      {/*      </span>*/}
      {/*</p>*/}
      <p>
        As a college student, I embraced the world about Computer Science: <i>Principles of Computer Systems</i>,
        <i>Algorithms and Data Structures</i>, <i>Computer Network</i>and etc. At the sametime I've learnt many of
        programming languages during the day, such as
        <i> C</i>, <i>Java</i>, <i>SQL</i>, <i>JavaScript</i> and <i>Python</i>.
      </p>
      <br/>
      <p>
        My GPA was 3.5 in college time. Computer Science truly sparked my passion. I participated several competitions,
        like an algorithm design competition, call <Link
        href='https://news.gcc.edu.cn/mtsj/53df5e37dcff4a199cc76f8930ab3ea2.htm' style={{textDecoration: 'underline'}}>Lanqiao
        Cup</Link>,
        and won a second class prize. And join the group to refactor <Link href='https://www.gcc.edu.cn/'
                                                                           style={{textDecoration: 'underline'}}>college
        website</Link> as a FrontEnd developer.
      </p>
    </motion.section>
  )
}
