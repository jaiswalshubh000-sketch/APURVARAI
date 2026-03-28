import { useEffect, useState } from "react";
import { GoogleGenAI } from "@google/genai";

const rawUrls = [
  "1-wkDFP8V32oTcNBBiBv6gzzDSGBjVBJD",
  "10LPU08FM5i2EIGfbrBhgR5ijCMcxVJaG",
  "10R6NAmSGMy-Z53pH-YsOulx7VwnMQOGo",
  "10czcR4ZFRPIRpbQ1WSM0aDRzX68ikEtq",
  "10wkb00BVyPhSCahQomJix33CQDTELeiA",
  "12CmwyzNuUTZxwZSn-7e1tSAsp-PdncBP",
  "12MYh_lDMrD7Pl-fWxwtq9vNZPtWA97yE",
  "12Q7hjHshWnH1SFqqmRqnxN-Lm4qKJ1C8",
  "14VyN1gbifL5NrTbBaPHWsauvlF46OUmI",
  "14hykVpsuyP9jxYKsR-1UmPPQCxnKTMJz",
  "14ySRs2-uKaoj1wbEPERUC5qZHR6DFe8-",
  "1546PxEEzgecxrP3RS1CNm0OZVRZBJ4dl",
  "15Or403UFmumu-cRE86eApfA7Zrk92lwZ",
  "15hme3pfNCHPXLri4FMx6Y3JnXIOOYSWj",
  "18POSBcSPelpPZLPLLnsdoh4vkpaL8TLb",
  "1BF30n4dALQ1SVcmnj7Cj21UZYGZmyoGD",
  "1BnzrVErQOMc9-h8mH14Br7TBA_4IHv4N",
  "1CU6DFgJODeM1Le-Vu12lh2Rtz6x_Vbls",
  "1EQdNoYqmV9ySSPvyz-V2XA-jzbuQGNwx",
  "1H5GjO8WsDjllHlux-1nMj9X0qUl2eIQg",
  "1HdiWLQYdLZr19qhadzPrHYd1Tot_JQtX",
  "1Hn2n7CEZKw1dNtrsnwAKaPBxNyAijLI8",
  "1M8h1BllW7UpaGnu-KENJr00gO3ls7qej",
  "1MEoT3EQNmvjZCKwoFLUWKCCriiV26EUi",
  "1MJXKv4UBNUo-jEDPZHc7QlFw4gycNzPn",
  "1NTVbRT3nsoiB9pxbKNe8J_u_WZdg-TiW",
  "1O0jyiVs0sxncEQFfHaDXdzbgarirogLt",
  "1Q3S0op9ZBNDyLbw8vzZRbE-2wtveZ_HW",
  "1S5u7Wkcm8bpf8ivTJptf1AOQ8lfdzN5B",
  "1S6OGOnncZjz15oo-UJm97NuN-4-CHofA",
  "1SryOrcR6cu1ipwbnNW381Gi9BwhLdQZG",
  "1TCBgJpshMyjU1WRUTGa5L3wIK1jhXs8w",
  "1TRpxWIamseyYeNSz7qP5umLbndKwdm1B",
  "1T_BTjaKadbt4ImrwRVh9XhS_kvu3B3hA",
  "1Tt6UnynqCozWLwjBY7_tOYNQ3C8T8OdW",
  "1U9Q0IlZbo4zi6BI5HOb26NWUOH96rpiI",
  "1UyycvRC8QmIq3rjqeidqB94uwIWhswbb",
  "1WBN91tHPRWPJXfo6tWMPiFYyvRtlC-gg",
  "1WQAVKmuOdITx4wQPm2xwHDejanKt31sE",
  "1WYHefUOJEhDCsxsKFZ8T_56YOz28aAtR",
  "1YFEURev3gXMPAQ0a4zO9pWFYC1kE7eLq",
  "1YIizBt6x67G7zxMmuHoYTqnQb9iOgyz9",
  "1ZJpWltfca3o0InStrVLL3Xbf1o3h87pg",
  "1ZNwqbxFKxz1zK3YL0nYCGLJ9AkJ40sdR",
  "1ZY-ZqNxC_a_PA5miLC05ssbVjcbf7kto",
  "1Zo_CU0FCVnYIBfPfm4X0_b1ZbQf54jX9",
  "1a0csI_iVeioHWO2YqqjGnI7VeH_RRh0e",
  "1aebPbmku56rdU9Tyb8AYJYbzZsyxSNo0",
  "1baXGqpMEQ9I3vOeaNMGoY1uWxhbekOwA",
  "1cIzAKWr6lNHRB8R_xrEzDZjtniYsFbEZ",
  "1cUJaoVxWL7a93ytLywJyvelvj-W5fRuP",
  "1d7OlJLBMhBsq8P1jSfUkL4BunUUNYRKt",
  "1dMWK5oRG3FKhtbt1BuyuB-uxLuUHhxlX",
  "1e7wP9NWVcK6V4p-DrPPnCEfGiI-QAZRC",
  "1fKqjlk4VyTCcLcf0MWMYU7ckK2x4MfFN",
  "1huneKqJyHC5j-nEGrnO7BB4h_SguGGx6",
  "1i8UgV7FYyr5nGAD3j3MbgmTJzZNmHDBL",
  "1iNjNf8RSR9YvyIinIHtLm6FAbbB8yD-1",
  "1iRIaJ5Ti2z8qKdw43D2SphiejIBZ4p05",
  "1ilzoeGl5pQo4Da-2jcreGOT3dfBkIsGA",
  "1in7xcic6COf0HBmoO-0tub5zjdSYN2Wn",
  "1j0FA106y3ObPjypHhvfwucyBTkmtDT7s",
  "1kSlr0QpMHxC1PF30c763IfPVH25_NjFD",
  "1kd2dmG7SqHOzRtd_-PDZK3s2QBrWbncd",
  "1lFxdNS2SAt7W2TGqy4ZjxqOSDdmxRRHV",
  "1mFS826P9a9qLWj0Jx1xpYGehpsdYjvLK",
  "1mHuN2SzGz__kd5b2N7Pq-W6lzRQo2lnG",
  "1mfRjP_gGSpklESB7GwkVy4S9fQVNnZZm",
  "1nxj_Mre_pi1ij5GF-aLAPY1aNeqi-onL",
  "1pO_9fwlcn4Ksk-IQ8q-rp_IryKlHB69S",
  "1qOhBrGHu84JM8bZW1rMopPo7wCOULxMc",
  "1qTsTesj3ZzxvdjPn0njCRWXB4wUh1Oem",
  "1qclfEf_6GqTncFvQbY-V2YWGTOpg95_G",
  "1sIb6Pbg4SNpdXxkSZtwepfRcP_apvm0B",
  "1t7vjTYRR5WP36ssvlsn8qIVim_LKQyFc",
  "1tjiPPe5k34FOfXKZgWVqvgL9eO24y20x",
  "1u4VZH4DrvFlU-JKqlDlxHw2KZKalGnVi",
  "1uOallAUnzTrGd9okYwDkiIq2osgxQbRk",
  "1v1_mtgVbyy-zSV_yQ7H58DK5Xy1NpRBu",
  "1vrOCIDjSHwee756MbGcQhjVzLp6VE57Z",
  "1wLwAnw5MYMiUDydot9tOmOm-HAn2RU_z",
  "1x-5ssaoWEGJhSTa3KSfxg-L_l14GI6gC",
  "1y_yMckaD_m7tHSOBGdDnViZdR8pwSicl",
  "1yk2PvGzwlGMQ9mIxkUVUYX2UTFERFXXG",
  "1z26M-CjqrEfqm54hfzI46OLASgLpVguo",
  "14hEnkxJWwko3GM0IA9TzOuEMfVFUczqB",
  "16398IxBbbf6O2L_kbIjAUrRYGsifzvF9"
];

