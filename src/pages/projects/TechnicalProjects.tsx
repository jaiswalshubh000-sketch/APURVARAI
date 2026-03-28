import { ProjectLayout } from "@/src/components/ProjectLayout";
import { FadeIn } from "@/src/components/FadeIn";

type MediaType = 'image' | 'video' | 'pdf';

interface MediaItem {
  id: string;
  type: MediaType;
  title: string;
}

const section1Items: MediaItem[] = [
  { id: "1H5GjO8WsDjllHlux-1nMj9X0qUl2eIQg", type: "image", title: "cloth uv.jpg" },
  { id: "12CmwyzNuUTZxwZSn-7e1tSAsp-PdncBP", type: "image", title: "amnequinn uv.jpg" },
  { id: "1in7xcic6COf0HBmoO-0tub5zjdSYN2Wn", type: "image", title: "chair uv.jpg" },
  { id: "1vrOCIDjSHwee756MbGcQhjVzLp6VE57Z", type: "image", title: "scissors uv.jpg" },
  { id: "15hme3pfNCHPXLri4FMx6Y3JnXIOOYSWj", type: "image", title: "image 8.jpg" },
  { id: "1T_BTjaKadbt4ImrwRVh9XhS_kvu3B3hA", type: "image", title: "image 6.jpg" },
  { id: "1CU6DFgJODeM1Le-Vu12lh2Rtz6x_Vbls", type: "image", title: "image 7.jpg" },
  { id: "1aebPbmku56rdU9Tyb8AYJYbzZsyxSNo0", type: "image", title: "image 9.jpg" },
  { id: "1EQdNoYqmV9ySSPvyz-V2XA-jzbuQGNwx", type: "image", title: "Screenshot 2025-09-14 193819" },
  { id: "1x-5ssaoWEGJhSTa3KSfxg-L_l14GI6gC", type: "image", title: "Screenshot 2025-09-14 194807" },
  { id: "15Or403UFmumu-cRE86eApfA7Zrk92lwZ", type: "image", title: "Screenshot 2025-09-14 194853" },
  { id: "1z26M-CjqrEfqm54hfzI46OLASgLpVguo", type: "image", title: "Screenshot 2025-09-14 195010" },
  { id: "1BnzrVErQOMc9-h8mH14Br7TBA_4IHv4N", type: "image", title: "Screenshot 2025-09-14 195247" },
  { id: "1U9Q0IlZbo4zi6BI5HOb26NWUOH96rpiI", type: "image", title: "Screenshot 2025-09-14 195523" },
  { id: "1546PxEEzgecxrP3RS1CNm0OZVRZBJ4dl", type: "image", title: "Screenshot 2025-09-14 195811" },
  { id: "1huneKqJyHC5j-nEGrnO7BB4h_SguGGx6", type: "pdf", title: "3D ENVIRONMENT.pdf" },
  { id: "1ZNwqbxFKxz1zK3YL0nYCGLJ9AkJ40sdR", type: "video", title: "final_unreal.mp4" },
];

