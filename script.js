// مثال لتوليد قائمة المحاضرات
const lectures = [
  {title:"محاضرة علم الدم", file:"pdf/lecture1.pdf"},
  {title:"محاضرة الأحياء الدقيقة", file:"pdf/lecture2.pdf"},
  {title:"محاضرة الكيمياء الحيوية", file:"pdf/lecture3.pdf"}
];

const lectureList = document.getElementById("lecture-list");
lectures.forEach(l=>{
  let li=document.createElement("li");
  li.innerHTML=`<a href="${l.file}">${l.title}</a>`;
  lectureList.appendChild(li);
});

// معرض الصور
const photos = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"];
const gallery = document.getElementById("photo-gallery");
photos.forEach(p=>{
  let img=document.createElement("img");
  img.src=p;
  gallery.appendChild(img);
});

// الأخبار
const news = [
  {title:"خبر 1", body:"محتوى الخبر الأول"},
  {title:"خبر 2", body:"محتوى الخبر الثاني"}
];
const newsList = document.getElementById("news-list");
news.forEach(n=>{
  let div=document.createElement("div");
  div.innerHTML=`<h4>${n.title}</h4><p>${n.body}</p>`;
  newsList.appendChild(div);
});