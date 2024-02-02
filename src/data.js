import re3 from "../public/slides/re3-slide.jpg";
import ghost from "../public/slides/gr-slide.jpg";
import mk from "../public/slides/mk.jpg";
import nfs from "../public/slides/nfss.jpg";
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
import race from "../public/genres/race.jpg";

export const genres = [
  {
    id: 1,
    title: "Strategic",
    players: "8593",
    img: strategic,
  },
  {
    id: 2,
    title: "Action",
    players: "6123",
    img: action,
  },
  {
    id: 3,
    title: "Sport",
    players: "8543",
    img: sport,
  },
  {
    id: 4,
    title: "Fight",
    players: "6543",
    img: fight,
  },
  {
    id: 5,
    title: "Race",
    players: "5543",
    img: race,
  },
];

import fifa from "../public/productions/fifa.jpg";
import mafia from "../public/productions/mafia.jpg";
import mortal from "../public/productions/mk.jpg";
import need from "../public/productions/nfs.jpg";
import re2remake from "../public/productions/re2.jpg";
import re3remake from "../public/productions/residentvil3.jpeg";
import stronghold from "../public/productions/stronghold.jpg";
import tomb from "../public/productions/tomb.jpg";

export const production = [
  {
    id: "1",
    title: "FIFA 2023",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit.",
    price: "41",
    img: fifa,
  },
  {
    id: "2",
    title: "Mafia Definitive",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit.",
    price: "32",
    img: mafia,
  },
  {
    id: "3",
    title: "Mortal Kombat X",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit.",
    price: "40",
    img: mortal,
  },
  {
    id: "4",
    title: "Resident Evil 2 Remake",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit.",
    price: "38",
    img: re2remake,
  },
  {
    id: "5",
    title: "Need For Speed: Heat",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit.",
    price: "35",
    img: need,
  },
  {
    id: "6",
    title: "Resident Evil 3 Remake",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit.",
    price: "32",
    img: re3remake,
  },
  {
    id: "7",
    title: "Stronghold: Warlord",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit.",
    price: "38",
    img: stronghold,
  },
  {
    id: "8",
    title: "Tomb Rider",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique voluptate ab quisquam, odit distinctio tenetur nulla aliquid quod placeat veniam vero nisi hic blanditiis deleniti. Id iure perspiciatis ex soluta perferendis mollitia deleniti aperiam provident cupiditate enim aut corrupti totam maxime dicta, reprehenderit.",
    price: "26",
    img: tomb,
  },
];

import person1 from "../public/users/1.jpg";
import person2 from "../public/users/2.jpg";
import person3 from "../public/users/3.jpg";
import person4 from "../public/users/4.jpg";
import person5 from "../public/users/5.jpg";
import person6 from "../public/users/6.jpg";
import person7 from "../public/users/7.jpg";
import person8 from "../public/users/8.jpg";
import person9 from "../public/users/9.jpg";
import person10 from "../public/users/10.jpg";
import person11 from "../public/users/11.jpg";
import person12 from "../public/users/12.jpg";
import person13 from "../public/users/13.jpg";
import person14 from "../public/users/14.jpg";
import person15 from "../public/users/15.jpg";
import person16 from "../public/users/16.jpg";
import person17 from "../public/users/17.jpg";
import person18 from "../public/users/18.jpg";

export const gamers = [
  {
    id: 1,
    img: person1,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. :))))))",
  },
  {
    id: 2,
    img: person2,
    online: false,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi.",
  },
  {
    id: 3,
    img: person3,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi.",
  },
  {
    id: 4,
    img: person4,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur??? :))))).",
  },
  {
    id: 5,
    img: person5,
    online: false,
    comment: "Lorem ipsum dolor :))))))))))))",
  },
  {
    id: 6,
    img: person6,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab  facere optio quasi!!!!!!!!!!!",
  },
  {
    id: 7,
    img: person7,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. numquam quas doloribus dolorum perferendis facere optio quasi. :(",
  },
  {
    id: 8,
    img: person8,
    online: true,
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit ;)",
  },
  {
    id: 9,
    img: person9,
    online: false,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi.",
  },
  {
    id: 10,
    img: person10,
    online: true,
    comment: "Lorem ipsum dolor sit amet!!",
  },
  {
    id: 11,
    img: person11,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi.",
  },
  {
    id: 12,
    img: person12,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi.",
  },
  {
    id: 13,
    img: person13,
    online: false,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi.",
  },
  {
    id: 14,
    img: person14,
    online: false,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi.",
  },
  {
    id: 15,
    img: person15,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi.",
  },
  {
    id: 16,
    img: person16,
    online: false,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam.",
  },
  {
    id: 17,
    img: person17,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi.",
  },
  {
    id: 18,
    img: person18,
    online: true,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi.",
  },
];

