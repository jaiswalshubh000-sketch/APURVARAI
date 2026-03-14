import { ProjectLayout } from "@/src/components/ProjectLayout";
import { ScopeGrid } from "@/src/components/ScopeGrid";
import { FadeIn } from "@/src/components/FadeIn";
import { ProjectSection } from "@/src/components/ProjectSection";

const rawUrls = [
  "https://drive.google.com/file/d/1-wkDFP8V32oTcNBBiBv6gzzDSGBjVBJD/view?usp=sharing",
  "https://drive.google.com/file/d/10LPU08FM5i2EIGfbrBhgR5ijCMcxVJaG/view?usp=sharing",
  "https://drive.google.com/file/d/10R6NAmSGMy-Z53pH-YsOulx7VwnMQOGo/view?usp=sharing",
  "https://drive.google.com/file/d/10czcR4ZFRPIRpbQ1WSM0aDRzX68ikEtq/view?usp=sharing",
  "https://drive.google.com/file/d/10wkb00BVyPhSCahQomJix33CQDTELeiA/view?usp=sharing",
  "https://drive.google.com/file/d/12CmwyzNuUTZxwZSn-7e1tSAsp-PdncBP/view?usp=sharing",
  "https://drive.google.com/file/d/12MYh_lDMrD7Pl-fWxwtq9vNZPtWA97yE/view?usp=sharing",
  "https://drive.google.com/file/d/12Q7hjHshWnH1SFqqmRqnxN-Lm4qKJ1C8/view?usp=sharing",
  "https://drive.google.com/file/d/14VyN1gbifL5NrTbBaPHWsauvlF46OUmI/view?usp=sharing",
  "https://drive.google.com/file/d/14hykVpsuyP9jxYKsR-1UmPPQCxnKTMJz/view?usp=sharing",
  "https://drive.google.com/file/d/14ySRs2-uKaoj1wbEPERUC5qZHR6DFe8-/view?usp=sharing",
  "https://drive.google.com/file/d/1546PxEEzgecxrP3RS1CNm0OZVRZBJ4dl/view?usp=sharing",
  "https://drive.google.com/file/d/15Or403UFmumu-cRE86eApfA7Zrk92lwZ/view?usp=sharing",
  "https://drive.google.com/file/d/15hme3pfNCHPXLri4FMx6Y3JnXIOOYSWj/view?usp=sharing",
  "https://drive.google.com/file/d/18POSBcSPelpPZLPLLnsdoh4vkpaL8TLb/view?usp=sharing",
  "https://drive.google.com/file/d/1BF30n4dALQ1SVcmnj7Cj21UZYGZmyoGD/view?usp=sharing",
  "https://drive.google.com/file/d/1BnzrVErQOMc9-h8mH14Br7TBA_4IHv4N/view?usp=sharing",
  "https://drive.google.com/file/d/1CU6DFgJODeM1Le-Vu12lh2Rtz6x_Vbls/view?usp=sharing",
  "https://drive.google.com/file/d/1EQdNoYqmV9ySSPvyz-V2XA-jzbuQGNwx/view?usp=sharing",
  "https://drive.google.com/file/d/1H5GjO8WsDjllHlux-1nMj9X0qUl2eIQg/view?usp=sharing",
  "https://drive.google.com/file/d/1HdiWLQYdLZr19qhadzPrHYd1Tot_JQtX/view?usp=sharing",
  "https://drive.google.com/file/d/1Hn2n7CEZKw1dNtrsnwAKaPBxNyAijLI8/view?usp=sharing",
  "https://drive.google.com/file/d/1M8h1BllW7UpaGnu-KENJr00gO3ls7qej/view?usp=sharing",
  "https://drive.google.com/file/d/1MEoT3EQNmvjZCKwoFLUWKCCriiV26EUi/view?usp=sharing",
  "https://drive.google.com/file/d/1MJXKv4UBNUo-jEDPZHc7QlFw4gycNzPn/view?usp=sharing",
  "https://drive.google.com/file/d/1NTVbRT3nsoiB9pxbKNe8J_u_WZdg-TiW/view?usp=sharing",
  "https://drive.google.com/file/d/1O0jyiVs0sxncEQFfHaDXdzbgarirogLt/view?usp=sharing",
  "https://drive.google.com/file/d/1Q3S0op9ZBNDyLbw8vzZRbE-2wtveZ_HW/view?usp=sharing",
  "https://drive.google.com/file/d/1S5u7Wkcm8bpf8ivTJptf1AOQ8lfdzN5B/view?usp=sharing",
  "https://drive.google.com/file/d/1S6OGOnncZjz15oo-UJm97NuN-4-CHofA/view?usp=sharing",
  "https://drive.google.com/file/d/1SryOrcR6cu1ipwbnNW381Gi9BwhLdQZG/view?usp=sharing",
  "https://drive.google.com/file/d/1TCBgJpshMyjU1WRUTGa5L3wIK1jhXs8w/view?usp=sharing",
  "https://drive.google.com/file/d/1TRpxWIamseyYeNSz7qP5umLbndKwdm1B/view?usp=sharing",
  "https://drive.google.com/file/d/1T_BTjaKadbt4ImrwRVh9XhS_kvu3B3hA/view?usp=sharing",
  "https://drive.google.com/file/d/1Tt6UnynqCozWLwjBY7_tOYNQ3C8T8OdW/view?usp=sharing",
  "https://drive.google.com/file/d/1U9Q0IlZbo4zi6BI5HOb26NWUOH96rpiI/view?usp=sharing",
  "https://drive.google.com/file/d/1UyycvRC8QmIq3rjqeidqB94uwIWhswbb/view?usp=sharing",
  "https://drive.google.com/file/d/1WBN91tHPRWPJXfo6tWMPiFYyvRtlC-gg/view?usp=sharing",
  "https://drive.google.com/file/d/1WQAVKmuOdITx4wQPm2xwHDejanKt31sE/view?usp=sharing",
  "https://drive.google.com/file/d/1WYHefUOJEhDCsxsKFZ8T_56YOz28aAtR/view?usp=sharing",
  "https://drive.google.com/file/d/1YFEURev3gXMPAQ0a4zO9pWFYC1kE7eLq/view?usp=sharing",
  "https://drive.google.com/file/d/1YIizBt6x67G7zxMmuHoYTqnQb9iOgyz9/view?usp=sharing",
  "https://drive.google.com/file/d/1ZJpWltfca3o0InStrVLL3Xbf1o3h87pg/view?usp=sharing",
  "https://drive.google.com/file/d/1ZNwqbxFKxz1zK3YL0nYCGLJ9AkJ40sdR/view?usp=sharing",
  "https://drive.google.com/file/d/1ZY-ZqNxC_a_PA5miLC05ssbVjcbf7kto/view?usp=sharing",
  "https://drive.google.com/file/d/1Zo_CU0FCVnYIBfPfm4X0_b1ZbQf54jX9/view?usp=sharing",
  "https://drive.google.com/file/d/1a0csI_iVeioHWO2YqqjGnI7VeH_RRh0e/view?usp=sharing",
  "https://drive.google.com/file/d/1aebPbmku56rdU9Tyb8AYJYbzZsyxSNo0/view?usp=sharing",
  "https://drive.google.com/file/d/1baXGqpMEQ9I3vOeaNMGoY1uWxhbekOwA/view?usp=sharing",
  "https://drive.google.com/file/d/1cIzAKWr6lNHRB8R_xrEzDZjtniYsFbEZ/view?usp=sharing",
  "https://drive.google.com/file/d/1cUJaoVxWL7a93ytLywJyvelvj-W5fRuP/view?usp=sharing",
  "https://drive.google.com/file/d/1d7OlJLBMhBsq8P1jSfUkL4BunUUNYRKt/view?usp=sharing",
  "https://drive.google.com/file/d/1dMWK5oRG3FKhtbt1BuyuB-uxLuUHhxlX/view?usp=sharing",
  "https://drive.google.com/file/d/1e7wP9NWVcK6V4p-DrPPnCEfGiI-QAZRC/view?usp=sharing",
  "https://drive.google.com/file/d/1fKqjlk4VyTCcLcf0MWMYU7ckK2x4MfFN/view?usp=sharing",
  "https://drive.google.com/file/d/1huneKqJyHC5j-nEGrnO7BB4h_SguGGx6/view?usp=sharing",
  "https://drive.google.com/file/d/1i8UgV7FYyr5nGAD3j3MbgmTJzZNmHDBL/view?usp=sharing",
  "https://drive.google.com/file/d/1iNjNf8RSR9YvyIinIHtLm6FAbbB8yD-1/view?usp=sharing",
  "https://drive.google.com/file/d/1iRIaJ5Ti2z8qKdw43D2SphiejIBZ4p05/view?usp=sharing",
  "https://drive.google.com/file/d/1ilzoeGl5pQo4Da-2jcreGOT3dfBkIsGA/view?usp=sharing",
  "https://drive.google.com/file/d/1in7xcic6COf0HBmoO-0tub5zjdSYN2Wn/view?usp=sharing",
  "https://drive.google.com/file/d/1j0FA106y3ObPjypHhvfwucyBTkmtDT7s/view?usp=sharing",
  "https://drive.google.com/file/d/1kSlr0QpMHxC1PF30c763IfPVH25_NjFD/view?usp=sharing",
  "https://drive.google.com/file/d/1kd2dmG7SqHOzRtd_-PDZK3s2QBrWbncd/view?usp=sharing",
  "https://drive.google.com/file/d/1lFxdNS2SAt7W2TGqy4ZjxqOSDdmxRRHV/view?usp=sharing",
  "https://drive.google.com/file/d/1mFS826P9a9qLWj0Jx1xpYGehpsdYjvLK/view?usp=sharing",
  "https://drive.google.com/file/d/1mHuN2SzGz__kd5b2N7Pq-W6lzRQo2lnG/view?usp=sharing",
  "https://drive.google.com/file/d/1mfRjP_gGSpklESB7GwkVy4S9fQVNnZZm/view?usp=sharing",
  "https://drive.google.com/file/d/1nxj_Mre_pi1ij5GF-aLAPY1aNeqi-onL/view?usp=sharing",
  "https://drive.google.com/file/d/1pO_9fwlcn4Ksk-IQ8q-rp_IryKlHB69S/view?usp=sharing",
  "https://drive.google.com/file/d/1qOhBrGHu84JM8bZW1rMopPo7wCOULxMc/view?usp=sharing",
  "https://drive.google.com/file/d/1qTsTesj3ZzxvdjPn0njCRWXB4wUh1Oem/view?usp=sharing",
  "https://drive.google.com/file/d/1qclfEf_6GqTncFvQbY-V2YWGTOpg95_G/view?usp=sharing",
  "https://drive.google.com/file/d/1sIb6Pbg4SNpdXxkSZtwepfRcP_apvm0B/view?usp=sharing",
  "https://drive.google.com/file/d/1t7vjTYRR5WP36ssvlsn8qIVim_LKQyFc/view?usp=sharing",
  "https://drive.google.com/file/d/1tjiPPe5k34FOfXKZgWVqvgL9eO24y20x/view?usp=sharing",
  "https://drive.google.com/file/d/1u4VZH4DrvFlU-JKqlDlxHw2KZKalGnVi/view?usp=sharing",
  "https://drive.google.com/file/d/1uOallAUnzTrGd9okYwDkiIq2osgxQbRk/view?usp=sharing",
  "https://drive.google.com/file/d/1v1_mtgVbyy-zSV_yQ7H58DK5Xy1NpRBu/view?usp=sharing",
  "https://drive.google.com/file/d/1vrOCIDjSHwee756MbGcQhjVzLp6VE57Z/view?usp=sharing",
  "https://drive.google.com/file/d/1wLwAnw5MYMiUDydot9tOmOm-HAn2RU_z/view?usp=sharing",
  "https://drive.google.com/file/d/1x-5ssaoWEGJhSTa3KSfxg-L_l14GI6gC/view?usp=sharing",
  "https://drive.google.com/file/d/1y_yMckaD_m7tHSOBGdDnViZdR8pwSicl/view?usp=sharing",
  "https://drive.google.com/file/d/1yk2PvGzwlGMQ9mIxkUVUYX2UTFERFXXG/view?usp=sharing",
  "https://drive.google.com/file/d/1z26M-CjqrEfqm54hfzI46OLASgLpVguo/view?usp=sharing"
];

