import React from "react";
import { Deck, Slide } from "spectacle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faShip,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

const PUBLIC_URL = "https://sugarmanz.github.io/kotlinx-serialization-presentation/"

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

const Link = ({ href, ...props }) => (
  <a href={href}><span className={`text-${props.color ?? "blue"}-600 font-semibold underline`} {...props} /></a>
);

const Emphasize = ({ children, className }) => (
  <span className={`text-purple-500 font-semibold ${className}`}>
    {children}
  </span>
);

const Step = ({ number, label, image, links, children }) => (
  <div className="flex items-center justify-center flex-col mb-8 w-full h-full">
    <div className="pr-4 mb-6 text-5xl text-gray-900 mx-20 text-center">
      {label}
    </div>

    {/* {description && <p className="text-2xl text-purple-200 font-light">
      description
    </p>} */}
    {children}

    <img
      alt=""
      className="max-w-4xl border-2 border-gray-300 rounded-lg h-auto"
      src={`${PUBLIC_URL}/${image}`}
      style={{ maxHeight: 500 }}
    />

    <br />

    {links && <div className="flex flex-col max-w-4xl justify-left items-left text-2xl">
      {links.map(link => (<div><Emphasize>- {link}</Emphasize></div>))}
    </div>}
  </div>
);

export const Label = ({ children, color, size = "xl" }) => (
  <span
    className={`bg-${color}-600 text-white px-2 py-1 rounded font-semibold text-${size} align-middle`}
  >
    {children}
  </span>
);

export const FrequentlyAskedQuestion = ({ question, answer }) => (
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
    <h1 className="text-6xl font-bold text-white">Kotlin Serialization</h1>

    <p className="text-2xl text-purple-200 font-light">
      With all the existing JVM serialization frameworks, why{" "}
      <Link href="https://github.com/kotlin/kotlinx.serialization" color="yellow">kotlinx.serialization</Link>?
    </p>
  </div>
);

const Setup = () => (
  <div className="mt-10 lg:mb-24 text-center flex items-center justify-center flex-col h-full">
    <h2 className="text-purple-900 text-4xl mb-12 mx-32 font-semibold">
      Choosing a serialization framework can be tricky
    </h2>


    <p className="max-w-2xl text-2xl text-gray-700">
      From my own experience, this usually ends up being an opinionated
      decision, heavily favoring whatever solution the team is most experienced
      with. Recently, I've had the opportunity to explore the idiomatic approach
      to serialization in <Emphasize>Kotlin</Emphasize> and am excited to share
      my learnings!
    </p>
  </div>
);

// const Competition = () => (
//   <div></div>
// )

const Description = ({ children }) => (
  <p className="text-lg text-gray-700 mb-6">{children}</p>
)