export const feedback = [
  {
    id: 1,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique",
    username: "Jake Meannheim",
    img: person1,
  },
  {
    id: 2,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique",
    username: "Jane Fillip",
    img: person2,
  },
  {
    id: 3,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique.",
    username: "Tilda Feinmann",
    img: person3,
  },
  {
    id: 4,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis.",
    username: "Martina Lopez",
    img: person4,
  },
  {
    id: 5,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique.",
    username: "Alan Wane",
    img: person5,
  },
  {
    id: 6,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis.",
    username: "Sylvia Tracy",
    img: person10,
  },
  {
    id: 7,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique sapiente modi facilis similique magnam nemo, numquam.",
    username: "Aria Chambers",

    img: person6,
  },
  {
    id: 8,
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ipsam ex similique? Iure aspernatur, ipsam excepturi sequi, ab porro velit sapiente modi facilis similique magnam nemo, numquam quas doloribus dolorum perferendis facere optio quasi. Maxime error similique",
    username: "Samira Nasiri",
    img: person15,
  },
];

import stream1 from "../public/stream/story1.jpg";
import story2 from "../public/stream/story2.jpg";
import story3 from "../public/stream/story3.jpg";
import story4 from "../public/stream/story4.jpg";
import story5 from "../public/stream/story5.jpg";
import story6 from "../public/stream/story6.jpg";
import story7 from "../public/stream/story7.jpg";
import story8 from "../public/stream/story8.jpg";

export const stories = [
  {
    id: "1",
    title: "Age of Empires",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    storyImg: stream1,
    profileImg: person1,
    src: "https://www.youtube.com/embed/BiC249vXiIo?si=F5ThuBQ1IP_lzfAQ",
  },
  {
    id: "2",
    title: "Resident Evil 3: Remake",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    storyImg: story2,
    profileImg: person3,
    src: "https://www.youtube.com/embed/j_RzhCR6fXs?si=SKK4d5JfYa0yomuB",
  },
  {
    id: "3",
    title: "Battlefield V",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    storyImg: story3,
    profileImg: person6,
    src: "https://www.youtube.com/embed/3U97eHziwgE?si=R4yYGd9p3slkdsql",
  },
  // {
  //   id: 4,
  //   title: "Stronghold 2",
  //   descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  //   storyImg: story4,
  //   profileImg: person7,
  // },
  {
    id: "5",
    title: "Company Of Heros",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    storyImg: story5,
    profileImg: person10,
    src: "https://www.youtube.com/embed/BiC249vXiIo?si=F5ThuBQ1IP_lzfAQ",
  },
  {
    id: "6",
    title: "Skyrim V",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    storyImg: story6,
    profileImg: person12,
    src: "https://www.youtube.com/embed/UXSMHxygY9s?si=014k8_wkcncNU_Qg",
  },
  {
    id: "7",
    title: "FIFA 23",
    descrition: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    storyImg: story7,
    profileImg: person13,
    src: "https://www.youtube.com/embed/C2VNcQ6tZbs?si=qj2SFDiyl9PSBEIb",
  },
];

import activision from "../public/companies/activision.jpg";
import blizzard from "../public/companies/blizzard.jpg";
import capcom from "../public/companies/capcom.jpg";
import ea from "../public/companies/ea.jpg";
import ubisoft from "../public/companies/ubisoft.jpg";

export const companies = [
  {
    id: 1,
    img: activision,
  },
  {
    id: 2,
    img: blizzard,
  },
  {
    id: 3,
    img: capcom,
  },
  {
    id: 4,
    img: ea,
  },
  {
    id: 5,
    img: ubisoft,
  },
];

// import video1 from "../public/videos/streaming.mp4";

export const videos = [
  {
    id: "1",
    src: "https://www.youtube.com/embed/UXSMHxygY9s?si=014k8_wkcncNU_Qg",
  },
  {
    id: "2",
    src: "https://www.youtube.com/embed/j_RzhCR6fXs?si=SKK4d5JfYa0yomuB",
  },
  {
    id: "3",
    src: "https://www.youtube.com/embed/BiC249vXiIo?si=F5ThuBQ1IP_lzfAQ",
  },
  {
    id: "4",
    src: "https://www.youtube.com/embed/xO6PbsWX3zA?si=js-CkArvDCZHc7ZX",
  },
  {
    id: "5",
    src: "https://www.youtube.com/embed/C2VNcQ6tZbs?si=qj2SFDiyl9PSBEIb",
  },
  {
    id: "6",
    src: "https://www.youtube.com/embed/3U97eHziwgE?si=R4yYGd9p3slkdsql",
  },
];