const prompt = "Classify this image into exactly one of the following 4 categories. Return ONLY the category number (1, 2, 3, or 4).\n\n" +
"RULE 1 -> \"3D Environment Development\"\n" +
"Assign any image that shows:\n" +
"- ZBrush sculpts or high-poly meshes\n" +
"- Blender or Maya 3D models\n" +
"- Unreal Engine environment screenshots\n" +
"- Textured 3D assets\n" +
"- Wire-frame or retopology views\n" +
"- Any rendered 3D scene or environment\n\n" +
"RULE 2 -> \"Digital Comic\"\n" +
"Assign any image that shows:\n" +
"- Sequential comic panels\n" +
"- Illustrated story pages with panel borders\n" +
"- Comic-style speech bubbles or captions\n" +
"- Page layouts with multiple illustrated frames\n" +
"- Narrative sequential art\n\n" +
"RULE 3 -> \"Graphic Traditional Artwork\"\n" +
"Assign any image that shows:\n" +
"- Pencil, charcoal, or ink drawings on paper\n" +
"- Watercolour or acrylic painted work\n" +
"- Mixed media physical artwork\n" +
"- Scanned or photographed traditional art pieces\n" +
"- Sketchbook pages that are NOT character design studies\n\n" +
"RULE 4 -> \"Character Design and Animation Studies\"\n" +
"Assign any image that shows:\n" +
"- Character turnaround sheets (front/side/back views)\n" +
"- Expression charts or emotion sheets\n" +
"- Pose study sheets\n" +
"- Animation breakdown frames\n" +
"- Character design concept sheets\n" +
"- Digital character illustrations clearly meant as design references\n\n" +
"If it's ambiguous, pick the most specific/technical category.\n" +
"Return ONLY the number: 1, 2, 3, or 4.";

