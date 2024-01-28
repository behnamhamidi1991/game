import re3 from "../public/slides/re3-slide.jpg";
import ghost from "../public/slides/gr-slide.jpg";
import mk from "../public/slides/mk-slide.jpg";
import nfs from "../public/slides/nfs-slide.jpg";
import re2 from "../public/slides/re2-slide.jpg";

export const featured = [
  {
    id: 1,
    title: "Resident Evil 3 Remake",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit facilis sed labore odio aliquam vel officiis eius! Inventore similique beatae dolore eum consectetur vero explicabo, aut, voluptatem quasi iusto ratione dignissimos tenetur ad! Exercitationem necessitatibus repellat atque, consectetur, molestias aliquam esse eligendi error odit harum aspernatur soluta at laborum ad hic repudiandae aliquid. Cum atque sit est odit aliquam corporis voluptas sequi! Fugit, assumenda inventore suscipit ducimus voluptatem tenetur? Enim animi minus, illo cumque incidunt libero dicta! Sequi hic voluptatem voluptates voluptatibus aperiam, quaerat dignissimos repellat itaque ex minus cum laudantium non tenetur ratione! Adipisci, quaerat, quis perspiciatis eaque unde similique odio ipsum quo illum numquam, vitae dolorem cum.",
    rate: 7.9,
    genre: "action",
    img: re3,
  },
  {
    id: 2,
    title: "Ghost Recon: Wildlands",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit facilis sed labore odio aliquam vel officiis eius! Inventore similique beatae dolore eum consectetur vero explicabo, aut, voluptatem quasi iusto ratione dignissimos tenetur ad! Exercitationem necessitatibus repellat atque, consectetur, molestias aliquam esse eligendi error odit harum aspernatur soluta at laborum ad hic repudiandae aliquid. Cum atque sit est odit aliquam corporis voluptas sequi! Fugit, assumenda inventore suscipit ducimus voluptatem tenetur? Enim animi minus, illo cumque incidunt libero dicta! Sequi hic voluptatem voluptates voluptatibus aperiam, quaerat dignissimos repellat itaque ex minus cum laudantium non tenetur ratione! Adipisci, quaerat, quis perspiciatis eaque unde similique odio ipsum quo illum numquam, vitae dolorem cum.",
    rate: 6.4,
    genre: "action",
    img: ghost,
  },

  {
    id: 3,
    title: "Mortal Kombat X",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit facilis sed labore odio aliquam vel officiis eius! Inventore similique beatae dolore eum consectetur vero explicabo, aut, voluptatem quasi iusto ratione dignissimos tenetur ad! Exercitationem necessitatibus repellat atque, consectetur, molestias aliquam esse eligendi error odit harum aspernatur soluta at laborum ad hic repudiandae aliquid. Cum atque sit est odit aliquam corporis voluptas sequi! Fugit, assumenda inventore suscipit ducimus voluptatem tenetur? Enim animi minus, illo cumque incidunt libero dicta! Sequi hic voluptatem voluptates voluptatibus aperiam, quaerat dignissimos repellat itaque ex minus cum laudantium non tenetur ratione! Adipisci, quaerat, quis perspiciatis eaque unde similique odio ipsum quo illum numquam, vitae dolorem cum.",
    rate: 6.4,
    genre: "action",
    img: mk,
  },
  {
    id: 4,
    title: "Need For Speed: Heat",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit facilis sed labore odio aliquam vel officiis eius! Inventore similique beatae dolore eum consectetur vero explicabo, aut, voluptatem quasi iusto ratione dignissimos tenetur ad! Exercitationem necessitatibus repellat atque, consectetur, molestias aliquam esse eligendi error odit harum aspernatur soluta at laborum ad hic repudiandae aliquid. Cum atque sit est odit aliquam corporis voluptas sequi! Fugit, assumenda inventore suscipit ducimus voluptatem tenetur? Enim animi minus, illo cumque incidunt libero dicta! Sequi hic voluptatem voluptates voluptatibus aperiam, quaerat dignissimos repellat itaque ex minus cum laudantium non tenetur ratione! Adipisci, quaerat, quis perspiciatis eaque unde similique odio ipsum quo illum numquam, vitae dolorem cum.",
    rate: 6.4,
    genre: "race",
    img: nfs,
  },

  {
    id: 5,
    title: "Resident Evil 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit facilis sed labore odio aliquam vel officiis eius! Inventore similique beatae dolore eum consectetur vero explicabo, aut, voluptatem quasi iusto ratione dignissimos tenetur ad! Exercitationem necessitatibus repellat atque, consectetur, molestias aliquam esse eligendi error odit harum aspernatur soluta at laborum ad hic repudiandae aliquid. Cum atque sit est odit aliquam corporis voluptas sequi! Fugit, assumenda inventore suscipit ducimus voluptatem tenetur? Enim animi minus, illo cumque incidunt libero dicta! Sequi hic voluptatem voluptates voluptatibus aperiam, quaerat dignissimos repellat itaque ex minus cum laudantium non tenetur ratione! Adipisci, quaerat, quis perspiciatis eaque unde similique odio ipsum quo illum numquam, vitae dolorem cum.",
    rate: 7.4,
    genre: "action",
    img: re2,
  },
];

import action from "../public/genres/action.jpg";
import fight from "../public/genres/fight.jpg";
import sport from "../public/genres/sport.jpg";
import strategic from "../public/genres/strategic.jpg";

export const genres = [
  {
    id: 1,
    title: "Strategic",
    players: "2543",
    img: strategic,
  },
  {
    id: 2,
    title: "Action",
    players: "2543",
    img: action,
  },
  {
    id: 3,
    title: "Sport",
    players: "2543",
    img: sport,
  },
  {
    id: 4,
    title: "Fight",
    players: "2543",
    img: fight,
  },
];
