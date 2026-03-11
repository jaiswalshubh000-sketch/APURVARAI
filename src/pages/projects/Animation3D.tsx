import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { FadeIn } from "@/src/components/FadeIn";
import { VideoPlayer } from "@/src/components/VideoPlayer";

export function Animation3D() {
  return (
    <ProjectLayout
      subtitle="Animation & 3D Explorations"
      title="MOTION & 3D"
      tagline="A collection of animation tests, character movements, and Unreal Engine environments."
    >
      <ScopeGrid
        items={[
          { label: "Focus", value: "Character Animation, 3D Environments" },
          { label: "Tools", value: "Unreal Engine, Animation Software" },
          { label: "Output", value: "Video Renderings" },
          { label: "Role", value: "Animator, 3D Artist" },
        ]}
      />

      <div className="space-y-24 mt-12">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Animation Work</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Exploring fluid motion and character dynamics through 2D and 3D animation techniques. This piece focuses on weight, timing, and expressive movement.
              </p>
            </div>
            <div className="lg:col-span-2">
              <VideoPlayer url="https://www.youtube.com/embed/5ViDti_Ly4k" />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <VideoPlayer url="https://www.youtube.com/embed/4V5Iz99Qpks" />
            </div>
            <div className="lg:col-span-1 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Bot Walk Cycle</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                A mechanical walk cycle study. The goal was to convey a sense of heavy machinery while maintaining a smooth, rhythmic gait.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wider">Unreal Engine</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Building immersive, real-time environments in Unreal Engine. This project highlights lighting, texturing, and spatial design to create a compelling atmosphere.
              </p>
            </div>
            <div className="lg:col-span-2">
              <VideoPlayer url="https://www.youtube.com/embed/MEz3UtzaGJM" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <img src="https://i.postimg.cc/xcdKnmyy/06ce643d-2496-4fad-bc90-22ce80299ef2.jpg" alt="Unreal Engine Environment 1" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/jLjztfQX/0fd31a2d-cb69-4a5e-bd80-a76925b5ddd4.jpg" alt="Unreal Engine Environment 2" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/0bNpPSdn/23cc8bb3-a7f4-43cc-a901-0774d07ddb07.jpg" alt="Unreal Engine Environment 3" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/LJcftbKm/72db15c2-42cf-4a5e-8195-00d902a2ae76.jpg" alt="Unreal Engine Environment 4" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/9rfGC9tG/ae9b58c3-ad84-4d9a-94db-aec56c2fc580.jpg" alt="Unreal Engine Environment 5" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/ZWG38MtS/b55c653b-001d-4663-a511-e6a057dd89be.jpg" alt="Unreal Engine Environment 6" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300" referrerPolicy="no-referrer" />
            <img src="https://i.postimg.cc/JGhbMXcF/c4823395-9f53-47c2-bd5c-7476fa450071.jpg" alt="Unreal Engine Environment 7" className="w-full h-64 object-cover rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300 lg:col-span-3 md:col-span-2" referrerPolicy="no-referrer" />
          </div>
        </FadeIn>
      </div>
    </ProjectLayout>
  );
}
