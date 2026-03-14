import { ProjectLayout } from "@/src/components/ProjectLayout";
import { FadeIn } from "@/src/components/FadeIn";

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
    description: "A deep dive into the technical aspects of creative production, focusing on 3D modeling, sculpting, and real-time environment building.",
    images: images.slice(0, 20),
  },
  {
    id: "digital-comic",
    title: "Digital Comic Project",
    description: "A visual narrative development project exploring comic storytelling, pacing, and digital illustration techniques.",
    images: images.slice(20, 40),
  },
  {
    id: "graphic-traditional",
    title: "Graphic Traditional Artwork",
    description: "An exploration of traditional graphic art techniques, blending physical mediums with digital enhancements for unique visual outputs.",
    images: images.slice(40, 60),
  },
  {
    id: "character-design",
    title: "Character Design and Animation Studies",
    description: "A series of character design explorations and animation tests focusing on expression, movement, and personality.",
    images: images.slice(60, 85),
  }
];

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
                {project.images.map((src, index) => (
                  <div key={index} className="relative overflow-hidden rounded-xl border border-white/10 group break-inside-avoid shadow-lg">
                    <img
                      src={src}
                      alt={`${project.title} image ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </ProjectLayout>
  );
}