const getImgSrc = (url: string) => {
  const match = url.match(/\/d\/(.*?)\//);
  return match ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1920` : url;
};

const images = rawUrls.map(getImgSrc);

const projects = [
  {
    id: "3d-environment",
    title: "3D Environment Development Project",
    heroImage: images[0],
    processImages: images.slice(1, 10),
    finalImages: images.slice(10, 20),
    overview: {
      what: "A deep dive into the technical aspects of creative production, focusing on 3D modeling, sculpting, and real-time environment building.",
      type: "3D environment study",
      explores: "High-poly sculpting, retopology, texturing, and integration into real-time engines."
    },
    scope: {
      goal: "Master 3D pipelines and real-time integration",
      focus: "3D modeling and environment design",
      techniques: "3D Sculpting, Retopology, Texturing",
      medium: "Digital 3D",
      outcome: "Cinematic renders and environment builds"
    },
    roles: [
      "Concept development and visual planning",
      "High-fidelity 3D sculpting",
      "Environment design and layout",
      "Project coordination"
    ],
    tools: {
      "3D Tools": ["ZBrush", "Blender", "Autodesk Maya", "Unreal Engine", "Substance Painter"],
      "Creative Tools": ["Adobe After Effects", "Adobe Premiere Pro"],
      "AI Tools": ["ChatGPT", "Gemini"]
    },
    deliverables: "Cinematic renders, environment renders, and high-resolution stills.",
    challenges: {
      problem: "Managing extremely high polygon counts from detailed ZBrush sculpts caused significant performance bottlenecks when importing assets into real-time environments like Unreal Engine.",
      solution: "Implemented a strict retopology workflow in Autodesk Maya to create optimized, low-poly meshes. High-resolution details were then baked into normal and displacement maps using Substance Painter, ensuring maximum visual fidelity without sacrificing real-time performance."
    },
    outcome: "Demonstrates a comprehensive understanding of the creative process and technical skill required for modern 3D production, highlighting an ability to solve complex technical challenges while maintaining strong visual storytelling."
  },
  {
    id: "digital-comic",
    title: "Digital Comic Project",
    heroImage: images[20],
    processImages: images.slice(21, 30),
    finalImages: images.slice(30, 40),
    overview: {
      what: "A visual narrative development project exploring comic storytelling, pacing, and digital illustration techniques.",
      type: "Comic storytelling exercise",
      explores: "Sequential art, panel layout, and visual narrative development."
    },
    scope: {
      goal: "Develop a compelling visual narrative through sequential art",
      focus: "Visual narrative development",
      techniques: "Digital illustration, panel layout, and pacing",
      medium: "Digital 2D",
      outcome: "Completed comic panels and pages"
    },
    roles: [
      "Concept development",
      "Visual planning and storyboard creation",
      "Illustration and inking",
      "Creative direction"
    ],
    tools: {
      "3D Tools": ["Blender (for reference)"],
      "Creative Tools": ["Procreate", "Adobe Illustrator", "Adobe Photoshop"],
      "AI Tools": ["ChatGPT (for script ideation)"]
    },
    deliverables: "Finished comic panels, character sheets, and illustration outputs.",
    challenges: {
      problem: "Maintaining consistent character proportions and dynamic perspectives across multiple sequential panels.",
      solution: "Created detailed character turnaround sheets and utilized 3D reference models in Blender to block out complex angles before committing to final illustrations in Procreate."
    },
    outcome: "Highlights an ability to convey complex narratives through sequential art, demonstrating strong visual storytelling, pacing, and a solid understanding of production workflows for 2D media."
  },
  {
    id: "graphic-traditional",
    title: "Graphic Traditional Artwork",
    heroImage: images[40],
    processImages: images.slice(41, 50),
    finalImages: images.slice(50, 60),
    overview: {
      what: "An exploration of traditional graphic art techniques, blending physical mediums with digital enhancements for unique visual outputs.",
      type: "Illustration project",
      explores: "Mixed media, traditional sketching, and digital compositing."
    },
    scope: {
      goal: "Bridge the gap between traditional art techniques and modern digital workflows",
      focus: "Graphic illustration and mixed media",
      techniques: "Traditional sketching, inking, digital compositing",
      medium: "Mixed Media (Traditional & Digital)",
      outcome: "Finished artwork and illustrations"
    },
    roles: [
      "Concept development",
      "Traditional illustration and sketching",
      "Digital enhancement and compositing",
      "Creative direction"
    ],
    tools: {
      "3D Tools": [],
      "Creative Tools": ["Procreate", "Adobe Photoshop", "Adobe Illustrator"],
      "AI Tools": ["Midjourney (for moodboarding)"]
    },
    deliverables: "High-quality finished artwork, illustration outputs, and mixed-media compositions.",
    challenges: {
      problem: "Preserving the tactile feel and texture of traditional mediums when digitizing the artwork for final composition.",
      solution: "Utilized high-resolution scanning techniques and developed custom brush settings in Procreate and Photoshop to maintain the authentic texture and grain of the original physical pieces."
    },
    outcome: "Showcases a strong foundation in traditional art principles combined with modern digital workflows, demonstrating creative experimentation and technical skill in visual media."
  },
  {
    id: "character-design",
    title: "Character Design and Animation Studies",
    heroImage: images[60],
    processImages: images.slice(61, 70),
    finalImages: images.slice(70, 85),
    overview: {
      what: "A series of character design explorations and animation tests focusing on expression, movement, and personality.",
      type: "Character design exploration and animation test",
      explores: "2D/3D character design, rigging, and animation exercises."
    },
    scope: {
      goal: "Develop expressive characters and fluid animation cycles",
      focus: "Character expression and storytelling",
      techniques: "Character design, rigging, keyframe animation",
      medium: "Digital 2D & 3D",
      outcome: "Animation clips and character turnarounds"
    },
    roles: [
      "Concept development",
      "Character design and sculpting",
      "Animation production",
      "Visual planning"
    ],
    tools: {
      "3D Tools": ["Autodesk Maya", "Blender"],
      "Creative Tools": ["Adobe After Effects", "Procreate"],
      "AI Tools": ["Nano Banana", "Suno AI"]
    },
    deliverables: "Animation clips, character design sheets, and motion tests.",
    challenges: {
      problem: "Achieving natural weight, timing, and secondary motion in complex character walk cycles.",
      solution: "Studied live-action reference footage extensively and iteratively refined keyframes and animation curves in Maya to improve the sense of gravity, momentum, and character personality."
    },
    outcome: "Demonstrates technical skill in character rigging and animation, emphasizing expressive movement, solid production workflows, and a deep understanding of animation principles."
  }
];

export function TechnicalProjects() {
  return (
    <ProjectLayout
      subtitle="Technical Projects & Explorations"
      title="TECHNICAL PROJECTS"
      tagline="A comprehensive collection of 3D modeling, environment design, illustration, and technical art explorations."
    >
      <div className="space-y-32">
        {projects.map((project, index) => (
          <div key={project.id} className="border-t border-white/10 pt-16 first:border-0 first:pt-0">
            {/* 1. Project Title & Hero Image */}
            <FadeIn className="mb-16">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-8 text-white">
                {project.title}
              </h2>
              <img 
                src={project.heroImage} 
                alt={`${project.title} Hero`} 
                className="w-full h-auto max-h-[70vh] object-cover rounded-xl border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </FadeIn>

            {/* 2. Overview & Scope */}
            <ProjectSection title="Overview & Scope">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 leading-relaxed text-lg">
                <div className="space-y-4">
                  <p>{project.overview.what}</p>
                  <p><strong>Type:</strong> {project.overview.type}</p>
                  <p><strong>Explores:</strong> {project.overview.explores}</p>
                </div>
                <div className="space-y-2">
                  <p><strong>Goal:</strong> {project.scope.goal}</p>
                  <p><strong>Medium:</strong> {project.scope.medium}</p>
                  <p><strong>Outcome:</strong> {project.scope.outcome}</p>
                </div>
              </div>
            </ProjectSection>

            {/* 3. Roles & Tools */}
            <ProjectSection title="Roles & Tools">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400 leading-relaxed text-lg">
                <div>
                  <strong className="text-white block mb-4">Responsibilities</strong>
                  <ul className="list-disc list-inside space-y-2">
                    {project.roles.map((role, i) => (
                      <li key={i}>{role}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-4">Software Used</strong>
                  <div className="space-y-4">
                    {Object.entries(project.tools).map(([category, tools]) => (
                      tools.length > 0 && (
                        <div key={category}>
                          <span className="text-sm font-bold text-white uppercase tracking-wider block mb-1">{category}</span>
                          <p className="text-sm">{tools.join(", ")}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </ProjectSection>

            {/* 4. Process & Deliverables */}
            <ProjectSection title="Process & Deliverables">
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                {project.deliverables}
              </p>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {[...project.processImages.slice(0, 4), ...project.finalImages.slice(0, 4)].map((src, i) => (
                  <div key={i} className="relative overflow-hidden rounded-xl border border-white/10 group break-inside-avoid shadow-lg">
                    <img
                      src={src}
                      alt={`Gallery image ${i + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </ProjectSection>

            {/* 5. Outcome */}
            <ProjectSection title="Outcome">
              <div className="text-gray-400 leading-relaxed text-lg space-y-4">
                <p><strong>Challenge:</strong> {project.challenges.problem}</p>
                <p><strong>Solution:</strong> {project.challenges.solution}</p>
                <p className="pt-4 border-t border-white/10">{project.outcome}</p>
              </div>
            </ProjectSection>
          </div>
        ))}
      </div>
    </ProjectLayout>
  );
}
