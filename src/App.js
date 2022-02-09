import React from "react";
import { Deck, Slide } from "spectacle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFireAlt,
  faBook,
  faAtom,
  faBacon,
  faShip,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const PUBLIC_URL = "https://sugarmanz.github.io/kotlin-tooling-presentation/"

const Feature = ({ title, description, icon }) => (
  <div className="mb-8 flex items-start last:mb-0">
    <div className="rounded bg-yellow-500 p-3 text-yellow-100 mr-5">
      <FontAwesomeIcon height={24} icon={icon} />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  </div>
);

const Link = props => (
  <a {...props}><span className={`text-${props.color ?? "blue"}-600 font-semibold underline`} {...props} /></a>
);

const Emphasize = ({ children, className }) => (
  <span className={`text-purple-500 font-semibold ${className}`}>
    {children}
  </span>
);

const Step = ({ number, label, image, links }) => (
  <div className="flex items-center justify-center flex-col mb-8 w-full h-full">
    <div className="pr-4 mb-6 text-5xl text-gray-900 mx-20 text-center">
      {label}
    </div>

    <img
      alt=""
      className="max-w-4xl border-2 border-gray-300 rounded-lg h-auto"
      src={`${PUBLIC_URL}/${image}`}
    />

    <br />

    {links && <div className="flex flex-col max-w-4xl justify-left items-left text-2xl">
      {links.map(link => (<div><Emphasize>- {link}</Emphasize></div>))}
    </div>}
  </div>
);

const Label = ({ children, color, size = "xl" }) => (
  <span
    className={`bg-${color}-600 text-white px-2 py-1 rounded font-semibold text-${size} align-middle`}
  >
    {children}
  </span>
);

const FrequentlyAskedQuestion = ({ question, answer }) => (
  <div className="mx-20 h-full flex flex-col justify-center">
    <h4 className="font-normal text-6xl mb-6 text-gray-700">{question}</h4>
    <p className="text-grey-800 text-3xl leading-relaxed">{answer}</p>
  </div>
);

const Title = () => (
  <div
    className="bg-indigo-600 w-full h-full flex justify-center flex-col items-center text-center absolute"
    style={{ margin: -32 }}
  >
    <h1 className="text-6xl font-bold text-white">Publishing a Kotlin Library</h1>

    <p className="text-2xl text-purple-200 font-light">
      We know the language is awesome, but what about{" "}
      <span className="text-yellow-500 font-semibold">publication tooling?</span>
    </p>
    {/* TODO: Maybe reframe to how to publish quality software? */}
  </div>
);

const Setup = () => (
  <div className="mt-10 lg:mb-24 text-center flex items-center justify-center flex-col h-full">
    <h2 className="text-purple-900 text-4xl mb-12 mx-32 font-semibold">
      Using a cool language shouldn't come at the expense of quality tools
    </h2>


    <p className="max-w-2xl text-2xl text-gray-700">
      Thankfully, the <Emphasize>Kotlin</Emphasize> community considers tooling
      to be an integral part of the language ecosystem. Let's take a look at
      some of the tooling I discovered and was able to use for the{" "}
      <Link href="https://intuit.github.io/hooks">Hooks</Link> project.
    </p>
  </div>
);

const Requirements = () => (
  <div className="mt-10 lg:mb-24 flex items-center justify-center flex-col h-full">
    <h2 className="text-purple-900 text-4xl mb-12 mx-32 font-semibold">
      What are we aiming for?
    </h2>
    <div className="h-full flex justify-around items-center flex-row text-gray-900">
      <div className="flex-1 lg:px-12">
        <Feature
          title="Quality Documentation"
          icon={faBook}
          description="For libraries that are consumed and expose an API, usage docs and API
            docs are important to ensure your code can be used without frustration!"
        // Dokka for API docs
        // Orchid for usage docs
        // Testing documentation knit
        />

        <Feature
          title="Stable Releases"
          icon={faShip}
          description="Protect your consumers from errant releases and ensure releases follow
            strict versioning patterns."
        // Auto
        // binary compatibility
        />

        <Feature
          title="Maintainability & Open Source Readiness"
          icon={faCheck}
          description="Set the project up for success by defining & enforcing standards to
            follow when making a contribution. This includes formatting, testing, documentation..."
        // ktlint
        // detekt
        // license check on PR
        />
      </div>

      {/* TODO: Maybe simple pipeline? */}

      <div className="flex-1 px-12 mb-20 lg:mb-0">
        <img
          src={`${PUBLIC_URL}/documentation.png`}
          alt="documentation example"
          className="border border-grey-600 rounded-lg p-4 shadow-md"
          style={{ maxHeight: 500 }}
        />
      </div>
    </div>
  </div>
);

const Topic = ({ name, subtopics = [] }) => (
  <div
    className="bg-indigo-600 w-full h-full flex justify-center flex-col items-center absolute"
    style={{ margin: -32 }}
  >
    <h1 className="text-6xl font-bold text-white">{name}</h1>

    <p className="text-2xl text-yellow-500 font-semibold">
      <ul>
        {subtopics.map(subtopic => <li>- {subtopic}</li>)}
      </ul>
    </p>
  </div>
);