const section2Items: MediaItem[] = [
  { id: "1uOallAUnzTrGd9okYwDkiIq2osgxQbRk", type: "image", title: "Turn_Around.png" },
  { id: "1fKqjlk4VyTCcLcf0MWMYU7ckK2x4MfFN", type: "image", title: "Expression_Sheet.jpg" },
  { id: "1iNjNf8RSR9YvyIinIHtLm6FAbbB8yD-1", type: "image", title: "Face_Exploration.jpg" },
  { id: "1pO_9fwlcn4Ksk-IQ8q-rp_IryKlHB69S", type: "image", title: "Final_With_Background_.jpg" },
  { id: "1cUJaoVxWL7a93ytLywJyvelvj-W5fRuP", type: "image", title: "Flat_Colours.jpg" },
  { id: "1yk2PvGzwlGMQ9mIxkUVUYX2UTFERFXXG", type: "image", title: "c1.jpg" },
  { id: "1iRIaJ5Ti2z8qKdw43D2SphiejIBZ4p05", type: "image", title: "c2.jpg" },
  { id: "1i8UgV7FYyr5nGAD3j3MbgmTJzZNmHDBL", type: "image", title: "c3.jpg" },
  { id: "1S6OGOnncZjz15oo-UJm97NuN-4-CHofA", type: "image", title: "c4.jpg" },
  { id: "12Q7hjHshWnH1SFqqmRqnxN-Lm4qKJ1C8", type: "image", title: "c5.jpg" },
  { id: "1MJXKv4UBNUo-jEDPZHc7QlFw4gycNzPn", type: "image", title: "c6.jpg" },
  { id: "1j0FA106y3ObPjypHhvfwucyBTkmtDT7s", type: "image", title: "apurva img 1.jpg" },
  { id: "1ZY-ZqNxC_a_PA5miLC05ssbVjcbf7kto", type: "image", title: "apurva img 2.jpg" },
  { id: "1Tt6UnynqCozWLwjBY7_tOYNQ3C8T8OdW", type: "image", title: "apurva img 3.jpg" },
  { id: "10wkb00BVyPhSCahQomJix33CQDTELeiA", type: "image", title: "apurva img 4.jpg" },
  { id: "1kd2dmG7SqHOzRtd_-PDZK3s2QBrWbncd", type: "image", title: "image 1.jpg" },
  { id: "1wLwAnw5MYMiUDydot9tOmOm-HAn2RU_z", type: "image", title: "image 2.jpg" },
  { id: "1sIb6Pbg4SNpdXxkSZtwepfRcP_apvm0B", type: "image", title: "image 3.jpg" },
  { id: "1WBN91tHPRWPJXfo6tWMPiFYyvRtlC-gg", type: "image", title: "image 4.jpg" },
  { id: "10R6NAmSGMy-Z53pH-YsOulx7VwnMQOGo", type: "pdf", title: "2d character design.pdf" },
  { id: "18POSBcSPelpPZLPLLnsdoh4vkpaL8TLb", type: "video", title: "human cwalk cucle.mp4" },
  { id: "14ySRs2-uKaoj1wbEPERUC5qZHR6DFe8-", type: "video", title: "final lipsync.mp4" },
  { id: "12MYh_lDMrD7Pl-fWxwtq9vNZPtWA97yE", type: "video", title: "blaughing2.avi" },
  { id: "1Hn2n7CEZKw1dNtrsnwAKaPBxNyAijLI8", type: "video", title: "ball walk cycle.mov" },
  { id: "1Q3S0op9ZBNDyLbw8vzZRbE-2wtveZ_HW", type: "video", title: "final1 walk and morph.mp4" },
  { id: "1kSlr0QpMHxC1PF30c763IfPVH25_NjFD", type: "video", title: "stop motion updated.mp4" },
  { id: "1t7vjTYRR5WP36ssvlsn8qIVim_LKQyFc", type: "video", title: "animatics.mp4" },
  { id: "1mFS826P9a9qLWj0Jx1xpYGehpsdYjvLK", type: "pdf", title: "Stop motion final ppt.pdf" },
];

