/* eslint-disable react/no-unescaped-entities */
"use client";

import { Merriweather } from "next/font/google";
import "animate.css";
import QuoteCard, { SplashScreen } from "@/components/QuoteCard/QuoteCard";
import { useEffect, useState } from "react";
import StoicAccordion from "@/components/Accordion/StoicAccordion";
import { BackgroundGradient } from "@/components/Background/BackgroundGradient";
import { useQuoteStore } from "@/store/quote-store";

const merriWeather = Merriweather({ weight: "400", subsets: ["latin"] });

export default function Page() {
  const { TodaysQuote, fetchTodaysQuote } = useQuoteStore();
  const [isQuoteLoading, setIsQuoteLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(NaN);

  useEffect(() => {
    const fetchData = async () => {
      
      await fetchTodaysQuote();
      setIsQuoteLoading(false);
    };

    fetchData();
  }, [fetchTodaysQuote]);

  
  return (
    <div>
      {isQuoteLoading ? (
        <SplashScreen />
      ) : (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-4 lg:p-8 shadow-2xl z-10">
          <div
            id="quote"
            className="bg-gradient-to-b from-black-950 via-blue-800 to-black-950 p-4 sm:p-18 md:p-24 rounded-xl shadow-lg max-w-7xl"
          >
            <h1
              className={`relative  text-3xl md:text-6xl font-bold text-center mb-20 text-blue-500  z-10 ${merriWeather.className} animate__animated animate__zoomInLeft`}
            >
              Todays Quote
            </h1>
            <div>
              <QuoteCard />
            </div>
          </div>
          <div id="history" className={`my-40`}>
            <div
              className={`font-extrabold  text-4xl md:text-6xl text-center text-blue-500 p-4 ${merriWeather.className} scroll-m-20`}
            >
              The History of Stoicism: Origins and Early Development
            </div>
            <div className=" m-3 max-w-7xl mx-auto text-lg leading-relaxed  p-6 bg-gradient-to-r  rounded-xl animate__animated animate__fadeIn ">
              <BackgroundGradient className="text-justify indent-8 first-letter:font-extrabold first-letter:text-4xl first-letter:mr-2 text-sm md:text-xl rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <p>
                  <strong>Stoicism</strong>, a philosophical school founded in
                  ancient Greece, emerged as a guiding beacon amid the
                  tumultuous waves of Hellenistic thought. Its origins can be
                  traced back to <em>Zeno of Citium</em>, a Greek philosopher
                  who established the foundational principles in the early 3rd
                  century BCE. Zeno's teachings were profoundly influenced by
                  earlier schools such as <strong>Cynicism</strong> and{" "}
                  <strong>Megarian philosophy</strong>, yet Stoicism carved its
                  distinctive path through its emphasis on virtue, reason, and
                  living in accordance with nature.
                </p>
                <br />
                <p>
                  <em>Zeno of Citium</em>, often regarded as the founder of
                  Stoicism, laid down the framework that subsequent thinkers
                  would expand upon. His conception of philosophy as a practical
                  guide for daily life resonated deeply with his followers, who
                  sought wisdom not merely for intellectual pursuit but for its
                  transformative power in personal conduct and societal
                  engagement. Zeno's teachings centered on the cultivation of
                  virtue, particularly wisdom, justice, courage, and moderation,
                  as the path to <em>eudaimonia</em> — a state of flourishing
                  and fulfillment.
                </p>
                <br />
                <p>
                  One of Zeno's notable successors, <em>Cleanthes</em>, further
                  developed Stoic thought during his tenure as the second head
                  of the Stoa. Cleanthes expanded on Zeno's doctrines,
                  particularly refining the Stoic understanding of theology and
                  the natural order. He famously expressed Stoic principles in
                  his <strong>"Hymn to Zeus"</strong>, celebrating the divine
                  reason (<em>logos</em>) that permeates the cosmos and guides
                  human affairs.
                </p>
                <br />
                <p>
                  <em>Chrysippus</em>, another pivotal figure in Stoic
                  philosophy, significantly expanded and systematized the
                  teachings of his predecessors. His prolific writings and
                  logical acumen helped establish Stoicism as a formidable
                  philosophical system. Chrysippus developed the Stoic theory of
                  knowledge, emphasizing the role of logic in understanding the
                  natural world and distinguishing between what is within our
                  control (the rational faculty) and what is not (external
                  events).
                </p>
                <br />
                <p>
                  The practical application of Stoic philosophy found exemplars
                  in figures like <strong>Cato the Younger</strong>, a Roman
                  statesman renowned for his unwavering commitment to Stoic
                  principles during the political turmoil of the late Roman
                  Republic. Cato embodied Stoic virtues of integrity,
                  resilience, and moral rectitude, influencing subsequent
                  generations through his steadfast opposition to tyranny and
                  corruption.
                </p>
                <br />
                <p>
                  <strong>Diogenes of Babylon</strong>, a Stoic philosopher of
                  the 2nd century BCE, contributed to Stoic ethics by advocating
                  for a nuanced understanding of moral responsibility and the
                  cultivation of virtuous character. His teachings emphasized
                  the importance of self-examination and living in harmony with
                  nature, echoing Zeno's original vision while adapting it to
                  the complexities of contemporary life.
                </p>
                <br />
                <p>
                  In Rome, the Stoic school flourished under the patronage of
                  influential figures such as <strong>Seneca</strong>,{" "}
                  <strong>Epictetus</strong>, and{" "}
                  <strong>Marcus Aurelius</strong>. Seneca, a statesman and
                  Stoic philosopher, provided timeless insights into ethics and
                  human nature through his letters and essays. His writings
                  addressed practical aspects of Stoic living, offering guidance
                  on coping with adversity and embracing virtue in the face of
                  personal challenges.
                </p>
                <br />
                <p>
                  <em>Epictetus</em>, born a slave in the Roman Empire, rose to
                  prominence as a Stoic teacher whose discourses emphasized
                  personal transformation through disciplined thought and
                  action. His teachings, compiled by his student Arrian in the{" "}
                  <em>Discourses</em> and the <em>Enchiridion</em>, remain
                  foundational texts in Stoic literature, focusing on the
                  cultivation of inner resilience and moral clarity.
                </p>
                <br />
                <p>
                  <em>Marcus Aurelius</em>, the Roman Emperor and
                  philosopher-king, exemplified Stoic principles in governance
                  and personal conduct. His <em>Meditations</em> reveal
                  introspective reflections on duty, humility, and the
                  acceptance of fate — offering a glimpse into the mind of a
                  ruler who strove to reconcile Stoic philosophy with the
                  responsibilities of imperial power.
                </p>
                <br />
                <p>
                  Throughout its history, Stoicism evolved from its origins in
                  Athens to become a philosophy that transcended cultural
                  boundaries, influencing thinkers across centuries and
                  continents. Its enduring appeal lies in its practical wisdom,
                  offering a moral framework for navigating life's uncertainties
                  with courage, reason, and a commitment to virtuous living. As
                  Stoic principles continue to resonate in modern discourse,
                  their relevance underscores the enduring legacy of this
                  ancient philosophical tradition.
                </p>
                <br />
                <h2>
                  <strong>
                    Stoicism in the Roman Empire: Flourishing and Expansion
                  </strong>
                </h2>
                <br />
                <p>
                  Stoicism reached its zenith during the Roman Empire, where it
                  found fertile ground among intellectuals, statesmen, and
                  emperors alike. The philosophy's pragmatic approach to ethics,
                  resilience in the face of adversity, and emphasis on personal
                  virtue resonated deeply within the Roman ethos of duty and
                  honor.
                </p>
                <br />
                <p>
                  <strong>Seneca</strong>, a towering figure in Stoic
                  literature, wielded his pen with eloquence and practical
                  wisdom. His letters and essays, collected in works such as{" "}
                  <em>Letters to Lucilius</em> and{" "}
                  <em>On the Shortness of Life</em>, impart timeless insights
                  into human nature and the pursuit of virtue. Seneca emphasized
                  the importance of inner tranquility and moral integrity,
                  stating:
                </p>
                <br />
                <p>
                  <q>He who is brave is free.</q> –{" "}
                  <em>Seneca, Letters to Lucilius</em>
                </p>
                <br />
                <p>
                  Seneca's writings served not only as philosophical treatises
                  but also as practical guides for navigating the complexities
                  of life under the Roman Empire. As a statesman, Seneca tutored
                  the young Emperor Nero, seeking to instill Stoic principles in
                  a ruler whose reign would be marked by moral and political
                  challenges.
                </p>
                <br />
                <p>
                  <strong>Epictetus</strong>, born into slavery and later freed,
                  imparted Stoic teachings with a focus on personal agency and
                  moral clarity. His <em>Discourses</em> and{" "}
                  <em>Enchiridion</em> expound upon the Stoic virtues of wisdom,
                  justice, courage, and moderation, urging individuals to
                  cultivate inner resilience and to distinguish between what is
                  within their control and what is not:
                </p>
                <br />
                <p>
                  <q>
                    Some things are within our power, while others are not.
                    Within our power are opinion, motivation, desire, aversion,
                    and, in a word, whatever is of our own doing; not within our
                    power are our body, our property, reputation, office, and,
                    in a word, whatever is not of our own doing.
                  </q>{" "}
                  – <em>Epictetus, Enchiridion</em>
                </p>
                <br />
                <p>
                  Epictetus's teachings resonated with audiences seeking
                  practical advice on living a virtuous life amidst adversity.
                  His emphasis on ethical consistency and mental discipline
                  continues to influence modern discussions on resilience and
                  personal development.
                </p>
                <br />
                <p>
                  <em>Marcus Aurelius</em>, the last of the{" "}
                  <q>Five Good Emperors</q> of Rome, exemplified Stoic
                  principles in both his personal life and his governance. His{" "}
                  <em>Meditations</em>, written as a series of personal
                  reflections, reveal a ruler deeply committed to Stoic ethics
                  and self-improvement. Marcus Aurelius reflected on the
                  transient nature of life and the importance of moral
                  integrity:
                </p>
                <br />
                <p>
                  <q>
                    The happiness of your life depends upon the quality of your
                    thoughts.
                  </q>{" "}
                  – <em>Marcus Aurelius, Meditations</em>
                </p>
                <br />
                <p>
                  As emperor, Marcus Aurelius faced numerous challenges, from
                  military campaigns to political intrigues. His Stoic
                  philosophy guided his decisions, emphasizing duty and service
                  to the Roman people above personal gain or ambition.
                </p>
                <br />
                <p>
                  <strong>Hecato</strong> of Rhodes, a Stoic philosopher known
                  for his emphasis on self-sufficiency and moral integrity,
                  contributed to Stoic ethics through his writings and
                  teachings. Although few of his works survive today, Hecato's
                  ideas influenced later Stoic thinkers and underscored the
                  importance of personal autonomy and ethical consistency.
                </p>
                <br />
                <p>
                  The spread of Stoicism throughout the Roman Empire owed much
                  to its adaptability and practical appeal. Stoic principles
                  resonated with individuals seeking guidance in times of
                  political instability, economic uncertainty, and personal
                  adversity. The philosophy's emphasis on virtue, reason, and
                  the acceptance of fate provided a moral compass for navigating
                  life's challenges with resilience and integrity.
                </p>
                <br />
                <p>
                  Stoicism's evolution during the Roman Empire marked a pinnacle
                  of philosophical achievement, with thinkers like Seneca,
                  Epictetus, and Marcus Aurelius shaping its ethical framework
                  and demonstrating its enduring relevance in the face of
                  adversity. Their writings continue to inspire individuals
                  seeking wisdom and moral clarity in an ever-changing world,
                  testament to Stoicism's timeless appeal as a practical
                  philosophy of life.
                </p>
                <br />
                <h2>
                  <strong>
                    Stoicism's Legacy and Influence: Late Antiquity to Modern
                    Revival
                  </strong>
                </h2>
                <br />
                <p>
                  Stoicism, with its emphasis on reason, virtue, and resilience,
                  continued to resonate beyond the Roman Empire, leaving a
                  profound legacy that endured through the turmoil of Late
                  Antiquity and into the modern era. The philosophy evolved and
                  adapted to new cultural and intellectual landscapes,
                  influencing diverse thinkers and movements along the way.
                </p>
                <br />
                <p>
                  <strong>Late Antiquity and Early Christianity:</strong>
                </p>
                <br />
                <p>
                  During Late Antiquity, Stoicism intersected with the rise of
                  Christianity, contributing to philosophical and theological
                  debates
                </p>
              </BackgroundGradient>
            </div>
          </div>
          <div id="biographies">
            <StoicAccordion />
          </div>

          <div
            id="exercises"
            className=" m-3 max-w-7xl mx-auto text-lg leading-relaxed  p-6 bg-gradient-to-r  rounded-xl animate__animated animate__fadeIn"
          >
            <div
              className={`font-extrabold  text-4xl md:text-6xl text-center text-blue-500 p-4 ${merriWeather.className} scroll-m-20`}
            >
              Exercises of Stoicism
            </div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Morning Meditation
            </h2>
            <p className="mb-4">
              In the soft embrace of early morning light,{" "}
              <strong>morning meditation</strong> unfolds as a gentle ritual of
              grounding and introspection—a serene pause before the day's
              symphony begins. For those drawn to the stoic philosophy, it
              becomes a sacred space where clarity meets intention, where the
              mind awakens to embrace the day with purpose and resilience. Like
              the first brushstroke on a canvas, <em>morning meditation</em>{" "}
              sets the tone for a day woven with threads of mindfulness and
              inner strength.
            </p>
            <p className="mb-4">
              At its essence, <strong>morning meditation</strong> offers a
              sanctuary amidst the hustle and bustle of daily life. It invites
              individuals to quiet the clamor of the external world and turn
              inward, where thoughts and emotions find a harmonious balance.
              This practice nurtures a deeper connection to oneself and
              cultivates a sense of presence—a cornerstone of stoic teachings
              that champions awareness and acceptance of the present moment.
            </p>
            <p className="mb-4">
              <strong>Morning meditation</strong> serves as a beacon of clarity
              in navigating life's uncertainties. It empowers individuals to
              approach challenges with equanimity and grace, fostering a mindset
              grounded in stoic virtues of wisdom, courage, and temperance. By
              starting the day with intentional reflection, practitioners
              fortify themselves against the turbulence of external
              circumstances, embracing each moment as an opportunity for growth
              and moral refinement.
            </p>
            <p className="mb-4">
              In the quiet solitude of <strong>morning meditation</strong>,
              stoic philosophy finds resonance. It encourages individuals to
              cultivate resilience and emotional fortitude, preparing them to
              face adversity with calm resolve. By nurturing a tranquil mind and
              a steadfast spirit, <em>morning meditation</em> becomes a
              cornerstone for living authentically—a practice that transcends
              routine and becomes a testament to the enduring quest for inner
              peace and ethical clarity.
            </p>

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Journaling
            </h2>
            <p className="mb-4">
              In the quiet hours before dawn, <strong>journaling</strong>{" "}
              unfolds as a voyage of self-discovery—an intimate dialogue between
              pen and paper that transcends the mundane and delves into the
              depths of the soul. For those drawn to the stoic philosophy, it
              becomes a daily ritual of introspection and growth, a means to
              weave the fabric of daily experiences into a tapestry of wisdom
              and resilience. Like a map to the inner self, <em>journaling</em>{" "}
              invites individuals to navigate the labyrinth of thoughts and
              emotions with clarity and purpose.
            </p>
            <p className="mb-4">
              At its heart, <strong>journaling</strong> serves as a sanctuary
              where thoughts find refuge and insights blossom. It offers a
              canvas to chronicle the journey of personal evolution—a journey
              shaped by the Stoic virtues of wisdom, courage, justice, and
              moderation. Through the art of writing, individuals distill
              fleeting moments into timeless reflections, uncovering profound
              truths about themselves and the world around them.
            </p>
            <p className="mb-4">
              <strong>Journaling</strong> becomes a compass for aligning actions
              with values. It prompts individuals to scrutinize their decisions
              and behaviors with honesty and introspection, fostering a deeper
              understanding of how Stoic principles can be applied in everyday
              life. By documenting challenges and triumphs alike,{" "}
              <em>journaling</em> empowers individuals to cultivate resilience
              and fortitude, forging a path toward ethical integrity and inner
              peace.
            </p>
            <p className="mb-4">
              In the tapestry of daily existence, <strong>journaling</strong>{" "}
              offers a haven for gratitude and mindfulness. It invites
              individuals to celebrate moments of joy and acknowledge lessons
              learned from adversity, cultivating a spirit of resilience and
              gratitude. By capturing the nuances of life's journey,{" "}
              <em>journaling</em> becomes a testament to the transformative
              power of reflection—a tool for growth and self-discovery that
              transcends the boundaries of time and space.
            </p>

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Practicing Virtue
            </h2>
            <p className="mb-4">
              <strong>Practicing virtue</strong> each day is akin to tending to
              a garden of the soul, where seeds of integrity and moral fortitude
              are sown with deliberate care. It is in the small, everyday
              choices that one shapes the essence of their character, weaving a
              tapestry of actions guided by principles of wisdom, courage,
              justice, and moderation. Like a steady current in the river of
              life, <em>virtue</em> serves as a compass, guiding individuals
              through the complexities of human interactions with grace and
              ethical clarity.
            </p>
            <p className="mb-4">
              Embracing <strong>virtue</strong> isn't merely an aspiration but a
              commitment to living authentically and in alignment with one's
              deepest values. It calls upon individuals to navigate the
              labyrinth of moral dilemmas with steadfast resolve, making
              decisions that honor the inherent dignity of oneself and others.
              In these daily acts of integrity and kindness, <em>virtue</em>{" "}
              becomes a beacon of light, illuminating the path toward personal
              growth and communal harmony.
            </p>
            <p className="mb-4">
              The practice of <strong>virtue</strong> fosters resilience in the
              face of adversity, empowering individuals to confront challenges
              with grace and equanimity. Stoic philosophy teaches that true
              strength lies not in avoiding difficulties but in meeting them
              with a steadfast spirit and a clear conscience. By cultivating
              virtues such as patience, compassion, and humility, individuals
              forge a resilient foundation that withstands the tests of time and
              circumstance.
            </p>
            <p className="mb-4">
              In the quiet moments of reflection, <strong>virtue</strong> offers
              a sanctuary where one can examine their actions and intentions
              with honesty and humility. It invites individuals to strive for
              excellence in every aspect of life, from personal relationships to
              professional endeavors. By embodying virtues consistently, one
              nurtures a sense of inner peace and fulfillment, fostering a life
              rich in meaning and purpose.
            </p>

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Practicing Mindfulness
            </h2>
            <p className="mb-4">
              In the hustle and bustle of modern life,{" "}
              <strong>practicing mindfulness</strong> emerges as a sanctuary of
              stillness amidst the chaotic rhythm of the day. For those drawn to
              the principles of Stoic philosophy, <em>mindfulness</em> offers a
              quiet refuge—a moment to anchor oneself in the present and embrace
              life’s unfolding chapters with clarity and grace. Like a gentle
              breeze through the branches of an ancient oak,{" "}
              <strong>mindfulness</strong> invites individuals to tune into
              their thoughts and emotions without judgment, fostering a deep
              sense of self-awareness and inner tranquility.
            </p>
            <p className="mb-4">
              At its core, <strong>mindfulness</strong> becomes a compass
              guiding individuals through the labyrinthine corridors of their
              minds. It encourages a heightened sensitivity to the nuances of
              everyday experiences, from the warmth of morning sunlight on skin
              to the gentle rustle of autumn leaves underfoot. By savoring these
              fleeting moments with mindful awareness, practitioners of Stoicism
              cultivate a profound appreciation for the richness of life’s
              tapestry—a tapestry woven with threads of joy, sorrow, and
              everything in between.
            </p>
            <p className="mb-4">
              Moreover, <strong>mindfulness</strong> serves as a catalyst for
              cultivating resilience and emotional fortitude. Stoicism teaches
              individuals to embrace adversity with equanimity, viewing
              challenges as opportunities for growth rather than obstacles to be
              feared. Through the practice of <em>mindfulness</em>, one learns
              to observe their reactions to life’s ebbs and flows with a steady
              gaze, responding thoughtfully rather than reacting impulsively—a
              testament to the Stoic virtue of self-mastery and rationality.
            </p>
            <p className="mb-4">
              In the quietude of mindful presence, Stoic philosophy finds
              resonance in everyday moments. It encourages individuals to
              confront the impermanence of all things with courage and
              acceptance, fostering a sense of inner peace that transcends the
              fluctuations of external circumstances. By cultivating{" "}
              <strong>mindfulness</strong> as a daily practice, one navigates
              life’s complexities with clarity and intentionality, embodying
              Stoic ideals of wisdom, virtue, and moral excellence in thought
              and deed.
            </p>
            <p className="mb-4">
              Ultimately, <strong>practicing mindfulness</strong> becomes not
              merely a ritual, but a transformative journey of self-discovery
              and personal growth. It invites individuals to awaken to the
              beauty and complexity of their inner landscapes, embracing each
              moment with a spirit of curiosity and openness. In the gentle
              cadence of mindful living, Stoic philosophy finds expression—a
              timeless invitation to cultivate resilience, presence, and a
              profound connection to the unfolding tapestry of life.
            </p>

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Stoic Reading
            </h2>
            <p className="mb-4">
              In the quiet moments before dawn breaks,{" "}
              <strong>Stoic reading</strong> beckons as a companion on the
              journey of self-discovery and philosophical exploration. Like a
              lantern casting light on the ancient pathways of wisdom,{" "}
              <em>Stoic texts</em> illuminate timeless insights and practical
              teachings that resonate with the complexities of modern life.
              Engaging with the writings of Marcus Aurelius, Seneca, and
              Epictetus becomes a daily ritual—an invitation to glean pearls of
              wisdom that transcend the passage of centuries, offering guidance
              in navigating the ebbs and flows of existence.
            </p>
            <p className="mb-4">
              <strong>Stoic reading</strong> serves as a beacon of clarity amid
              modern distractions. Immersing oneself in the profound musings of
              Marcus Aurelius, Seneca, and Epictetus becomes a daily ritual—an
              invitation to glean pearls of wisdom that transcend centuries,
              offering guidance in navigating life’s complexities.
            </p>
            <p className="mb-4">
              These texts illuminate timeless insights and practical teachings,
              resonating deeply with the human experience and shedding light on
              universal truths and existential dilemmas. They invite readers on
              a journey of introspection and intellectual discovery, providing
              new perspectives on resilience, virtue, and inner peace.
            </p>
            <p className="mb-4">
              Engaging with <strong>Stoic literature</strong> becomes a catalyst
              for personal growth and moral refinement. It challenges
              individuals to confront their beliefs with courage and rigor,
              fostering reflection on living a life aligned with reason and
              justice. In these enduring works, readers find solace and
              inspiration—a call to embody Stoic virtues in thought, word, and
              action, cultivating purpose and ethical integrity.
            </p>
            <p className="mb-4">
              Stoic philosophy finds resonance in daily life through the
              practice of reading, offering a roadmap for navigating
              uncertainties with grace and fortitude. Engaging with{" "}
              <strong>Stoic texts</strong> enriches understanding while guiding
              a journey toward personal excellence and spiritual fulfillment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