export function Audit() {
  const [results, setResults] = useState<Record<string, string[]>>({
    "1": [],
    "2": [],
    "3": [],
    "4": []
  });
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const run = async () => {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const newResults: Record<string, string[]> = { "1": [], "2": [], "3": [], "4": [] };
      
      for (let i = 0; i < rawUrls.length; i++) {
        const id = rawUrls[i];
        const url = "https://drive.google.com/thumbnail?id=" + id + "&sz=w1000";
        
        try {
          const imgRes = await fetch(url);
          const arrayBuffer = await imgRes.arrayBuffer();
          // Convert ArrayBuffer to base64
          let binary = '';
          const bytes = new Uint8Array(arrayBuffer);
          const len = bytes.byteLength;
          for (let j = 0; j < len; j++) {
              binary += String.fromCharCode(bytes[j]);
          }
          const base64 = window.btoa(binary);
          
          const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: {
              parts: [
                { text: prompt },
                { inlineData: { data: base64, mimeType: "image/jpeg" } }
              ]
            }
          });
          
          const category = response.text?.trim() || "unknown";
          if (newResults[category]) {
            newResults[category].push("\"https://drive.google.com/file/d/" + id + "/view?usp=sharing\"");
          }
        } catch (e) {
          console.error("Failed for " + id, e);
        }
        
        setProgress(i + 1);
        setResults({ ...newResults });
        // Small delay to avoid rate limits
        await new Promise(r => setTimeout(r, 500));
      }
      setDone(true);
    };
    
    run();
  }, []);

  return (
    <div className="p-20">
      <h1 className="text-2xl mb-4">Auditing Images... {progress} / {rawUrls.length}</h1>
      {done && <p className="text-green-500 mb-4">Done!</p>}
      <pre className="bg-gray-900 p-4 rounded text-xs overflow-auto">
        {JSON.stringify(results, null, 2)}
      </pre>
    </div>
  );
}