const section3Items: MediaItem[] = [
  { id: "1NTVbRT3nsoiB9pxbKNe8J_u_WZdg-TiW", type: "pdf", title: "Digital comic.pdf" },
  { id: "1MEoT3EQNmvjZCKwoFLUWKCCriiV26EUi", type: "image", title: "Background_2 (1).jpg" },
  { id: "1qclfEf_6GqTncFvQbY-V2YWGTOpg95_G", type: "image", title: "Screenshot 2025-04-21 011938" },
  { id: "1qOhBrGHu84JM8bZW1rMopPo7wCOULxMc", type: "image", title: "Screenshot 2025-04-21 012046" },
  { id: "10LPU08FM5i2EIGfbrBhgR5ijCMcxVJaG", type: "image", title: "Screenshot 2025-04-21 012021" },
  { id: "1SryOrcR6cu1ipwbnNW381Gi9BwhLdQZG", type: "image", title: "Screenshot 2025-04-21 012119" },
  { id: "1mfRjP_gGSpklESB7GwkVy4S9fQVNnZZm", type: "image", title: "Screenshot 2025-04-21 012152" },
  { id: "1tjiPPe5k34FOfXKZgWVqvgL9eO24y20x", type: "image", title: "Screenshot 2025-04-21 012208" },
  { id: "1YIizBt6x67G7zxMmuHoYTqnQb9iOgyz9", type: "image", title: "Screenshot 2025-04-21 012259" },
  { id: "1O0jyiVs0sxncEQFfHaDXdzbgarirogLt", type: "image", title: "Screenshot 2025-04-21 012323" },
];

const section4Items: MediaItem[] = [
  { id: "1-wkDFP8V32oTcNBBiBv6gzzDSGBjVBJD", type: "image", title: "Artwork" },
  { id: "10czcR4ZFRPIRpbQ1WSM0aDRzX68ikEtq", type: "image", title: "Artwork" },
  { id: "14VyN1gbifL5NrTbBaPHWsauvlF46OUmI", type: "image", title: "Artwork" },
  { id: "14hykVpsuyP9jxYKsR-1UmPPQCxnKTMJz", type: "image", title: "Artwork" },
  { id: "1BF30n4dALQ1SVcmnj7Cj21UZYGZmyoGD", type: "image", title: "Artwork" },
  { id: "1HdiWLQYdLZr19qhadzPrHYd1Tot_JQtX", type: "image", title: "Artwork" },
  { id: "1M8h1BllW7UpaGnu-KENJr00gO3ls7qej", type: "image", title: "Artwork" },
  { id: "1S5u7Wkcm8bpf8ivTJptf1AOQ8lfdzN5B", type: "image", title: "Artwork" },
  { id: "1TCBgJpshMyjU1WRUTGa5L3wIK1jhXs8w", type: "image", title: "Artwork" },
  { id: "1TRpxWIamseyYeNSz7qP5umLbndKwdm1B", type: "image", title: "Artwork" },
  { id: "1UyycvRC8QmIq3rjqeidqB94uwIWhswbb", type: "image", title: "Artwork" },
  { id: "1WQAVKmuOdITx4wQPm2xwHDejanKt31sE", type: "image", title: "Artwork" },
  { id: "1WYHefUOJEhDCsxsKFZ8T_56YOz28aAtR", type: "image", title: "Artwork" },
  { id: "1YFEURev3gXMPAQ0a4zO9pWFYC1kE7eLq", type: "image", title: "Artwork" },
  { id: "1ZJpWltfca3o0InStrVLL3Xbf1o3h87pg", type: "image", title: "Artwork" },
  { id: "1Zo_CU0FCVnYIBfPfm4X0_b1ZbQf54jX9", type: "image", title: "Artwork" },
  { id: "1a0csI_iVeioHWO2YqqjGnI7VeH_RRh0e", type: "image", title: "Artwork" },
  { id: "1baXGqpMEQ9I3vOeaNMGoY1uWxhbekOwA", type: "image", title: "Artwork" },
  { id: "1cIzAKWr6lNHRB8R_xrEzDZjtniYsFbEZ", type: "image", title: "Artwork" },
  { id: "1d7OlJLBMhBsq8P1jSfUkL4BunUUNYRKt", type: "image", title: "Artwork" },
  { id: "1dMWK5oRG3FKhtbt1BuyuB-uxLuUHhxlX", type: "image", title: "Artwork" },
  { id: "1e7wP9NWVcK6V4p-DrPPnCEfGiI-QAZRC", type: "image", title: "Artwork" },
  { id: "1ilzoeGl5pQo4Da-2jcreGOT3dfBkIsGA", type: "image", title: "Artwork" },
  { id: "1lFxdNS2SAt7W2TGqy4ZjxqOSDdmxRRHV", type: "image", title: "Artwork" },
  { id: "1mHuN2SzGz__kd5b2N7Pq-W6lzRQo2lnG", type: "image", title: "Artwork" },
  { id: "1nxj_Mre_pi1ij5GF-aLAPY1aNeqi-onL", type: "image", title: "Artwork" },
  { id: "1qTsTesj3ZzxvdjPn0njCRWXB4wUh1Oem", type: "image", title: "Artwork" },
  { id: "1u4VZH4DrvFlU-JKqlDlxHw2KZKalGnVi", type: "image", title: "Artwork" },
  { id: "1v1_mtgVbyy-zSV_yQ7H58DK5Xy1NpRBu", type: "image", title: "Artwork" },
  { id: "1y_yMckaD_m7tHSOBGdDnViZdR8pwSicl", type: "image", title: "Artwork" },
  { id: "14hEnkxJWwko3GM0IA9TzOuEMfVFUczqB", type: "image", title: "Artwork" },
  { id: "16398IxBbbf6O2L_kbIjAUrRYGsifzvF9", type: "image", title: "Artwork" },
];