const Questions = () => (
  <div
    className="bg-indigo-600 w-full h-full flex justify-center flex-col items-center text-center absolute"
    style={{ margin: -32 }}
  >
    <h1 className="text-6xl font-bold text-white">Questions?</h1>

    <p className="text-2xl text-purple-200 font-light">
      Slides are posted to <Link href="https://sugarmanz.github.io/kotlin-tooling-presentation" color="yellow">https://sugarmanz.github.io/kotlin-tooling-presentation</Link>
    </p>
  </div>
);

function App() {
  // title
  // setup
  // requirements
  // 1. documentation
  // 1a. dokka - api docs
  // 1b. orchid - usage docs (markdown)
  // 1c. knit - testing your usage docs
  // 2. publishing
  // 2a. auto (not really kotlin, but...)
  // 2b. binary compatibility
  // 2c. deprecation
  // 3. OSS
  // 3a. ktlint
  // 3b. detekt
  // 3c. fossa
  // maybe brief sonatype preview?
  // 4. intuit OSS process?
  // 5. questions? 
  return (
    <Deck>
      <Slide>
        <Title />
      </Slide>

      <Slide backgroundColor="white">
        <Setup />
      </Slide>

      <Slide backgroundColor="white">
        <Requirements />
      </Slide>

      <Slide>
        <Topic name="Documentation" subtopics={["API Docs", "Usage Docs", "Doc Verification"]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="API Docs: Dokka" image="dokka.png" links={[
          <Link href="https://kotlinlang.org/docs/kotlin-doc.html">KDoc Reference</Link>,
          <Link href="https://intuit.github.io/hooks/kotlindoc/hooks/com/intuit/hooks/">Hooks API Docs</Link>,
        ]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="Usage Docs: Orchid" image="orchid.png" links={[
          <Link href="https://orchid.run/">Orchid Reference</Link>,
          <Link href="https://intuit.github.io/hooks/">Hooks Docs Site</Link>,
        ]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="Docs Verification: Kotlinx Knit" image="knit.png" links={[
          <Link href="https://github.com/Kotlin/kotlinx-knit">Kotlinx Knit Github</Link>,
          <Link href="https://github.com/intuit/hooks/tree/master/docs/src/test/kotlin/example/example-synchook-01.kt">example-synchook-01.kt</Link>,
        ]} />
      </Slide>

      <Slide>
        <Topic name="Releases" subtopics={["Semantic Versioning w/ Auto", "Binary Compatibility", "Deprecation"]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="Semantic Versioning w/ Auto" image="auto.png" links={[
          <Link href="https://github.com/intuit/auto">Auto Github</Link>,
          <Link href="https://intuit.github.io/hooks/changelog/">Hooks Changelog</Link>,
        ]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="Binary Compatibility" image="api.png" links={[
          <Link href="https://github.com/Kotlin/binary-compatibility-validator">Binary Compatibility Validator Github</Link>,
          <Link href="https://github.com/intuit/hooks/blob/main/hooks/api/hooks.api">Hooks API</Link>,
        ]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="Deprecation" image="deprecation-replace.png" links={[
          <Link href="https://todd.ginsberg.com/post/kotlin/deprecation/">"Enhanced Deprecation in Kotlin"</Link>,
        ]} />
      </Slide>

      <Slide>
        <Topic name="Maintainability" subtopics={["Linting", "Static Analysis", "Contributions"]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="ktlint" image="ktlint.png" links={[
          <Link href="https://github.com/pinterest/ktlint">ktlint Github</Link>,
        ]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="detekt" image="detekt.png" links={[
          <Link href="https://github.com/detekt/detekt">detekt Github</Link>,
        ]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="License Check: Fossa" image="fossa.png" links={[
          <Link href="https://fossa.com/">Fossa</Link>,
          <Link href="https://app.fossa.com/projects/custom%2B23410%2Fgit%40github.com%3Aintuit%2Fhooks/refs/branch/master/a1a5365b7e6c686b7026d48ff63c30a4f80b30ca/preview">Hooks Fossa Report</Link>
        ]} />
      </Slide>

      <Slide>
        <Topic name="Bonus" subtopics={["Simple Pipeline", "Minimal Configuration", "Intuit OSS Guidelines"]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="Simple Pipeline" image="pipeline.png" links={[
          <Link href="https://github.com/intuit/hooks/blob/main/.circleci/config.yml">Hooks Circle CI Pipeline</Link>,
          <Link href="https://github.com/intuit/hooks/blob/main/build.gradle.kts#L62">Hooks Gradle Publish Task</Link>,
        ]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="Sonatype Configuration" image="sonatype.png" links={[
          <Link href="https://github.com/gradle-nexus/publish-plugin">Gradle Nexus Publish Plugin Github</Link>,
          <Link href="https://github.com/intuit/hooks/blob/main/build.gradle.kts#L48">Sonatype Plugin Configuration</Link>,
          <Link href="https://issues.sonatype.org/browse/OSSRH-65077">Sonatype JIRA Ticket</Link>,
        ]} />
      </Slide>

      <Slide backgroundColor="white">
        <Step label="Intuit OSS Process" image="oss.png" links={[
          <Link href="https://github.intuit.com/pages/open-source/OSSContributionProcess/">Intuit OSS Contribution Process</Link>,
        ]} />
      </Slide>

      <Slide>
        <Questions />
      </Slide>
    </Deck>
  );
}

export default App;
