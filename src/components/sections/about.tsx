import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-primary text-primary-foreground py-20 md:py-32">
      <div
        className="absolute top-0 left-0 w-full h-full parallax-bg opacity-10"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="abstract algorithms"
      ></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About Algorithm Aliens</h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We are a collective of thinkers, innovators, and problem-solvers dedicated to crafting the code of tomorrow.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              At Algorithm Aliens, we are dedicated to pushing the boundaries of technology. Our mission is to create innovative and intelligent algorithms that solve real-world problems, drive progress, and shape a better, more efficient future for everyone. We believe in the power of logic and creativity to unlock new possibilities.
            </p>
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              We envision a world where complex systems are managed by seamless, self-learning algorithms, making life simpler and more productive. From automating industries to advancing scientific research, our goal is to be at the forefront of the algorithmic revolution, making the alien concepts of today the standards of tomorrow.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Abstract illustration of an algorithm"
              fill
              className="rounded-lg shadow-2xl object-cover"
              data-ai-hint="futuristic tech"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