const projects = [
  {
    id: "3d-environment",
    title: "3D Environment Development",
    description: "ZBrush sculpts, UV maps, 3D models, Unreal Engine renders and environment screenshots.",
    items: section1Items,
  },
  {
    id: "character-animation",
    title: "Character Design & Animation Studies",
    description: "Character turnarounds, expression sheets, pose studies, walk cycles, lip sync, stop motion, and animatics.",
    items: section2Items,
  },
  {
    id: "digital-comic",
    title: "Digital Comic",
    description: "Sequential comic panels, illustrated narrative pages, digital comic layouts and backgrounds.",
    items: section3Items,
  },
  {
    id: "graphic-traditional",
    title: "Graphic Traditional Artwork",
    description: "Traditional media: pencil, ink, paint, and mixed media.",
    items: section4Items,
  }
];

function MediaRenderer({ item }: { item: MediaItem }) {
  if (item.type === 'image') {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 group break-inside-avoid shadow-lg">
        <img
          src={`https://drive.google.com/uc?export=view&id=${item.id}`}
          alt={item.title}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
    );
  }
  if (item.type === 'video') {
    return (
      <div className="relative overflow-hidden rounded-xl border border-white/10 group break-inside-avoid shadow-lg aspect-video">
        <iframe
          src={`https://drive.google.com/file/d/${item.id}/preview`}
          className="w-full h-full"
          allow="autoplay"
        />
      </div>
    );
  }
  if (item.type === 'pdf') {
    return (
      <a
        href={`https://drive.google.com/file/d/${item.id}/view`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-xl border border-white/10 group break-inside-avoid shadow-lg bg-zinc-900 p-6 hover:bg-zinc-800 transition-colors"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <svg className="w-12 h-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <span className="text-white font-medium">{item.title}</span>
          <span className="text-sm text-gray-400">Click to view PDF</span>
        </div>
      </a>
    );
  }
  return null;
}

export function TechnicalProjects() {
  return (
    <ProjectLayout
      subtitle="Technical Projects & Explorations"
      title="TECHNICAL PROJECTS"
      tagline="A curated collection of 3D modeling, environment design, illustration, and technical art explorations."
    >
      <div className="space-y-32">
        {projects.map((project) => (
          <div key={project.id} className="border-t border-white/10 pt-16 first:border-0 first:pt-0">
            <FadeIn className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4 text-white">
                {project.title}
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mb-8">
                {project.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {project.items.length > 0 ? project.items.map((item, index) => (
                  <MediaRenderer key={index} item={item} />
                )) : (
                  <div className="relative overflow-hidden rounded-xl border border-white/10 group break-inside-avoid shadow-lg aspect-video bg-zinc-900 flex items-center justify-center">
                    <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Visual Placeholder</span>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </ProjectLayout>
  );
}
