
export default function AboutSection() {
  return (
    <section id="about" className="relative bg-primary text-primary-foreground py-20 md:py-32">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Algorithm Aliens</h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Founded in 2025, Algorithm Aliens emerged from a vision to transform traditional
            education into an engaging, accessible, and future-ready learning experience. We believe
            in the power of continuous learning and its ability to shape successful careers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To empower individuals with knowledge and skills that drive personal growth and
                professional success in an ever-evolving digital world.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Our Values</h3>
              <ul className="list-disc list-inside space-y-2 text-primary-foreground/90">
                <li>Excellence in Education</li>
                <li>Innovation & Adaptability</li>
                <li>Student Success First</li>
                <li>Continuous Improvement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Working Projects</h3>
              <ul className="list-disc list-inside space-y-2 text-primary-foreground/90">
                <li>Cogni Synapse Drive Shield</li>
                <li>Serverless Url Shortner</li>
                <li>Ai power Optimization</li>
                <li>Movie Suggestion Website</li>
              </ul>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-3">Our Story</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
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