const Requirements = () => (
  <div className="mt-10 lg:mb-24 flex items-center justify-center flex-col h-full">
    <h2 className="text-purple-900 text-4xl mb-12 mx-32 font-semibold">
      What's already out there?
    </h2>
    <div className="h-full flex justify-around items-center flex-row text-gray-900">
      <div className="flex-1 lg:px-12">
        <Feature
          title="Gson"
          // icon={faBook}
          description="Popular, but JSON only. Unofficially deprecated as it doesn't handle `null` values gracefully."
        />

        <Feature
          title="Jackson"
          // icon={faShip}
          description=""
        />

        <Feature
          title="Moshi"
          // icon={faShip}
          description="JSON only?"
        />

        <Feature
          title="Maintainability & Open Source Readiness"
          // icon={faCheck}
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


const Tenets = () => (
  <div className="mt-10 lg:mb-24 flex items-center justify-center flex-col h-full">
    <h2 className="text-purple-900 text-4xl mb-12 mx-32 font-semibold">
      What does Kotlinx Serialization provide?
    </h2>
    <div className="h-full flex justify-around items-center flex-row text-gray-900">
      <div className="flex-1 lg:px-12">
        <Feature
          title="Idiomatic Kotlin Serialization"
          // icon={faBook}
          description="Fully supports and enforces the Kotlin type system, making sure only valid objects can be deserialized"
        />

        <Feature
          title="Multiplatform"
          // icon={faShip}
          description="Share data models and serializers between backend, frontend, and anywhere inbetween"
        />

        <Feature
          title="Multiformat"
          // icon={faCheck}
          description="Official JSON, HOCON, ProtoBuf, CBOR, and Properties formats. Many community-driven formats, i.e. YAML, XML, SharedPreferences, even Minecraft NBT"
        />

        <Feature
          title="Compiler Plugin"
          // icon={faShip}
          description="Reduce overhead, while still providing strictly typed, accurate serializers"
        />
      </div>

      <div className="flex-1 px-12 mb-20 lg:mb-0">
        <img
          src={`${PUBLIC_URL}/tenets.png`}
          alt="basic serialization"
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
      Slides are posted to <Link href="https://sugarmanz.github.io/kotlinx-serialization-presentation" color="yellow">https://sugarmanz.github.io/kotlinx-serialization-presentation</Link>
    </p>
  </div>
);

function App() {
  // title
  // setup -- problem statement
  // 1. potential solutions
  // - Gson
  // - Jackson
  // - Moshi
  // - Kotlinx Serialization
  // 2. Kotlinx Serialization Tenets
  //    - Explicit over implicit
  //    - Format agnostic serializers
  //    - Compiler plugin
  //    - Kotlin Multiplatform -- share data models
  //    - Integrtaions?
  // 3. Basic Serialization
  // 4. Built-ins
  // 5. Serializers 
  //    a. plugin generated
  //    b. custom
  // 6. Polymorphism
  // 7. Formats
  //    a. Json
  //    b. others + custom
  // 8. Questions
  //    a. Links
  // 9. Demo?
  return (
    <Deck>
      <Slide>
        <Title />
      </Slide>

      <Slide backgroundColor="white">
        <Setup />
      </Slide>

      {/* <Slide backgroundColor="white">
        <Requirements />
      </Slide> */}
      <Slide backgroundColor="white">
        <Tenets />
      </Slide>

      <Slide>
        <Topic name="Kotlinx Serialization" subtopics={["Basics", "Custom Serializers", "Formats"]} />
      </Slide>

      {/* 
        1. Distinction, even tho most use cases will only be concerned with serialization
        2. Backwards, decoding -> deserialization
        3. No substitute for docs
      */}
      <Slide backgroundColor="white">
        <Step label="Basics" image="pipeline.png" links={[
          <Link href="https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/serialization-guide.md">Serialization guide</Link>,
        ]}>
          <Description>
            The distinction between serialization and encoding is important
          </Description>
        </Step>
      </Slide>

      {/*
        1. Most basic built in classes have serializers
        2. Any class denoted with the Serializable annotation will have a serializer generated
        3. These serializers are registered on the companion object
        4. However, formats are able to infer serializer based on expected type
        5. Generic serializers
      */}
      <Slide backgroundColor="white">
        <Step label="Serializers" image="tenets.png" links={[
          <Link href="https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/builtin-classes.md#builtin-classes">Builtin serializers</Link>,
          <Link href="https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/serializers.md#plugin-generated-serializer">Plugin generated serializers</Link>,
          <Link href="https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/serializers.md#plugin-generated-generic-serializer">Generic serializers</Link>,
        ]} />
      </Slide>

      {/* 
        1. More involved for sure
        2. Powerful way to be able to represent data in different formats
        3. Well-written custom serializers are still format agnostic
        4. Throwable serializer
      */}
      <Slide backgroundColor="white">
        <Step label="Custom serializers" image="custom-serializer.png" links={[
          <Link href="https://github.com/Kotlin/kotlinx.serialization/blob/master/docs/serializers.md#custom-serializers">Custom serializers</Link>
        ]}><Description>Custom serializers require a bit more knowledge of encoding procedure</Description></Step>
      </Slide>

      <Slide>
        <Topic name="Polymorphic Serialization" />
      </Slide>

      <Slide>
        <Topic name="Bonus" subtopics={["package.json", "JS runtime ORM",]} />
      </Slide>

      <Slide>
        <Questions />
      </Slide>
    </Deck>
  );
}

export default App;
