import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-background text-foreground py-20 md:py-32">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Image src="/about.svg" alt="About Us" width={100} height={100} className="mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Algorithm Aliens
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2025, Algorithm Aliens emerged from a vision to transform traditional
            education into an engaging, accessible, and future-ready learning experience. We believe
            in the power of continuous learning and its ability to shape successful careers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-12">
            <div className="text-center">
              <Image
                src="/mission.svg"
                alt="Our Mission"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals with knowledge and skills that drive personal growth and
                professional success in an ever-evolving digital world.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/values.svg"
                alt="Our Values"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-3">Our Values</h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>Excellence in Education</li>
                <li>Innovation & Adaptability</li>
                <li>Student Success First</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
            <div className="text-center">
              <Image
                src="/working-projects.svg"
                alt="Working Projects"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-3">Working Projects</h3>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li>Cogni Synapse Drive Shield</li>
                <li>Serverless Url Shortner</li>
                <li>Ai power Optimization</li>
                <li>Movie Suggestion Website</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8 text-center">
            <Image src="/story.svg" alt="Our Story" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve thousands of learners worldwide, providing them with quality education
              resources, industry-recognized certifications, and valuable internship opportunities.
              Our commitment to excellence and innovation continues to drive our growth and impact
              in the education sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
